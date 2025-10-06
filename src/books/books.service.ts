import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './book.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async getAllBooks() {
    return await this.bookModel.find().exec();
  }

  async createBook(
    title: string,
    author: string,
    isbn?: string,
    genre?: string,
  ) {
    const book = new this.bookModel({
      id: uuidv4(),
      title,
      author,
      isbn,
      genre,
      available: true,
    });

    return await book.save();
  }

  async reserveBook(id: string, userId: string) {
    const book = await this.bookModel.findOne({ id, available: true }).exec();
    if (book) {
      book.available = false;
      book.reservedBy = userId;
      book.reservedDate = new Date();
      return await book.save();
    }
    return null;
  }

  async returnBook(id: string) {
    const book = await this.bookModel.findOne({ id, available: false }).exec();
    if (book) {
      book.available = true;
      book.reservedBy = undefined;
      book.reservedDate = undefined;
      return await book.save();
    }
    return null;
  }
}
