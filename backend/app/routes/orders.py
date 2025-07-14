from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models.order import Order, OrderItem
from app.models.product import Product
from config.database import db
import mercadopago
import os

orders_bp = Blueprint('orders', __name__)

@orders_bp.route('/', methods=['POST'])
@jwt_required()
def create_order():
    user_id = get_jwt_identity()
    data = request.get_json()
    
    order = Order(
        user_id=user_id,
        total=data['total'],
        shipping_address=data['shipping_address']
    )
    
    db.session.add(order)
    db.session.flush()
    
    for item_data in data['items']:
        product = Product.query.get(item_data['product_id'])
        item = OrderItem(
            order_id=order.id,
            product_id=item_data['product_id'],
            quantity=item_data['quantity'],
            price=product.price
        )
        db.session.add(item)
    
    db.session.commit()
    
    # Criar preferência no Mercado Pago
    sdk = mercadopago.SDK(os.getenv('MERCADOPAGO_ACCESS_TOKEN'))
    
    preference_data = {
        "items": [
            {
                "title": f"Pedido #{order.id}",
                "quantity": 1,
                "unit_price": float(order.total)
            }
        ],
        "external_reference": str(order.id),
        "notification_url": f"{request.host_url}api/orders/webhook"
    }
    
    preference_response = sdk.preference().create(preference_data)
    
    return jsonify({
        'order_id': order.id,
        'payment_url': preference_response["response"]["init_point"]
    })

@orders_bp.route('/webhook', methods=['POST'])
def payment_webhook():
    data = request.get_json()
    
    if data.get('type') == 'payment':
        payment_id = data['data']['id']
        sdk = mercadopago.SDK(os.getenv('MERCADOPAGO_ACCESS_TOKEN'))
        payment_info = sdk.payment().get(payment_id)
        
        if payment_info['response']['status'] == 'approved':
            order_id = payment_info['response']['external_reference']
            order = Order.query.get(order_id)
            order.status = 'paid'
            order.payment_id = payment_id
            db.session.commit()
    
    return jsonify({'status': 'ok'})

@orders_bp.route('/user', methods=['GET'])
@jwt_required()
def get_user_orders():
    user_id = get_jwt_identity()
    orders = Order.query.filter_by(user_id=user_id).order_by(Order.created_at.desc()).all()
    return jsonify([order.to_dict() for order in orders])