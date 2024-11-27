(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=a(i);fetch(i.href,c)}})();const v=[{image:{thumbnail:"./src/assets/images/image-waffle-thumbnail.jpg",mobile:"./src/assets/images/image-waffle-mobile.jpg",tablet:"./src/assets/images/image-waffle-tablet.jpg",desktop:"./src/assets/images/image-waffle-desktop.jpg"},name:"Waffle with Berries",category:"Waffle",price:6.5},{image:{thumbnail:"./src/assets/images/image-creme-brulee-thumbnail.jpg",mobile:"./src/assets/images/image-creme-brulee-mobile.jpg",tablet:"./src/assets/images/image-creme-brulee-tablet.jpg",desktop:"./src/assets/images/image-creme-brulee-desktop.jpg"},name:"Vanilla Bean Crème Brûlée",category:"Crème Brûlée",price:7},{image:{thumbnail:"./src/assets/images/image-macaron-thumbnail.jpg",mobile:"./src/assets/images/image-macaron-mobile.jpg",tablet:"./src/assets/images/image-macaron-tablet.jpg",desktop:"./src/assets/images/image-macaron-desktop.jpg"},name:"Macaron Mix of Five",category:"Macaron",price:8},{image:{thumbnail:"./src/assets/images/image-tiramisu-thumbnail.jpg",mobile:"./src/assets/images/image-tiramisu-mobile.jpg",tablet:"./src/assets/images/image-tiramisu-tablet.jpg",desktop:"./src/assets/images/image-tiramisu-desktop.jpg"},name:"Classic Tiramisu",category:"Tiramisu",price:5.5},{image:{thumbnail:"./src/assets/images/image-baklava-thumbnail.jpg",mobile:"./src/assets/images/image-baklava-mobile.jpg",tablet:"./src/assets/images/image-baklava-tablet.jpg",desktop:"./src/assets/images/image-baklava-desktop.jpg"},name:"Pistachio Baklava",category:"Baklava",price:4},{image:{thumbnail:"./src/assets/images/image-meringue-thumbnail.jpg",mobile:"./src/assets/images/image-meringue-mobile.jpg",tablet:"./src/assets/images/image-meringue-tablet.jpg",desktop:"./src/assets/images/image-meringue-desktop.jpg"},name:"Lemon Meringue Pie",category:"Pie",price:5},{image:{thumbnail:"./src/assets/images/image-cake-thumbnail.jpg",mobile:"./src/assets/images/image-cake-mobile.jpg",tablet:"./src/assets/images/image-cake-tablet.jpg",desktop:"./src/assets/images/image-cake-desktop.jpg"},name:"Red Velvet Cake",category:"Cake",price:4.5},{image:{thumbnail:"./src/assets/images/image-brownie-thumbnail.jpg",mobile:"./src/assets/images/image-brownie-mobile.jpg",tablet:"./src/assets/images/image-brownie-tablet.jpg",desktop:"./src/assets/images/image-brownie-desktop.jpg"},name:"Salted Caramel Brownie",category:"Brownie",price:4.5},{image:{thumbnail:"./src/assets/images/image-panna-cotta-thumbnail.jpg",mobile:"./src/assets/images/image-panna-cotta-mobile.jpg",tablet:"./src/assets/images/image-panna-cotta-tablet.jpg",desktop:"./src/assets/images/image-panna-cotta-desktop.jpg"},name:"Vanilla Panna Cotta",category:"Panna Cotta",price:6.5}];var r=[];for(var g=0;g<256;++g)r.push((g+256).toString(16).slice(1));function _(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}var l,T=new Uint8Array(16);function q(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(T)}var j=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const f={randomUUID:j};function L(e,t,a){if(f.randomUUID&&!t&&!e)return f.randomUUID();e=e||{};var s=e.random||(e.rng||q)();return s[6]=s[6]&15|64,s[8]=s[8]&63|128,_(s)}const o=class o{static calculateTotal(){this._orderTotal=0,this._quantityTotal=0,this._products.forEach(t=>{this._orderTotal+=t.total,this._quantityTotal+=t.quantity})}static removeProduct(t){this._products=this._products.filter(a=>a.id!==t.id),this.calculateTotal()}static addToCart(t){this._products.includes(t)||this._products.push(t),this.calculateTotal(),this.toHTML()}static toHTML(){var h,b;const t=document.querySelector(".product-cart");if(!t)return;const a=(b=(h=t.firstElementChild)==null?void 0:h.firstElementChild)==null?void 0:b.firstElementChild;if(!a)return;a.innerHTML=this._quantityTotal.toString();const s=t.querySelector("ul");if(!s)return;s.innerHTML="";const i=document.querySelector(".product-empty-cart"),c=document.querySelector(".product-cart-message");i&&c&&(i.remove(),c.remove());for(const m of this._products){const y=document.createElement("li");y.innerHTML=`
      <div id="product-list-cart">
        <span class="product-cart-name">${m.name}</span>
        <div class="product-cart-infos">
          <span class="product-cart-quantity">${m.quantity}x</span>
          <span class="product-cart-price">@ $${m.price}</span>
          <span class="product-cart-total">$${m.total}</span>
          <span><img class="product-cart-icon" src="./src/assets/images/icon-remove-item.svg" alt="icon remove item" </span>
        </div>
      </div>
      <hr/>
      `,s.appendChild(y)}const n=document.querySelector(".order-total-cart");n&&(n.innerHTML=`  
      <div class="order-total-cart">
       <span class="order-total-msg"><p>Order Total</p></span>
       <span class="order-total-value">$${this._orderTotal}</span>
      </div>
      `);const u=document.querySelector(".carbon-neutral-cart");if(!u)return;u&&(u.innerHTML=`
     <div class="carbon-neutral-cart">
      <img src="./src/assets/images/icon-carbon-neutral.svg" alt"" />
      <p class="carbon-neutral-msg">This is a <strong>carbon-neutral</strong> delivery</p>
     </div>
    `);const p=document.querySelector(".confirm-order-cart");p&&(p.innerHTML=`
      <div>
        <button class="btn-confirm-order-cart">Confirm Order</button>
      </div>
      `)}static get products(){return this._products}static get total(){return this._orderTotal}};o._products=[],o._orderTotal=0,o._quantityTotal=0;let d=o;class k{constructor(t,a,s,i){this._name=t,this._price=a,this._category=s,this._imageUrl=i,this._id=L(),this._quantity=1,this._total=0,this.updateTotal()}get id(){return this._id}get total(){return this._total}get quantity(){return this._quantity}set quantity(t){t>=1&&(this._quantity=t)}get name(){return this._name}get price(){return this._price}updateTotal(){this._total=this._price*this._quantity}updateCart(){this._quantity>=1?d.addToCart(this):d.removeProduct(this)}incrementQuantity(){this._quantity++,this.updateTotal(),this.updateCart()}decrementQuantity(){this._quantity>1&&(this._quantity--,this.updateTotal(),this.updateCart())}chooseQtdFood(){const t=document.getElementById(this._id),a=t==null?void 0:t.querySelector(".product-btn"),s=t==null?void 0:t.querySelector(".product-image");!a||!t||a.addEventListener("click",()=>{a.classList.replace("product-btn","qtd-food"),this.updateContent(a),s==null||s.classList.add("bordered"),this.addQuantityControls(a),this.updateCart()})}updateContent(t){t.innerHTML=`
      <div id="decrement"><img class="icons-qtd" src="./src/assets/images/icon-decrement-quantity.svg" alt="Decrementar quantidade"></div>
      ${this.quantity} 
      <div id="increment"><img class="icons-qtd" src="./src/assets/images/icon-increment-quantity.svg" alt="Incrementar quantidade"></div>
    `}addQuantityControls(t){const a=t.querySelector("#increment"),s=t.querySelector("#decrement");a==null||a.addEventListener("click",()=>{this.incrementQuantity(),this.updateContent(t)}),s==null||s.addEventListener("click",()=>{this.decrementQuantity(),this.updateContent(t)})}render(){const t=document.createElement("li");t.className="product",t.id=this._id,t.innerHTML=`
      <div class="product-shop">
        <img class="product-image" src="${this._imageUrl}" alt="${this._name}" />
        <button class="product-btn">
          <img src="./src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart">
          <p>Add to Cart</p> 
        </button>
      </div>
      <div class="product-infos">
        <span class="product-category">${this._category}</span>
        <span class="product-name">${this._name}</span>
        <span class="product-price">R$ ${this._price.toFixed(2)}</span>
      </div>
    `;const a=document.querySelector("#product-list");a?(a.appendChild(t),this.chooseQtdFood()):console.error("Elemento #product-list não encontrado no DOM.")}}document.addEventListener("DOMContentLoaded",()=>{for(const e of v)new k(e.name,e.price,e.category,e.image.desktop).render()});