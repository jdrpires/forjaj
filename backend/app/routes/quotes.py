from flask import Blueprint, request, jsonify
from flask_mail import Mail, Message
from app.models.quote import Quote
from config.database import db
import os
from werkzeug.utils import secure_filename

quotes_bp = Blueprint('quotes', __name__)
mail = Mail()

ALLOWED_EXTENSIONS = {'stl', 'obj', 'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@quotes_bp.route('/', methods=['POST'])
def create_quote():
    data = request.form
    file = request.files.get('file')
    
    file_path = None
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(os.getenv('UPLOAD_FOLDER'), filename)
        file.save(file_path)
    
    quote = Quote(
        name=data['name'],
        email=data['email'],
        phone=data.get('phone'),
        description=data['description'],
        file_path=file_path
    )
    
    db.session.add(quote)
    db.session.commit()
    
    # Enviar email
    try:
        msg = Message(
            'Nova Solicitação de Orçamento - ForjaJ',
            sender=os.getenv('MAIL_USERNAME'),
            recipients=['contato@forjaj.com.br']
        )
        msg.body = f"""
        Nova solicitação de orçamento:
        
        Nome: {quote.name}
        Email: {quote.email}
        Telefone: {quote.phone}
        Descrição: {quote.description}
        
        Arquivo anexado: {'Sim' if file_path else 'Não'}
        """
        mail.send(msg)
    except Exception as e:
        print(f"Erro ao enviar email: {e}")
    
    return jsonify({'message': 'Orçamento solicitado com sucesso'}), 201