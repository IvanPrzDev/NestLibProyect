import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBook(@Body() newBook: CreateBookDto) {
    return this.booksService.createBook(
      newBook.title,
      newBook.author,
      newBook.isbn,
      newBook.genre,
    );
  }
}
