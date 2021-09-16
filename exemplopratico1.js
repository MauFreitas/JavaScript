 /*Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 
 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.
Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.*/

 var multiplos = [];
 for (var i = 3; i<1000; i++) {
     if ((i%3 === 0) || (i% 5 === 0)){
     multiplos.push(i);
     } 
}

var sum = 0;
for (var i= 0; i < multiplos.length; i++){
    sum += multiplos[i];
}
 console.log(sum);