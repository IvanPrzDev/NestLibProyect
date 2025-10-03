import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: '1',
      title: 'El Quijote',
      author: 'Miguel de Cervantes',
      isbn: '978-84-376-0494-7',
      genre: 'Novela',
      available: true,
    },
  ];

  getAllBooks() {
    return this.books;
  }

  createBook(title: string, author: string, isbn?: string, genre?: string) {
    const book: Book = {
      id: uuidv4(),
      title,
      author,
      isbn,
      genre,
      available: true,
    };

    this.books.push(book);
    return book;
  }

  reserveBook(id: string, userId: string) {
    const book = this.books.find((book) => book.id === id);
    if (book && book.available) {
      book.available = false;
      book.reservedBy = userId;
      book.reservedDate = new Date();
      return book;
    }
    return null;
  }

  returnBook(id: string) {
    const book = this.books.find((book) => book.id === id);
    if (book && !book.available) {
      book.available = true;
      book.reservedBy = undefined;
      book.reservedDate = undefined;
      return book;
    }
    return null;
  }
}
