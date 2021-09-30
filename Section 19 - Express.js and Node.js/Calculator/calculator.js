//Fazendo o import de modules/libraries importantes
const express = require("express");
const bodyParser = require("body-parser");

//"Inicializando tais modules"
const app = express();
app.use(bodyParser.urlencoded({extended: true})); //Esse modo do bodyParser eh usado para processar dados provenientes de HTML forms.
//Existem outras maneiras de instanciar esse bodyParser: bodyParser.text() ou bodyParser.json()

app.get("/", function(request, response){
    //O metodo response.send() permite enviar apenas pedacos de codigo em HTML (bytes)
    //response.send("<h1>Hello World</h1>");

    //O metodo response.sendFile() permite enviar arquivos HTML como resposta ao cliente(browser)
    //Use __dirname + nome_do_arquivo_para_ser_enviado como parametro desse metodo. Observe o exemplo abaixo:
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response){
    //Usando o request.body podemos acessar os dados HMTL form por meio de notacao de objetos.
    //O nome dos atributos eh dado pelo atributo "name" que vai no HTML element input la no HTML form.
    //O valor sempre vai ser texto. Tem que dar um cast para o tipo desejado.
    var n1 = Number(request.body.num1);
    var n2 = Number(request.body.num2);
    var result = n1 + n2;
    
    response.send("The result of the sum is: " + result);
});

app.listen(3000, function(){
    console.log("Server is listening on port 3000!");
});
