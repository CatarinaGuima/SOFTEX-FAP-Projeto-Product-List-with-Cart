import { Product } from "./product.js";

export class ShoppingCart {
  private static _product: Product[] = [];
  private static _total: number = 0;

  static addToCart(product: Product) {
    this._total += product.total; //Atualiza o valor total da compra

    // Verificar se o produto existe no carrinho;
    // Se caso existir, sobrescrever o valor
  }

  static get products() {
    return this._product;
  }

  static get total() {
    return this._total;
  }
}
