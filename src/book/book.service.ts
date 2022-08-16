import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument } from './book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book')
    private readonly bookModel: Model<BookDocument>,
  ) { }

  async create(name: string, price: number, description: string): Promise<BookDocument> {
    const newBook = new this.bookModel({ name, price, description });
    return newBook.save();
  }
}