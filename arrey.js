//Array é mesmo que uma lista
var carros = ["Gol","Palio","Uno"] ;
console.log(carros);

var primeiroCarro= carros[0];
var segundoCarro= carros[1];
var terceiroCarro= carros[2];

console.log("Primeiro Carro: "+primeiroCarro);
console.log("Terceiro Carro: "+segundoCarro);
console.log("Terceiro Carro: "+terceiroCarro)
//Abaixo foi feito uma troca de Uno para Argo
carros[2]= "Argo";

console.log(carros[2]);

console.log("Tamnho do Array; "+carros.length);
console.log("Ultimo carro: " + carros[carros.length -1]);
//Abaixo está exemplo de Adição de um conteúdo na lista 
carros[03]= "Sandero"
console.log("Ultimo carro: " + carros[carros.length -1]);

carros[carros.length]= "Fit";
console.log("Ultimo carro: " + carros[carros.length -1]);
//Para mim usar push é o melhor jeito de adicionar um conteúdo a lista, porém só serve se for para adicionar como ultimo da lista
carros.push("Polo");
console.log(carros);
//JavaScrip tem a liberdade de colocar tanto string quanto numeros no Array
carros.push(21);
console.log(carros);



