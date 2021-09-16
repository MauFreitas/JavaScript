var fs = require("fs");
fs.readFile("funcionarios.json", function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var conteudo = JSON.parse(data);
        var funcionarios = conteudo.funcionarios;
        for (var i = 0; i < funcionarios.length; i++);  
        console.log(funcionarios.nome) ;
        
        
    }
});

