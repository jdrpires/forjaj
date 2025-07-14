-- Criar banco de dados
CREATE DATABASE forjaj_db;

-- Conectar ao banco
\c forjaj_db;

-- Extensões
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela de usuários
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(120) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de produtos
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    images JSON,
    stock INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de pedidos
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    payment_id VARCHAR(100),
    shipping_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de itens do pedido
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

-- Tabela de orçamentos
CREATE TABLE quotes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL,
    phone VARCHAR(20),
    description TEXT NOT NULL,
    file_path VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending',
    admin_response TEXT,
    quoted_price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir usuário administrador padrão (senha: admin123)
INSERT INTO users (email, password_hash, name, is_admin) 
VALUES ('admin@forjaj.com.br', 'pbkdf2:sha256:260000$VQKWjmhY$46c9ac9ce1d36f1c8e2b1c8f5e4a3b2d1e0f9g8h7i6j5k4l3m2n1o0p9q8r7s6t5u4v3w2x1y0z', 'Administrador', TRUE);

-- Inserir produtos de exemplo
INSERT INTO products (name, description, price, category, images, stock) VALUES
('Vaso Decorativo Geométrico', 'Vaso moderno com design geométrico, perfeito para plantas pequenas', 45.90, 'Decoração', '["https://via.placeholder.com/300x300"]', 10),
('Porta-canetas Personalizado', 'Organizador de mesa com compartimentos para canetas e lápis', 25.50, 'Utilitários', '["https://via.placeholder.com/300x300"]', 15),
('Miniatura de Carro Clássico', 'Réplica detalhada de carro clássico em escala 1:64', 35.00, 'Brinquedos', '["https://via.placeholder.com/300x300"]', 8),
('Suporte para Smartphone', 'Base ajustável para celular com ângulo personalizável', 18.90, 'Utilitários', '["https://via.placeholder.com/300x300"]', 20),
('Luminária LED Customizada', 'Luminária com design exclusivo e iluminação LED', 89.90, 'Decoração', '["https://via.placeholder.com/300x300"]', 5),
('Engrenagem Técnica', 'Peça técnica para reposição ou prototipagem', 12.50, 'Peças Técnicas', '["https://via.placeholder.com/300x300"]', 25),
('Chaveiro Personalizado', 'Chaveiro com nome ou logo personalizado', 8.90, 'Utilitários', '["https://via.placeholder.com/300x300"]', 50),
('Boneco Articulado', 'Figura colecionável com articulações móveis', 42.00, 'Brinquedos', '["https://via.placeholder.com/300x300"]', 12);

-- Índices para melhor performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_active ON products(is_active);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_quotes_status ON quotes(status);