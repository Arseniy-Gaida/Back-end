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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProductSchema {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'iPhone X',
        minLength: 2,
        maxLength: 50,
    }),
    __metadata("design:type", String)
], ProductSchema.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'iPhone X desc',
        minLength: 2,
        maxLength: 255,
    }),
    __metadata("design:type", String)
], ProductSchema.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 800,
        minimum: 1,
        maximum: 1000000,
    }),
    __metadata("design:type", Number)
], ProductSchema.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 1,
        minimum: 1,
    }),
    __metadata("design:type", Number)
], ProductSchema.prototype, "categoryId", void 0);
exports.ProductSchema = ProductSchema;
//# sourceMappingURL=product.schema%20copy.js.map