import data from '../data.json';
import { Product } from './entities/product.ts';

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
