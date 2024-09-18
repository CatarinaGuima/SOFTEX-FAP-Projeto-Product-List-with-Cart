import data from '../data.json';
import { Product } from './entities/product';

for (const product of data) {
     new Product(
        product.name,
        product.price,
        product.category,
        product.image.desktop
    );
}