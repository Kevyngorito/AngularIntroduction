/*
let idade : number = 20;
let nome : string = "kevyn";

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
*/

function saudacoes(text:String, nome: String = "Kevyn"):string {
    return text + ' ' + nome + '...';
}

console.log(saudacoes("Olá", "teste"));

console.log(saudacoes("Olá"));


let mult = (x:number, y:number) => x*y;
let result = mult(10,20);
