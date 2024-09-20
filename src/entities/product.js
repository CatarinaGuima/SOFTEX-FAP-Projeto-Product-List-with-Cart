"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const uuid_1 = require("uuid");
class Product {
    constructor(name, price, category, imageUrl) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._price = price;
        this._category = category;
        this._imageUrl = imageUrl;
    }
}
exports.Product = Product;
