//Funcao "handleClick"
function handleClick(){
    alert("I got clicked");
}

/*
document.querySelector("button").addEventListener("click", handleClick);
*/
//A linha de codigo acima vai simplesmente adicionar um eventListener ao
//primeiro elemento HTML do tipo "button". Esse eventListener vai esperar
//por eventos do tipo "click" nele. Quando tais eventos acontecerem, a 
//funcao "handleClick" vai ser chamada.

//Vale mencionar que nao podemos colocar uma chamada de funcao "handleClick()"
//dentro do addEventListener(), pois se isso fosse feito, a chamada a essa funcao
//ocorreria primeiramente no momento em que o eventListener eh adicionado ao "button"

//Adicionando um eventListener a todos os "buttons" da classe ".drum" do meu codigo HTML
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
