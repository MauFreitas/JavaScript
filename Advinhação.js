/*1)Gerar um numero aleatorio entre 1 e 100
2)Inicializar o numero de tentativas como 10
3)Pedir o usuario para tentar advinhar o numero 
4)Decrementar o numero de tentativas
5)Verificar se o a tentativa está correta
6)Se estiver correta:Informar que acertou-Encerrar o jogo
7)Se estiver incorreta, e acabaram as tentativas: 
    -Informar que ele perdeu
    Se estiver incorreta e ainda tiver tentativas:
    -Informar o usuario o usuario se a tentativa é maior
 ou menor que o numero sorteado e pedir outra tentativa
*/

var readline = require("readline");
var rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var numeroAleatorio = Math.round(Math.random()*100);
if (numeroAleatorio === 0){
    numeroAleatorio= 1;
}
var numeroTentativa = 10


pergunta();

function pergunta(){
    rl.question("Tente Advinhar um número entre 1 e 100: ", function(numero){
    numero= parseInt(numero);
    numeroTentativa--;
    if (numero === numeroAleatorio){
        console.log("Parabéns!Acertou!!!");
        rl.close();
    } else if(numeroTentativa=== 0){
        console.log("Suas Tentativas acabaram!");
        rl.close();
    } else if (numero > numeroAleatorio){
        console.log("Numero errado, voce ainte tem "+ numeroTentativa + " tentativas."+ "O numero " +
                    "informado é maior que o sorteado.");
                    pergunta();
    } else {(numero < numeroAleatorio)
        console.log("Numero errado, voce ainte tem "+ numeroTentativa + " tentativas."+ "O numero " +
                    "informado é menor que o sorteado.");
                    pergunta();
    } 
});

console.log(numeroAleatorio)
}

