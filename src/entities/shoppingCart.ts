import { Product } from "./product.js";

export class ShoppingCart {
  private static _products: Product[] = [];
  private static _orderTotal: number = 0;
  private static _quantityTotal: number = 0;

  static calculateTotal() {
    this._orderTotal = 0;
    this._quantityTotal = 0;

    this._products.forEach((product) => {
      this._orderTotal += product.total;
      this._quantityTotal += product.quantity;
    });
  }

  static removeProduct(product: Product) {
    //Remove um produto do carrinho
    this._products = this._products.filter((item) => item.id !== product.id);
    this.calculateTotal();
  }

  static addToCart(product: Product) {
    // Verificar se o produto existe no carrinho
    const productExists = this._products.includes(product);

    // Se caso existir, sobrescrever o valor
    if (!productExists) {
      this._products.push(product);
    }

    //Atualiza o valor total da compra
    this.calculateTotal();
    this.toHTML();
    // console.log(JSON.parse(JSON.stringify(ShoppingCart._products)));
  }

  static toHTML() {
    const cartHTML = document.querySelector(".product-cart");

    if (!cartHTML) return;

    const _quantityTotalHTML =
      cartHTML.firstElementChild?.firstElementChild?.firstElementChild;

    if (!_quantityTotalHTML) return;

    _quantityTotalHTML.innerHTML = this._quantityTotal.toString();

    const cartListHTML = cartHTML.querySelector("ul");

    if (!cartListHTML) return;
    cartListHTML.innerHTML = "";

    //Remove a Imagem e a mensagem do carrinho vazio
    const imageEmptyCart = document.querySelector(".product-empty-cart");
    const msgEmptyCart = document.querySelector(".product-cart-message");

    if (imageEmptyCart && msgEmptyCart) {
      imageEmptyCart.remove();
      msgEmptyCart.remove();
    }

    // Lista com todos os items no Carrinho de Compras
    for (const product of this._products) {
      const liHTML = document.createElement("li");
      liHTML.innerHTML = `
      <div id="product-list-cart">
        <span class="product-cart-name">${product.name}</span>
        <div class="product-cart-infos">
          <span class="product-cart-quantity">${product.quantity}x</span>
          <span class="product-cart-price">@ $${product.price}</span>
          <span class="product-cart-total">$${product.total}</span>
          <span><img class="product-cart-icon" src="../assets/images/icon-remove-item.svg" alt="icon remove item" </span>
        </div>
      </div>
      <hr/>
      `;
      cartListHTML.appendChild(liHTML);
    }

    const orderTotalCart = document.querySelector(".order-total-cart");
    if (orderTotalCart) {
      orderTotalCart.innerHTML = `  
      <div class="order-total-cart">
       <span class="order-total-msg"><p>Order Total</p></span>
       <span class="order-total-value">$${this._orderTotal}</span>
      </div>
      `;
    }
    
    const carboNeutral = document.querySelector(".carbon-neutral-cart");
    if (!carboNeutral) return;
    if (carboNeutral) {
      carboNeutral.innerHTML = `
     <div class="carbon-neutral-cart">
      <img src="../assets/images/icon-carbon-neutral.svg" alt"" />
      <p class="carbon-neutral-msg">This is a <strong>carbon-neutral</strong> delivery</p>
     </div>
    `;
    }
  }

  static get products() {
    return this._products;
  }

  static get total() {
    return this._orderTotal;
  }
}
