var name = prompt("Insira seu nome");
var correctName = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();

window.alert("Hello " + correctName);
