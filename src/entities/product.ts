//Importações necessárias
import { v4 as randomUUID } from "uuid";

//Classe Product
export class Product {
  private _id: string = randomUUID();
  private _name: string;
  private _price: number;
  private _category: string;
  private _imageUrl: string;
  private _quantity: number = 0;

  //Construtor da classe Product
  constructor(name: string, price: number, category: string, imageUrl: string) {
    this._name = name;
    this._price = price;
    this._category = category;
    this._imageUrl = imageUrl;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(quantity: number) {
    this._quantity += quantity;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }


  //Método para escolher a quantidade de cada prato
  chooseFood() {
    const idFood = document.getElementById(this._id);
    const btnFood = idFood?.querySelector(".product-btn");
    const productImage = idFood?.querySelector(".product-image"); // Seleciona a imagem do produto
    let count = 1;

    if (btnFood) {
      btnFood.addEventListener("click", () => {
        btnFood.classList.replace("product-btn", "qtd-food");

        // Função para atualizar o conteúdo do botão
        const updateContent = () => {
          btnFood.innerHTML = `
            <div id="decrement"><img class="icons-qtd" src="./assets/images/icon-decrement-quantity.svg" alt="Decrementar quantidade"></div>
            ${count}
            <div id="increment"><img class="icons-qtd" src="./assets/images/icon-increment-quantity.svg" alt="Incrementar quantidade"></div>
          `;
        };

        // Inicializa o conteúdo
        updateContent();

        // Adiciona a borda na imagem ao clicar no botão
        if (productImage) {
          productImage.classList.add("bordered"); // Adiciona a classe que cria a borda
        }

        // Adiciona os event listeners para incrementar e decrementar
        const decrementBtn = btnFood.querySelector("#decrement");
        const incrementBtn = btnFood.querySelector("#increment");

        decrementBtn?.addEventListener("click", () => {
          if (count > 1) {
            count--;
            updateContent(); // Atualiza o conteúdo após decremento
          }
        });

        incrementBtn?.addEventListener("click", () => {
          count++;
          updateContent(); // Atualiza o conteúdo após incremento
        });
      });
    }
  }

  //Renderiza no HTML
  render() {
    const productContainer = document.createElement("div");
    productContainer.className = "product";
    productContainer.id = this._id;
    productContainer.innerHTML = `
        <div class="product-shop">
          <img class="product-image" src="${this._imageUrl}" alt="${
      this._name}"  />
          <button class="product-btn">
            <img src="./assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart">
            <p>Add to Cart</p> 
          </button>
        </div>
        <div class="product-infos">
          <p class="product-category">${this._category}</p>
          <h2 class="product-name">${this._name}</h2>
          <p class="product-price">R$ ${this._price.toFixed(2)}</p>
        </div>
      `;

    // Adiciona o produto ao contêiner de produtos no DOM
    const productList = document.querySelector("#product-container");

    if (productList) {
      productList.appendChild(productContainer);
    } else {
      console.error("Elemento #product-list não encontrado no DOM.");
    }
  }
}
