//Classe Produto
class Produto {
  private _id: string;
  private _nome: string;
  private _valor: number;
  private _categoria: string;
  private _imageUrl: string;

  //construtor da Classe Produto
  constructor(
    id: string,
    nome: string,
    valor: number,
    categoria: string,
    imageUrl: string
  ) {
    this._id = id;
    this._nome = nome;
    this._valor = valor;
    this._categoria = categoria;
    this._imageUrl = imageUrl;
  }

  
}
