# Javascript ES6

## Convenções
* A convenção adotada pela maioria dos programadores de Javascript é usar double quotes ("").
* Entretanto, em alguns casos específicos, é recomendado utilizar single quotes (''). Veremos quais casos são esses mais na frente.
* Para atribuir os nomes de variáveis, usamos a notação "camelCase".
* Para atribuir os nomes de funções, também usamos a notação "camelCase".

## Alert
* Os alerts são comandos que podem ser dados por meio de código escrito em Javascript. O alert é aquela janelinha que aparece quando desejamos, por exemplo, fechar uma certa página da Web.
* Existem duas maneiras de codar um alert. São elas:
```javascript
window.alert("Hello World!");

alert("Hello World!");
```

## Prompt
* Os prompts são uma espécie de alert que possuem input. Isto é, permitem que o usuário insira informações nele, que serão salvas posteriormente.
* Para codar um prompt, basta seguir o exemplo a seguir:
```javascript
prompt("Insira seu nome: ");
```

## Data Types
* Em Javascript, temos alguns tipos de dados básicos. São eles:
  * strings
  * numbers
  * boolean
* Existe uma função de Javascript chamada de ```typeof()```, a qual é usada para sabermos qual o tipo de uma certa variável ou literal.
* Para criar uma variável em Javascript, fazemos o uso da keyword ```var```. Observe um exemplo abaixo em que criamos uma variável e em seguida alteramos o seu contéudo:
```javascript
var myName = "Victor";
console.log(myName);
myName = "Vivi";
window.alert(myName);
```
* Em strings, é permitido e possível realizar a concatenação fazendo o uso do sinal ```+```. Observe um exemplo abaixo:
```javascript
var s1 = "Victor";
var s2 = "Miguel";
console.log(s1 + " " + s2);  // Esse comando vai printar: "Victor Miguel".
```
* É possível descobrir a quantidade de caracteres de uma string de forma simples, por meio da property ```length```.  Faremos algo do tipo no exemplo abaixo:
```javascript
var s = "Victor Miguel";
console.log("The string s has: " +  s.length +  " characters.");
```
* É possível extrair partes de uma string (substrings), por meio de um método chamado ```slice()```. Esse método funciona da mesma forma que o operador ```[:]``` em Python. De forma mais detalhada, ele funciona da seguinte maneira: slice(index inicial incluído, index final não-incluído).
* Observe um exemplo de código abaixo:
```javascript
var myName = "Victor Miguel";
var firstName = myName.slice(0, 6);
var lastName = myName.slice(7, 13);
console.log("Your first name is: " + firstName + ". And your last name is: " + lastName);
```
* Existem dois métodos de strings que são usados para mudar o "case" das strings. Existe o método ```toUpperCase();```, que é responsável por fazer com que todos as letras de uma string fiquem em caixa alta (maiúsculas). Além disso, existe o método ```toLowerCase();```, que é responsável por fazer com que todas as letras de uma string não fiquem em caixa alta (fiquem minúsculas).

## Functions
* Funções são estruturas de linguagens de programação que permitem que possamos executar, de forma repetitiva, trechos de código.
* Exemplo de declaração e chamada de uma função em Javascript:
```javascript
function sendGrettings(){
  console.log("Hello there!");
}

sendGreetings();
```
