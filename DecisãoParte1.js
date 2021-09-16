var a = 60;
var b = 50;
if (a>b){
    //condição a ser executada caso seja verdadeiro
    console.log("A maior que B");
}else if (b<a) {
    //se não, executa o codigo abaixo
    console.log("B maior que A");
} else if (a === b); {
    console.log("A e B são iguais");
}

if (a>b){
    console.log("Executar somente se a > b")
}
console.log("Sempre executar");
//Abaixo está se for igual ou maior execute...
var c =60;
var d = 50;
if (c>=d){
    console.log("C é maior ou igual a D");
}
if (d<=c) {
    console.log("D é menor ou igual a C");
}
/* se a variavel for uma string o "===" não vai funcionar, porém
 se for apenas "==" irá imprimir errado, mas irá imprimir */
var e = 10;
var f = 10;
if (e === f) {
    console.log("e é igual a f");
}
//Abaixo está, se for diferente execute...
var g = 10
var h = 11
if (g != h){
    console.log("g é diferente de h"
    )
}