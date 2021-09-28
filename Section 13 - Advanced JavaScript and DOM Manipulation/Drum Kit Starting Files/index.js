//Funcao "handleClick"
function handleClick(){
    //Aqui a gente tem que descobrir qual dos "buttons" foi pressionado
    //para que seja possivel selecionarmos o som que vai ser tocado de
    //forma correta.

    //Isso pode ser alcancado usando a keyword "this". Essa keyword eh
    //responsavel por "dizer a identidade" do objeto em questao
    //Exemplo: this === <button class="s drum">a</button>

    //Tambem da para mudar a estilizacao do "button"
    //Exemplo: this.style.color = "white";
    var audio;
    if(this.innerHTML === "w"){
        audio = new Audio("sounds/tom-1.mp3");
    }else if(this.innerHTML === "a"){
        audio = new Audio("sounds/tom-2.mp3");
    }else if(this.innerHTML === "s"){
        audio = new Audio("sounds/tom-3.mp3");
    }else if(this.innerHTML === "d"){
        audio = new Audio("sounds/tom-4.mp3");
    }else if(this.innerHTML === "j"){
        audio = new Audio("sounds/snare.mp3");
    }else if(this.innerHTML === "k"){
        audio = new Audio("sounds/crash.mp3");
    }else if(this.innerHTML === "l"){
        audio = new Audio("sounds/kick-bass.mp3");
    }
    audio.play();
    buttonAnimation(this.innerHTML);
}

function buttonAnimation(currentKey){
    //Fazendo uma animacao para simular que o botao foi pressionado
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){ //Fazendo uma animacao para simular que o botao deixou de ser pressionado
        activeButton.classList.remove("pressed");
    }, 100);
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

//Eh possivel tambem adicionar eventListeners as teclas do teclado.
//Para isso, basta adicionar um eventListener a todo o documento HTML.
document.addEventListener("keydown", function(event) {
    //Como identificar qual das teclas do teclado foi pressionada?
    //Uma vez que o evento em questao acontece, ele vai "triggar" a funcao
    //que ta no segundo parametro. Quando essa funcao eh "triggada" eh possivel
    //passar um parametro para ela chamado "e" ou "event", que se trata justamente do parametro responsavel
    //por ter "triggado" a funcao em questao.
    console.log("A key from your keyboard was pressed!");
    console.log(event);
    
    //Fazendo o check para saber qual som deve ser reproduzido...
    if(event.key === "w"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }else if(event.key === "a"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }else if(event.key === "s"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }else if(event.key === "d"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }else if(event.key === "j"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }else if(event.key === "k"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }else if(event.key === "l"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }else{
        console.log("A tecla pressionada nao produz som! :(");
    }
    buttonAnimation(event.key);
});
