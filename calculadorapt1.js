var operação = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);
var resultado = 0;

if (operação === "soma"){
    resultado= num1 + num2;

}else if (operação==="subtracao"){
    resultado= num1-num2;

}else if (operação === "multiplicacao"){
    resultado= num1 * num2;

}else if (operação === "divisao") {
    resultado= num1 / num2;
} else if (operação==="resto"){
    resultado= num1%num2;

} else if (operação==="porcentagem"){
    resultado=num1 * num2 /100;
}
console.log(resultado);