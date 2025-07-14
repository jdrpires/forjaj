from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db():
    from app.models.user import User
    from app.models.product import Product
    from app.models.order import Order, OrderItem
    from app.models.quote import Quote
    
    db.create_all()