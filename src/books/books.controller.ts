import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAllBooks() {
    return await this.booksService.getAllBooks();
  }

  @Post()
  async createBook(@Body() newBook: CreateBookDto) {
    return await this.booksService.createBook(
      newBook.title,
      newBook.author,
      newBook.isbn,
      newBook.genre,
    );
  }
}
