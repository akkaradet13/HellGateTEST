import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { BookDocument } from './book.schema';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  
  @Post()
  createBook(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ): Promise<BookDocument>{
    return this.bookService.create(name, price, description);
  }

  @Get()
  findAllBook(
  ): Promise<BookDocument[]>{
    return this.bookService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findBook(@Param('id') id: string): Promise<BookDocument>{
    return this.bookService.find(id);
  }

  @Patch(':id')
  updateBook(
    @Param('id')  id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ): Promise<BookDocument> {
    return this.bookService.update(id, name, price, description);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
