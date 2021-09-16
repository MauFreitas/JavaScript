var i = 4;
var j = 3;
var k = 7;
var l = 7;
if ((i>j) && (l>k)){
    console.log("i é maior que j - - -"+"  l é maior que k")

}
if ((i === j) || (k ===l)) {
    console.log("Um dos dois eram validos")
}
console.log(!(1>2));
if (!(1>2)){
    console.log("Execute")
}
var fruta = "laranja"
var valor = 0;
/*

1° maneira de fazer  

if (fruta ==="Maçã"){
    valor = 2
}else if (fruta ==="abacaxi"){
    valor = 3
}else if (fruta ==="limão"){
    valor = 4
}else if (fruta ==="melao"){
    valor = 5
}else if (fruta ==="laranja"){
    valor = 6
}else if (fruta ==="banana"){
    valor = 7
}else if (fruta ==="mamão"){
    valor = 10.50
}else {
    valor = 10
}
console.log("Valor: "+ valor);
*/
//2° maneira de fazer com switch
switch(fruta){
    case "banana":
        valor =10;
        break;
    case "limao":
        valor =11;
        break;
    case "alface":
        valor =12;
        break;
    case "lula":
        valor =13;
        break;
    case "papaya":
        valor =14;
        break;
    case "laranja":
        valor =15;
        break;
        default:
            valor = 9
}
console.log("Valor: "+ valor);
//Abaixo está exemplo de operador ternário
/* ao inves de usar elseif pode ser 
usado ? e : para obter resultado */
var x = 3;
var y = 5;
var resultado = "";
resultado = x < y ? "x maior que y" : "senão";
console.log(resultado);
//Para pergunta é usado o "?" se for de acordo com o prosto ele imprime
//caso contrario não imprime nada
//Caso a afirmação esteja em desacordo é usado o ":"