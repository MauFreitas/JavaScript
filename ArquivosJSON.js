var fs= require("fs");
var nomeArquivo = "carros.json"
var carros= ["Gol","Palio","Uno","Celta"];
var concessionaria = {
    nome: "Concessionaria YXZ",
    carros
}
console.log(concessionaria);

fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function(err){
    if(err){
        console.log(err);
    }else {
        fs.readFile(nomeArquivo,"utf-8", function(err, data){
            if (err){
                console.log(err);
            } else{
                var obj = JSON.parse(data);
                obj.carros.push("HRV");
                console.log(obj);
                fs.writeFile(nomeArquivo, JSON.stringify(obj), function(err){
                    if (err){
                        console.log(err);
                    }
                })
            }
        })
    }
})
//JSON.stringify transforma o objeto em uma string legivel
//JSON.parse reverte o conteudo para objeto
//Resumindo: Dificil pra krl
