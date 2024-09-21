import { v4 as randomUUID } from "uuid";

export class Product {
    private _id: string = randomUUID();
    private _name: string;
    private _price: number;
    private _category: string;
    private _imageUrl: string;
  
    constructor(name: string, price: number, category: string, imageUrl: string) {
      this._name = name;
      this._price = price;
      this._category = category;
      this._imageUrl = imageUrl;
    }
  
    render() {
      const productContainer = document.createElement("div");
      productContainer.className = "product";
      productContainer.innerHTML = `
      
        <div class="product-shop">
          <img src="${this._imageUrl}" alt="${this._name}" class="product-image" />
          <button class="product-btn">
            <img src="./assets/images/icon-add-to-cart.svg" alt="">
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
  