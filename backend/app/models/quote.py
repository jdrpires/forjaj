from config.database import db
from datetime import datetime

class Quote(db.Model):
    __tablename__ = 'quotes'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20))
    description = db.Column(db.Text, nullable=False)
    file_path = db.Column(db.String(255))  # Caminho do arquivo STL/imagem
    status = db.Column(db.String(50), default='pending')  # pending, quoted, accepted, rejected
    admin_response = db.Column(db.Text)
    quoted_price = db.Column(db.Numeric(10, 2))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'description': self.description,
            'file_path': self.file_path,
            'status': self.status,
            'admin_response': self.admin_response,
            'quoted_price': float(self.quoted_price) if self.quoted_price else None,
            'created_at': self.created_at.isoformat()
        }