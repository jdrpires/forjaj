FROM node:18-alpine

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm ci --omit=dev

# Copiar código da aplicação
COPY . .

# Expor porta
EXPOSE 3000

# Comando para fazer build e iniciar
CMD ["sh", "-c", "npm run build && npm start"]