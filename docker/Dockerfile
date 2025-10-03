FROM node:24-alpine

WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar TODAS las dependencias (incluyendo dev)
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para desarrollo con hot reload
CMD ["npm", "run", "start:dev"]
