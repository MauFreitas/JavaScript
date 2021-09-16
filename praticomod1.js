var numero = parseInt(process.argv[2]);
var numeroPrimos = [];
for (var i = 2; i <= numero; i++){
    if (vefificarNumeroPrimo(i)){
        numeroPrimos.push(i);
    }
}
console.log(numeroPrimos);

function vefificarNumeroPrimo(numero) {
    var numeroPrimo = true;
    for (var i = 2; i < numero; i++){
        if (numero% i ===0 ){
            numeroPrimo = false
            break;
        }
    }
    return numeroPrimos;
}