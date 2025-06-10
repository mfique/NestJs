import { Injectable } from '@nestjs/common';

interface Item {
  id: number;
  name: string;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private id = 1;

  create(name: string): Item {
    const item = { id: this.id++, name };
    this.items.push(item);
    return item;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }

  update(id: number, name: string): Item | undefined {
    const item = this.findOne(id);
    if (item) item.name = name;
    return item;
  }

  remove(id: number): boolean {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }
}