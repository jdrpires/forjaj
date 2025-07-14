# ForjaJ - E-commerce de Impressões 3D

Sistema completo de e-commerce para venda de impressões 3D com área administrativa e sistema de orçamentos personalizados.

## 🚀 Funcionalidades

### Área Pública
- ✅ Página inicial com produtos em destaque
- ✅ Catálogo de produtos com filtros por categoria
- ✅ Detalhes do produto com galeria de imagens
- ✅ Carrinho de compras com edição de quantidades
- ✅ Sistema de checkout integrado com Mercado Pago
- ✅ Solicitação de orçamentos personalizados com upload de arquivos
- ✅ Páginas institucionais (Sobre, Contato)

### Área do Cliente
- ✅ Cadastro e login de usuários
- ✅ Área "Meus Pedidos" para acompanhamento
- ✅ Perfil do usuário editável

### Área Administrativa
- ✅ Dashboard administrativo
- ✅ Gerenciamento completo de produtos (CRUD)
- ✅ Visualização e controle de pedidos
- ✅ Gerenciamento de orçamentos personalizados
- ✅ Sistema de autenticação para administradores

## 🛠️ Tecnologias

### Backend
- **Python 3.9+** com Flask
- **PostgreSQL** como banco de dados
- **JWT** para autenticação
- **Mercado Pago SDK** para pagamentos
- **Flask-Mail** para envio de emails

### Frontend
- **Next.js 14** com TypeScript
- **Tailwind CSS** para estilização
- **Axios** para requisições HTTP
- **React Hook Form** para formulários
- **React Hot Toast** para notificações

## 📦 Instalação

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/forjaj.git
cd forjaj
```

### 2. Configurar o banco de dados
```bash
cd database
docker-compose up -d
```

### 3. Configurar o backend
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Editar o arquivo .env com suas configurações
python app.py
```

### 4. Configurar o frontend
```bash
cd frontend
npm install
npm run dev
```

## ⚙️ Configuração

### Variáveis de Ambiente (Backend)
```env
DATABASE_URL=postgresql://forjaj_user:forjaj_password@localhost:5432/forjaj_db
JWT_SECRET_KEY=seu-jwt-secret-key
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=seu-email@gmail.com
MAIL_PASSWORD=sua-senha-de-app
MERCADOPAGO_ACCESS_TOKEN=seu-token-mercadopago
UPLOAD_FOLDER=uploads
```

### Configuração do Mercado Pago
1. Criar conta no [Mercado Pago Developers](https://www.mercadopago.com.br/developers)
2. Obter o Access Token de produção/teste
3. Configurar webhook para receber notificações de pagamento

## 📁 Estrutura do Projeto

```
forjaj/
├── backend/
│   ├── app/
│   │   ├── models/          # Modelos do banco de dados
│   │   ├── routes/          # Rotas da API
│   │   └── services/        # Lógica de negócio
│   ├── config/              # Configurações
│   └── app.py              # Aplicação principal
├── frontend/
│   ├── src/
│   │   ├── app/            # Páginas Next.js
│   │   ├── components/     # Componentes React
│   │   ├── context/        # Contextos React
│   │   └── styles/         # Estilos CSS
│   └── package.json
├── database/
│   ├── init.sql            # Script de inicialização
│   └── docker-compose.yml  # Configuração PostgreSQL
└── README.md
```

## 🔐 Usuário Administrador Padrão

- **Email:** admin@forjaj.com.br
- **Senha:** admin123 (alterar após primeiro login)

## 📱 Responsividade

O sistema é totalmente responsivo, funcionando perfeitamente em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops

## 🎨 Design

Interface moderna e intuitiva com:
- Design limpo e profissional
- Cores consistentes com a marca
- Navegação intuitiva
- Feedback visual para ações do usuário

## 📧 Contato

Para dúvidas ou suporte:
- **Email:** contato@forjaj.com.br
- **Telefone:** (11) 99999-9999

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.