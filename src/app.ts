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
    );
    product.render();
    product.chooseFood();
  }
});

const product1 = new Product(
  data[0].name,
  data[0].price,
  data[0].category,
  data[0].image.desktop
);

const product2 = new Product(
  data[1].name,
  data[1].price,
  data[1].category,
  data[1].image.desktop
);

const cart = new ShoppingCart();

cart.addToCart(product1);
cart.addToCart(product2);

console.log(cart.products);
console.log(cart.products.length);
console.log(cart.total);
