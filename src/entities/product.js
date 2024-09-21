"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var uuid_1 = require("uuid");
var Product = /** @class */ (function () {
    function Product(name, price, category, imageUrl) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._price = price;
        this._category = category;
        this._imageUrl = imageUrl;
    }
    Product.prototype.render = function () {
        var productContainer = document.createElement("div");
        productContainer.className = "product";
        productContainer.innerHTML = "\n        <div class=\"product-shop\">\n          <img src=\"".concat(this._imageUrl, "\" alt=\"").concat(this._name, "\" class=\"product-image\" />\n          <button class=\"product-btn\">\n            <img src=\"./assets/images/icon-add-to-cart.svg\" alt=\"\">\n            <p>Add to Cart</p> \n          </button>\n        </div>\n        <div class=\"product-infos\">\n          <p class=\"product-category\">").concat(this._category, "</p>\n          <h2 class=\"product-name\">").concat(this._name, "</h2>\n          <p class=\"product-price\">R$ ").concat(this._price.toFixed(2), "</p>\n        </div>\n      ");
        // Adiciona o produto ao contêiner de produtos no DOM
        var productList = document.querySelector("#product-list");
        if (productList) {
            productList.appendChild(productContainer);
        }
        else {
            console.error("Elemento #product-list não encontrado no DOM.");
        }
    };
    return Product;
}());
exports.Product = Product;
