import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body('name') name: string) {
    return this.itemsService.create(name);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const item = this.itemsService.findOne(Number(id));
    if (!item) {
      throw new NotFoundException('Item not found');
    }
    return item;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('name') name: string) {
    return this.itemsService.update(Number(id), name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(Number(id));
  }
}