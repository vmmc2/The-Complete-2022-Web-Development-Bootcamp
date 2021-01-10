# Intermediate Javascript

## Javascript Comparators
* ```===```  -> Is Equal To
* ```!==```  -> Is Not Equal To
* ```>```    -> Is Greater Than
* ```<```    -> Is Lesser Than
* ```>=```   -> Is Greater Than or Equal To
* ```<=```   -> Is Lesser Than or Equal To

* Qual a diferença entre ```===``` e ```==``` ? A diferença é que ```===``` é um comparador de igualdade que além de checar a igualdade de valor, também checa a igualdade de tipo de dado. Já o comparador ```==```, checa apenas a igualdade de valor, sem se preocupar com igualdade de tipo de dado.
* Observe os exemplos a seguir:
```javascript
 1 == "1"  -> True
 1 === "1" -> False
```

## Arrays
* Arrays are used to store a collection of items that have the same type.
* Below, there is a code snippet that shows how you can declare an array in Javascript:
```javascript
var myArray = []; // An empty array.
var names = ["Luke", "Anakin", "Obi-Wan"]; // An array with 3 elements (strings).
var numbers = [11, 12, 13, 14, 15]; // An array with 5 elements (numbers).
```
* We can check the size of an array through the property: ```array.length```.
* Remember that, if we have an array of length "n", then its items are labeled through "0" to "n - 1".
* We can check if a certain element is in an array through an array method called ```array.includes(element)```, which returns a boolean (true or false).
