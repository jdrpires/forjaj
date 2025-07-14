from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config.database import db, init_db
from app.routes.auth import auth_bp
from app.routes.products import products_bp
from app.routes.orders import orders_bp
from app.routes.quotes import quotes_bp
from app.routes.admin import admin_bp
import os
from dotenv import load_dotenv

load_dotenv()

def create_app():
    app = Flask(__name__)
    
    # Configurações
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
    app.config['UPLOAD_FOLDER'] = os.getenv('UPLOAD_FOLDER', 'uploads')
    
    # Inicializar extensões
    db.init_app(app)
    jwt = JWTManager(app)
    CORS(app)
    
    # Registrar blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(products_bp, url_prefix='/api/products')
    app.register_blueprint(orders_bp, url_prefix='/api/orders')
    app.register_blueprint(quotes_bp, url_prefix='/api/quotes')
    app.register_blueprint(admin_bp, url_prefix='/api/admin')
    
    # Criar tabelas
    with app.app_context():
        init_db()
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)