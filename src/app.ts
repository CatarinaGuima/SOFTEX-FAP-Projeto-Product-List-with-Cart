import data from "../data.json";
import { Product } from "./entities/product.ts";
import { ShoppingCart } from "./entities/shoppingCart.ts";

document.addEventListener("DOMContentLoaded", () => {
  for (const productData of data) {
    const product = new Product(
      productData.name,
      productData.price,
      productData.category,
      productData.image.desktop
    )
    product.render(); // Renderizar o produto no DOM
  }
});

/* 
const banana = new Product("Banana", 10, "Fruta", "http://image.com");
const uva = new Product("uva", 5, "Fruta", "http://image.com");

banana.incrementQuantity();
banana.incrementQuantity();
banana.incrementQuantity();
uva.incrementQuantity();
uva.incrementQuantity();
console.log(ShoppingCart);
ShoppingCart.removeProduct(banana);
console.log(ShoppingCart);
*/

