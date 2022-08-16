import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  
  @Post()
  createBook(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  )
  {
    return this.bookService.create(name, price, description);
  }
}
