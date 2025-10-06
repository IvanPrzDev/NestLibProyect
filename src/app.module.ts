import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB_URI ||
        'mongodb://nestuser:nestpass@mongo:27017/nestlibproyect',
    ),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
