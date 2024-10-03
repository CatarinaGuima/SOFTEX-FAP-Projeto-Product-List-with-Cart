import { v4 as randomUUID } from "uuid";
import { ShoppingCart } from "./shoppingCart";

// Classe Product
export class Product {
  private _id: string = randomUUID();
  private _name: string;
  private _price: number;
  private _category: string;
  private _imageUrl: string;
  private _quantity: number = 0;
  private _total: number = 0;

  // Construtor da classe Product
  constructor(name: string, price: number, category: string, imageUrl: string) {
    this._name = name;
    this._price = price;
    this._category = category;
    this._imageUrl = imageUrl;
  }

  //Retorna o ID
  get id() {
    return this._id;
  }

  // Retorna o total
  get total() {
    return this._total;
  }

  // Retorna a quantidade
  get quantity() {
    return this._quantity;
  }

  // Define a quantidade
  set quantity(quantity: number) {
    if (quantity >= 1) {
      this._quantity = quantity;
    }
  }

  // Retorna o nome do produto
  get name() {
    return this._name;
  }

  // Retorna o preço do produto
  get price() {
    return this._price;
  }

  // Atualiza o total
  updateTotal() {
    this._total = this._price * this._quantity;
  }

  private updateCart() {
    if (this._quantity >= 1) {
      ShoppingCart.addToCart(this); // Atualiza o carrinho com o produto
    } else {
      ShoppingCart.removeProduct(this);
    }
  }

  // Incrementa a quantidade do produto
  incrementQuantity() {
    this._quantity++;
    this.updateCart();
    this.updateTotal();

    ShoppingCart.addToCart(this);
  }

  // Decrementa a quantidade do produto
  decrementQuantity() {
    if (this._quantity >= 1) {
      this._quantity--;
      this.updateCart();
      this.updateTotal();

      ShoppingCart.toHTML();
    }
  }

  // Método para escolher a quantidade de cada prato
  chooseQtdFood() {
    const idFood = document.getElementById(this._id);
    const btnFood = idFood?.querySelector(".product-btn");
    const productImage = idFood?.querySelector(".product-image"); // Seleciona a imagem do produto

    if (btnFood) {
      btnFood.addEventListener("click", () => {
        btnFood.classList.replace("product-btn", "qtd-food");
       
        
        // Inicializa o conteúdo
        this.updateContent(btnFood);

        // Adiciona a borda na imagem ao clicar no botão
        if (productImage) {
          productImage.classList.add("bordered"); // Adiciona a classe que cria a borda
        }

        // Adiciona os event listeners para incrementar e decrementar
        this.addQuantityControls(btnFood);
      });
    }
  }

  // Função para atualizar o conteúdo do botão
  private updateContent(btnFood: Element) {
    btnFood.innerHTML = `
      <div id="decrement"><img class="icons-qtd" src="./assets/images/icon-decrement-quantity.svg" alt="Decrementar quantidade"></div>
      ${this.quantity} 
      <div id="increment"><img class="icons-qtd" src="./assets/images/icon-increment-quantity.svg" alt="Incrementar quantidade"></div>
    `;
  }

  // Adiciona event listeners para os controles de quantidade
  private addQuantityControls(btnFood: Element) {
    const incrementBtn = btnFood.querySelector("#increment");
    const decrementBtn = btnFood.querySelector("#decrement");

    incrementBtn?.addEventListener("click", () => {
      this.incrementQuantity();
      this.updateContent(btnFood); // Atualiza o conteúdo após incremento
    });

    decrementBtn?.addEventListener("click", () => {
      this.decrementQuantity();
      this.updateContent(btnFood); // Atualiza o conteúdo após decremento
    });
  }

  // Renderiza o produto no HTML
  render() {
    const productHTML = document.createElement("li");
    productHTML.className = "product";
    // Adiciona o produto ao contêiner de produtos no DOM
    const productListHTM = document.querySelector("#product-list");

    if (!productListHTM) return;

    productHTML.id = this._id;
    productHTML.innerHTML = `
        <div class="product-shop">
          <img class="product-image" src="${this._imageUrl}" alt="${
      this._name
    }" />
          <button class="product-btn">
            <img src="./assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart">
            <p>Add to Cart</p> 
          </button>
        </div>
        <div class="product-infos">
          <span class="product-category">${this._category}</span>
          <span class="product-name">${this._name}</span>
          <span class="product-price">R$ ${this._price.toFixed(2)}</span>
        </div>
      `;

    if (productListHTM) {
      productListHTM.appendChild(productHTML);
    } else {
      console.error("Elemento #product-container não encontrado no DOM.");
    }

    this.chooseQtdFood(); // Chama a instância do método da classe Product
  }
}
