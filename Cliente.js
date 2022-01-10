export class Cliente{
    nome; 
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
// o #saldo realmente deixaria o saldo privado.. mas até então o _ é usado apesar de não o tornar realmente privado.. porém significa que ninguém pode mexer nisso
