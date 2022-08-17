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

  async findAll(): Promise<BookDocument[]> {
    return this.bookModel.find();
  }

  async find(id: string): Promise<BookDocument>{
    return this.bookModel.findById(id).exec();
  }

  async update(
    id: string,
    newName: string,
    newPrice: number,
    newDescription: string,
    ): Promise<BookDocument>{
      let existingBook = await this.find(id);
      existingBook.name = newName ?? existingBook.name;
      existingBook.price = newPrice ?? existingBook.price;
      existingBook.description = newDescription ?? existingBook.description;

      return existingBook.save();
  }

  async delete(id: string){
    return this.bookModel.deleteOne({_id: id}).exec();
  }
}