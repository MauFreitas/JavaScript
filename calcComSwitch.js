var operação =process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);
var resultado = 0;

switch (operação){
    case"soma":
    resultado = num1 + num2;
    break;
    case"subtração":
    resultado = num1 - num2;
    break;
    case"divisão":
    resultado = num1 / num2;
    break;
    case"multiplicação":
    resultado = num1 * num2;
    break;
    case"resto":
    resultado = num1 % num2;
    break;
    case"porcentagem":
    resultado = num1 * num2 / 100;
    break;
    default:
        resultado= 0;
}
console.log(resultado);
