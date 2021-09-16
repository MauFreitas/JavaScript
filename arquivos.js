var nomeDoArquivo = "MeuArquivo.txt"
var fs= require("fs");
fs.writeFile(nomeDoArquivo,"Um texto qualquer", function(err){
    if (err !== null){
        console.log(err);
    }else {
        console.log("Arquivo escrito com sucesso");

        fs.appendFile(nomeDoArquivo,"\nNova linha de texto", function(err){
            if (err){
                console.log(err);
            } else{fs.readFile(nomeDoArquivo, "utf-8", function(err, data){
            if (err){
               console.log(err); 
            } else{
                console.log(data);
                
            }
        })
        
            }
        })
    }
})

//WriteFile sobreescreve o arquivo anterior
//AppendFile adiciona ao arquivo existente 
//ReadFile consegue ler o arquivo
 