# Section 20 - APIs

## APIs
* A.K.A Application Programming Interface.
* API is a set of objects, protocols and methods that are used by a developer to interact with external software (OpenWeatherAPI) or to create software (jQuery).
* APIs consist of four different key ideas: endpoints, parameters, paths and authentication.
### Endpoints
* Endpoints são as URLs originais/principais usadas para acessar uma API.
### Paths
* Paths são usados para obter informações específicas de uma API. Normalmente, são separados por ```/```.
### Parameters
* Parameters são utilizados para realizar consultas/queries a uma API. A primeira query deve começar com um caractere ```?```. Cada consulta é constituida por um par key-value expresso no seguinte formato: ```key=value```. Se eu tiver mais de uma consulta para fazer, elas devem estar separadas pelo caractere ```&```.
* Vale ressaltar que a ordem dos parameters não importa.

## HTTP Response Types
* Existem basicamente 5 tipos de respostas HTTP:
  * Informational Responses (100 - 199)
  * Sucessful Responses (200 - 299)
  * Redirects (300 - 399)
  * Client Errors (400 - 499)
  * Server Errors (500 - 599)

## JSON
* Significa JavaScript Object Notation.
* Trata-se de uma notação utilizada para o envio e recebimento de dados muito utilizada em desenvolvimento Web. Basicamente, trata-se de uma string que representa um objeto de JavaScript.
* Existem outros formatos usados para transmissão de dados na Web como, por exemplo: XML ou HTML.

## Connecting to an API
* There are several ways of doing so. The most famous use the following modules: __"https", "request", "got" and "axios".__
* __In this course, we will be using the "https" module since it does not require a third-party library installation.__

## About the response (res) sent by our server to the client browser
* __For each implemented method of our server, we can only have 1 call of the method ```res.send(something)```. Otherwise, the code is going to crash.__
* There is more than one way to send information back from our server to the client browser. We can send it as a plain text or we can send it using HTML tags. Take a look at the examples below:
* _Way 1 - Sending data back as plain text_
```javascript
res.send("The temperature in London is " + temp + " Celsius degrees.");
```
* _Way 2 - Sending data back in HTML format_
```javascript
res.send("<h1>The temperature in London is " + temp + " Celsius degrees.</h1>");
```
### What if I want to send more than one line of content in HTML format?
* In order to do so, one can use the ```res.write(content)``` method. This method is used to write the content of our response by parts. Usually, we call it in the following ways:
* _Way 1_
```javascript
res.write("<h1> This is a header 1 </h1>")
res.write("<h2> This is a header 2 </h2>")
res.write("<p> This is a paragraph </p>")
res.end()
```
* _Way 2_
```javascript
res.write("<h1> This is a header 1 </h1>")
res.write("<h2> This is a header 2 </h2>")
res.write("<p> This is a paragraph </p>")
res.send()
```

## HTML Forms
* The ```<form></form>``` tag is extremely useful in web applications because it allows the user to send info from the browser to the server. Usually, a form has several inputs of different types (and, normally, each input has a label associated to it) and a button of type ```submit``` that is used to send the information from the client side (the browser) to the server. Take a look at the simple example below:
```javascript
<form action="/" method="post">
    <label for="cityInput"> City Name: </label>
    <input id="cityInput" type="text" name="cityName">
    <button type="submit"> Go </button>
</form>
```
* The ```<form></form>``` tag is used to send data/info to a specific route of our server. __In the example above, we are sending data to the root route using the POST method.__
* __In order to retrieve the data that was send to the server through a POST request, we must install a third-party package called ```body-parser``` (This can be done using the command ```npm i body-parser``` in the terminal. This package is used to retrieve the data from the body of the request sent to the server (```req.body```).__
* In order to use the body parser properly, we must add the following lines inside our ```app.js``` file:
```javascript
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
```
* __In order to access data from a specific field inside a form, we must use the name of the field (The ```name``` attribute of the ```input``` tag). In this specific case, we can use:__
```javascript
const cityNameExample = req.body.cityName;
```
