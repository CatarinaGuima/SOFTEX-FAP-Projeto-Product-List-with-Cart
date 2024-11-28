import { Product } from "./product.js";

export class ShoppingCart {
  private static _products: Product[] = [];
  private static _orderTotal: number = 0;
  private static _quantityTotal: number = 0;

  static calculateTotals() {
    this._orderTotal = this._products.reduce(
      (total, product) => total + product.total,
      0
    );
    this._quantityTotal = this._products.reduce(
      (total, product) => total + product.quantity,
      0
    );
  }
  // Remove um produto do carrinho
  static removeProduct(product: Product) {
    this._products = this._products.filter((item) => item.id !== product.id);
    this.calculateTotals();
    this.updateCartUI();
  }

  static addToCart(product: Product) {
    // Verificar se o produto existe no carrinho
    const existingProduct = this._products.find(
      (item) => item.id === product.id
    );

    // Se caso existir, sobrescrever o valor
    if (existingProduct) {
      existingProduct.quantity = product.quantity; // Atualiza a quantidade
    } else {
      this._products.push(product);
    }

    this.calculateTotals();
    this.updateCartUI();
  }

  // Atualiza a interface do carrinho
  private static updateCartUI() {
    const cartElement = document.querySelector(".product-cart");
    if (!cartElement) return;
  
    const quantityElement = cartElement.querySelector(".title-cart span");
    const cartListElement = cartElement.querySelector(".list-cart");
    const emptyCartImage = cartElement.querySelector(".product-empty-cart");
    const emptyCartMessage = cartElement.querySelector(".product-cart-message");
    const orderTotalElement = cartElement.querySelector(".order-total-cart");
    const carbonNeutralElement = cartElement.querySelector(".carbon-neutral-cart");
    const confirmOrderElement = cartElement.querySelector(".confirm-order-cart");
  
    // Atualiza o contador total de itens
    if (quantityElement) {
      quantityElement.textContent = this._quantityTotal.toString();
    }
  
    // Limpa a lista de produtos
    if (cartListElement) {
      cartListElement.innerHTML = "";
    }
  
    if (this._products.length === 0) {
      // Se o carrinho estiver vazio, mostra a mensagem e esconde outros elementos
      emptyCartImage?.classList.remove("hidden");
      emptyCartMessage?.classList.remove("hidden");
      orderTotalElement?.classList.add("hidden");
      carbonNeutralElement?.classList.add("hidden");
      confirmOrderElement?.classList.add("hidden");
    } else {
      // Esconde a mensagem de carrinho vazio
      emptyCartImage?.classList.add("hidden");
      emptyCartMessage?.classList.add("hidden");
  
      // Exibe os produtos no carrinho
      this._products.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <div class="product-list-cart">
            <span class="product-cart-name">${product.name}</span>
            <div class="product-cart-infos">
              <span class="product-cart-quantity">${product.quantity}x</span>
              <span class="product-cart-price">@ $${product.price.toFixed(2)}</span>
              <span class="product-cart-total">$${product.total.toFixed(2)}</span>
              <img class="product-cart-icon" src="/assets/images/icon-remove-item.svg" alt="Remove item">
            </div>
          </div>
          <hr/>
        `;
  
        listItem.querySelector(".product-cart-icon")?.addEventListener("click", () => {
          this.removeProduct(product);
        });
  
        cartListElement?.appendChild(listItem);
      });
  
      // Exibe o total do pedido e outros elementos
      if (orderTotalElement) {
        orderTotalElement.classList.remove("hidden");
        orderTotalElement.innerHTML = `
          <div class="order-total-cart">
            <span class="order-total-msg"><p>Order Total</p></span>
            <span class="order-total-value">$${this._orderTotal.toFixed(2)}</span>
          </div>
        `;
      }
  
      if (carbonNeutralElement) {
        carbonNeutralElement.classList.remove("hidden");
        carbonNeutralElement.innerHTML = `
          <div class="carbon-neutral-cart">
            <img src="/assets/images/icon-carbon-neutral.svg" alt="Carbon neutral" />
            <p class="carbon-neutral-msg">This is a <strong>carbon-neutral</strong> delivery</p>
          </div>
        `;
      }
  
      if (confirmOrderElement) {
        confirmOrderElement.classList.remove("hidden");
        confirmOrderElement.innerHTML = `
          <div>
            <button class="btn-confirm-order-cart">Confirm Order</button>
          </div>
        `;
      }
    }
  }
  
  // Retorna os produtos do carrinho
  static get products() {
    return [...this._products];
  }

  // Retorna o valor total do pedido
  static get total() {
    return this._orderTotal;
  }

  // Retorna a quantidade total de itens no carrinho
  static get quantityTotal() {
    return this._quantityTotal;
  }
}
