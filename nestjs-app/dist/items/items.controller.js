"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const items_service_1 = require("./items.service");
let ItemsController = class ItemsController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    create(name) {
        return this.itemsService.create(name);
    }
    findAll() {
        return this.itemsService.findAll();
    }
    findOne(id) {
        const item = this.itemsService.findOne(Number(id));
        if (!item) {
            throw new common_1.NotFoundException('Item not found');
        }
        return item;
    }
    update(id, name) {
        return this.itemsService.update(Number(id), name);
    }
    remove(id) {
        return this.itemsService.remove(Number(id));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "remove", null);
ItemsController = __decorate([
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [items_service_1.ItemsService])
], ItemsController);
exports.ItemsController = ItemsController;
