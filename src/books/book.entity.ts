export class Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  genre?: string;
  available: boolean;
  reservedBy?: string;
  reservedDate?: Date;
}
