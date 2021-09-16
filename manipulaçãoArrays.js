/*.pop remove o ultimo elemento 
do array e retorna o elemento removido*/

var carros = ["Gol","Palio","Uno","Sandero"];
var carro = carros.pop();
//console.log(carros[carros.length -1 ]);
//console.log(carro);
//console.log(carros);
var carro = carros.push("Sandero");
//console.log(carros);

/*.push insere o elemento no fim 
do array e retorna seu novo tamanho*/
carros.push("Argo");
//console.log(carros);


/*.shift remove o primeiro elemento do 
array, retorna elee e atualiza os outros indices*/
var carro = carros.shift();

//console.log(carros);
//console.log(carros);


/*.unshift adiciona um elemento no inicio do array, atualiza 
os outros indices e retorna o novo tamanho do arrays*/
carros.unshift("Onix");
//console.log(carros);

//Atualizar elemento do indice informado
carros[4]= "Novo Argo";
//console.log(carros);

/*Remove o elemento do indice informado
, deixando o o lugar em branco*/
//delete carros[0];
//console.log(carros[0]);

/*
    Primeiro parametro:posição inicial
    Quantos elementos serão removidos a partir do posição inicial
    Terceiro e demais parametro: quanto elementos serão inseridos a partir da posição inicial
*/
carros.splice(1,0,"Vectra","Polo");
//console.log(carros);

carros.splice(2,0);
//console.log(carros);


//Concat concatena um array em outro e retorna o novo array criado
var carrosAntigos = ["Fusca","Brasilia","Monza"];
var carrosAntigos2= ["Escort","Chevet","Fusca Azul"]
var todosOsCarros = carros.concat(carrosAntigos, carrosAntigos2);

//Splice cria um novo array sem alterar o array original
//Primeiro parametro: posição inicila
///segundo parametro: posição final
console.log(todosOsCarros);
var novoArray=todosOsCarros.slice(1,6);
console.log(novoArray);
