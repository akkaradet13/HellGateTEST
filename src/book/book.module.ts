import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { bookSchema } from 'src/bookSchema';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: bookSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
