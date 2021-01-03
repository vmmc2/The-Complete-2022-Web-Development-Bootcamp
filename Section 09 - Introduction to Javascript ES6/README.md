# Javascript ES6

## Convenções
* A convenção adotada pela maioria dos programadores de Javascript é usar double quotes ("").
* Entretanto, em alguns casos específicos, é recomendado utilizar single quotes (''). Veremos quais casos são esses mais na frente.
* Para atribuir os nomes de variáveis, usamos "camelCase".

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
