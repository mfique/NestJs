"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
let ItemsService = class ItemsService {
    constructor() {
        this.items = [];
        this.id = 1;
    }
    create(name) {
        const item = { id: this.id++, name };
        this.items.push(item);
        return item;
    }
    findAll() {
        return this.items;
    }
    findOne(id) {
        return this.items.find(item => item.id === id);
    }
    update(id, name) {
        const item = this.findOne(id);
        if (item)
            item.name = name;
        return item;
    }
    remove(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1)
            return false;
        this.items.splice(index, 1);
        return true;
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)()
], ItemsService);
exports.ItemsService = ItemsService;
