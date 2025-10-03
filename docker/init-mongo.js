// Script de inicialización para MongoDB
print('Iniciando configuración de la base de datos...');

// Crear usuario para la aplicación
db = db.getSiblingDB('nestlibproyect');

db.createUser({
  user: 'nestuser',
  pwd: 'nestpass',
  roles: [
    {
      role: 'readWrite',
      db: 'nestlibproyect',
    },
  ],
});

// Crear colección inicial de books (opcional)
db.books.insertOne({
  title: 'El Quijote',
  author: 'Miguel de Cervantes',
  isbn: '978-84-376-0494-7',
  genre: 'Novela',
  available: true,
  createdAt: new Date(),
});

db.books.insertOne({
  title: 'Cien años de soledad',
  author: 'Gabriel García Márquez',
  isbn: '978-84-376-0495-4',
  genre: 'Realismo mágico',
  available: true,
  createdAt: new Date(),
});

print('Base de datos configurada correctamente!');
