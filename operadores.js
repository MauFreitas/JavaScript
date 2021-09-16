//Operadores basicos
var adição = 5+5;
var subtração =  15 - 5;
var multiplicação = 5 * 2;
var divisão = 20 / 2;
var resto = 20 % 3;

console.log("Adição = " + adição);
console.log("Subtração = " + subtração);
console.log("Multiplicação = " + multiplicação);
console.log("Divisão = " + divisão);
console.log("Resto = " + resto );

/*Para calcular e somar separadamente 
é necessario colocar parenteses*/
var num1 = 10;
var num2 = 50;
var resultado= (num1 + num2) / (8 + 2);
console.log("Resultado: "+resultado);

//Operadores Incrementais
var incremento = 1;
//Incremento+1 é a forma de adicionar um valor ao já existente
incremento = incremento+1;
//Incremento++: é a forma simplificada
incremento++;
console.log("Incrementais: "+incremento);

//Operadores Decrementais
var decremento = 12;
decremento =decremento-1;
decremento--;//Decremento--: é a forma simplificada
console.log("Decrementais: "+decremento);

//Operadores aditivos 
var Y = 5;
Y += 5;// é o mesmo que: Y=Y+5
console.log("Aditivos: "+Y);

//Atribuição com subtração
var AtribuiçãoComSub=19;
AtribuiçãoComSub-=9;
// é o mesmo que: AtribuiçãoComSub= AtribuiçãoComSub -9;
console.log("Atribuição com sub: "+ AtribuiçãoComSub);

//Atribuição com Multiplicação
var AtribuiçãoComMult= 2;
AtribuiçãoComMult*=5;
// é o mesmo que: AtribuiçãoComMult= AtribuiçãoComMult*5;
console.log("Atribuição com multi: "+AtribuiçãoComMult);

//Atribuição com divisão
var atribuiçãoComDivisão=50;
atribuiçãoComDivisão/=5;
//é o mesmo que: atribuiçãoComDivisão= atribuiçãoComDivisão/5;
console.log("Atribuição com divisão: "+ atribuiçãoComDivisão)

//Posterior e Anterior
var a= 4;
var b=3;
var adiçãoIncrementePosterior=a+b++;
console.log("Adição Incremento posterior: "+ adiçãoIncrementePosterior);

var adiciçãoIncrementoAnterior= a + ++b;
console.log("Adição Incremento anterior: "+ adiciçãoIncrementoAnterior);

var c= 5
var d= 6
var subtraçãoDecrementoPosterior = c + d--;
console.log("Subtração Decremento Posterior: "+ subtraçãoDecrementoPosterior);

var subtraçãoDecrementoAnterior = c + --d;
console.log("Subtração Decremento Anterior: "+ subtraçãoDecrementoAnterior);