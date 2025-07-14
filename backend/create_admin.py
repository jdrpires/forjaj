from werkzeug.security import generate_password_hash
from app.models.user import User
from config.database import db
from app import create_app

app = create_app()

with app.app_context():
    # Verificar se admin já existe
    admin = User.query.filter_by(email='admin@forjaj.com.br').first()
    
    if admin:
        # Atualizar senha
        admin.set_password('admin123')
        db.session.commit()
        print("Senha do admin atualizada!")
    else:
        # Criar novo admin
        admin = User(
            email='admin@forjaj.com.br',
            name='Administrador',
            is_admin=True
        )
        admin.set_password('admin123')
        db.session.add(admin)
        db.session.commit()
        print("Admin criado!")
    
    print("Email: admin@forjaj.com.br")
    print("Senha: admin123")