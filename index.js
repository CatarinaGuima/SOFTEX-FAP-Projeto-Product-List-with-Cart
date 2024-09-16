//Classe Produto
var Produto = /** @class */ (function () {
    //construtor da Classe Produto
    function Produto(id, nome, valor, categoria, imageUrl) {
        this._id = id;
        this._nome = nome;
        this._valor = valor;
        this._categoria = categoria;
        this._imageUrl = imageUrl;
    }
    return Produto;
}());
