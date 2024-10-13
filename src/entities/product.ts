import { v4 as randomUUID } from "uuid";
import { ShoppingCart } from "./shoppingCart";

export class Product {
  private _id: string = randomUUID();
  private _quantity: number = 1;
  private _total: number = 0;

  constructor(
    private _name: string,
    private _price: number,
    private _category: string,
    private _imageUrl: string
  ) {
    this.updateTotal();
  }

  // Getters e Setters
  get id() {
    return this._id;
  }

  get total() {
    return this._total;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(quantity: number) {
    if (quantity >= 1) {
      this._quantity = quantity;
    }
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  // Atualiza o total
  private updateTotal() {
    this._total = this._price * this._quantity;
  }

  // Atualiza o carrinho com base na quantidade do produto
  private updateCart() {
    if (this._quantity >= 1) {
      ShoppingCart.addToCart(this);
    } else {
      ShoppingCart.removeProduct(this);
    }
  }

  // Incrementa e decrementa quantidade
  incrementQuantity() {
    this._quantity++;
    this.updateTotal();
    this.updateCart();
  }

  decrementQuantity() {
    if (this._quantity > 1) {
      this._quantity--;
      this.updateTotal();
      this.updateCart();
    }
  }

  // Escolhe a quantidade de cada prato
  private chooseQtdFood() {
    const idFood = document.getElementById(this._id);
    const btnFood = idFood?.querySelector<HTMLButtonElement>(".product-btn");
    const productImage = idFood?.querySelector<HTMLImageElement>(".product-image");

    if (!btnFood || !idFood) return;

    btnFood.addEventListener("click", () => {
      btnFood.classList.replace("product-btn", "qtd-food");
      this.updateContent(btnFood);

      // Adiciona borda à imagem
      productImage?.classList.add("bordered");

      // Adiciona os eventos de incremento e decremento
      this.addQuantityControls(btnFood);

      // Adiciona o produto ao carrinho
      this.updateCart();
    });
  }

  // Atualiza o conteúdo do botão
  private updateContent(btnFood: Element) {
    btnFood.innerHTML = `
      <div id="decrement"><img class="icons-qtd" src="/assets/images/icon-decrement-quantity.svg" alt="Decrementar quantidade"></div>
      ${this.quantity} 
      <div id="increment"><img class="icons-qtd" src="/assets/images/icon-increment-quantity.svg" alt="Incrementar quantidade"></div>
    `;
  }

  // Adiciona eventos de incremento e decremento
  private addQuantityControls(btnFood: Element) {
    const incrementBtn = btnFood.querySelector("#increment");
    const decrementBtn = btnFood.querySelector("#decrement");

    incrementBtn?.addEventListener("click", () => {
      this.incrementQuantity();
      this.updateContent(btnFood);
    });

    decrementBtn?.addEventListener("click", () => {
      this.decrementQuantity();
      this.updateContent(btnFood);
    });
  }

  // Renderiza o produto no HTML
  render() {
    const productHTML = document.createElement("li");
    productHTML.className = "product";
    productHTML.id = this._id;

    productHTML.innerHTML = `
      <div class="product-shop">
        <img class="product-image" src="${this._imageUrl}" alt="${this._name}" />
        <button class="product-btn">
          <img src="/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart">
          <p>Add to Cart</p> 
        </button>
      </div>
      <div class="product-infos">
        <span class="product-category">${this._category}</span>
        <span class="product-name">${this._name}</span>
        <span class="product-price">R$ ${this._price.toFixed(2)}</span>
      </div>
    `;

    const productListHTM = document.querySelector("#product-list");
    if (productListHTM) {
      productListHTM.appendChild(productHTML);
      this.chooseQtdFood(); // Chama a função para interatividade
    } else {
      console.error("Elemento #product-list não encontrado no DOM.");
    }
  }
}
