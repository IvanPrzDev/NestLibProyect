import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  isbn?: string;

  @Prop()
  genre?: string;

  @Prop({ default: true })
  available: boolean;

  @Prop()
  reservedBy?: string;

  @Prop()
  reservedDate?: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
