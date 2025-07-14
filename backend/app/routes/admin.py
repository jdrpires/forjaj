from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models.user import User
from app.models.product import Product
from app.models.order import Order
from app.models.quote import Quote
from config.database import db

admin_bp = Blueprint('admin', __name__)

def admin_required():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return user and user.is_admin

@admin_bp.route('/products', methods=['POST'])
@jwt_required()
def create_product():
    if not admin_required():
        return jsonify({'message': 'Acesso negado'}), 403
    
    data = request.get_json()
    product = Product(
        name=data['name'],
        description=data['description'],
        price=data['price'],
        category=data['category'],
        images=data.get('images', []),
        stock=data.get('stock', 0)
    )
    
    db.session.add(product)
    db.session.commit()
    
    return jsonify(product.to_dict()), 201

@admin_bp.route('/products/<int:product_id>', methods=['PUT'])
@jwt_required()
def update_product(product_id):
    if not admin_required():
        return jsonify({'message': 'Acesso negado'}), 403
    
    product = Product.query.get_or_404(product_id)
    data = request.get_json()
    
    product.name = data.get('name', product.name)
    product.description = data.get('description', product.description)
    product.price = data.get('price', product.price)
    product.category = data.get('category', product.category)
    product.images = data.get('images', product.images)
    product.stock = data.get('stock', product.stock)
    product.is_active = data.get('is_active', product.is_active)
    
    db.session.commit()
    return jsonify(product.to_dict())

@admin_bp.route('/products/<int:product_id>', methods=['DELETE'])
@jwt_required()
def delete_product(product_id):
    if not admin_required():
        return jsonify({'message': 'Acesso negado'}), 403
    
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    
    return jsonify({'message': 'Produto excluído'})

@admin_bp.route('/orders', methods=['GET'])
@jwt_required()
def get_all_orders():
    if not admin_required():
        return jsonify({'message': 'Acesso negado'}), 403
    
    orders = Order.query.order_by(Order.created_at.desc()).all()
    return jsonify([order.to_dict() for order in orders])

@admin_bp.route('/quotes', methods=['GET'])
@jwt_required()
def get_all_quotes():
    if not admin_required():
        return jsonify({'message': 'Acesso negado'}), 403
    
    quotes = Quote.query.order_by(Quote.created_at.desc()).all()
    return jsonify([quote.to_dict() for quote in quotes])

@admin_bp.route('/quotes/<int:quote_id>', methods=['PUT'])
@jwt_required()
def update_quote(quote_id):
    if not admin_required():
        return jsonify({'message': 'Acesso negado'}), 403
    
    quote = Quote.query.get_or_404(quote_id)
    data = request.get_json()
    
    quote.status = data.get('status', quote.status)
    quote.admin_response = data.get('admin_response', quote.admin_response)
    quote.quoted_price = data.get('quoted_price', quote.quoted_price)
    
    db.session.commit()
    return jsonify(quote.to_dict())