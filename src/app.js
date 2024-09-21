"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_json_1 = require("../data.json");
var product_1 = require("./entities/product");
document.addEventListener("DOMContentLoaded", function () {
    for (var _i = 0, data_1 = data_json_1.default; _i < data_1.length; _i++) {
        var productData = data_1[_i];
        var product = new product_1.Product(productData.name, productData.price, productData.category, productData.image.desktop);
        product.render();
    }
});
