import {Product} from './product.js';

export class ShoppingCart {
    private _product: Product[] = [];
    private _total: number = 0;

    addToCart(product: Product) {
        this._total += product.price; //Atualiza o valor total da compra
        this._product.push(product); //Adiciona o produto ao carrinho
    }

    get products() {
        return this._product;
    }

    get total() {
        return this._total;
    }


}