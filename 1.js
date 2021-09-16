var fs = require("fs");
var listaf = "funcionarios.json";
fs.readFile (listaf, "utf-8", function(err, data){
    if (err){

        console.log(err);
    }

    else {

          var obj = JSON.parse(data).funcionarios;

          var index = null;

          var salario2 = 0;

          var nomfun;    

          for (i=0; i < obj.length; i++)  {

                var salfun = obj[i].salario;
               
                if (salario2 > salfun ){

                    var salfun = obj[i].salario;               

                }else {

                    salario2 = salfun;

                    nomfun =  obj[i].nome; 

                }

                 if (i > obj.length ){

                    salario2 = obj[i].salario; 

                    nomfun =  obj[i].nome; 
                }                                                          
          }    
          console.log(nomfun);
          console.log(salario2);        
    }
});