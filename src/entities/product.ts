import {v4 as randomUUID} from "uuid"

export class Product {
    private _id = randomUUID();
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


    
}

