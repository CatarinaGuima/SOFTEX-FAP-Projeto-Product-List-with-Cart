"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("../data.json"));
const product_1 = require("./entities/product");
for (const product of data_json_1.default) {
    new product_1.Product(product.name, product.price, product.category, product.image.desktop);
}
