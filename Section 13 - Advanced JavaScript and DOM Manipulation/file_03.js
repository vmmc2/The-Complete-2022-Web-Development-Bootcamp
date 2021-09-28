/* JavaScript Objects */
//JavaScript permite a criacao de objetos, assim como outras linguagens
//tambem o permitem como: C++, Python, Java, Dart, etc...

//Segue abaixo um exemplo de criacao de objeto:
var bellboy1 = {
    name: "William",
    age: 19,
    hasWorkPermit: true,
};
//Como eh possivel observar, objetos em JS sao mt parecidos aos dicts de Python
//e aos maps de C++.
//Para acessar os atributos de um objeto, usa-se a "dot notation".
console.log(bellboy1.name);
console.log(bellboy1.age);
console.log(bellboy1.hasWorkPermit);

//Eh possivel tambem utilizar uma especie de construtor para automatizar 
//a criacao de objetos em JavaScript. Essa especie de construtor se chama:
//Constructor Function. Observe o exemplo abaixo:
function BellBoy(name, age, hasWorkPermit){ //O nome da funcao deve estar capitalizado.
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
}
var bellboy2 = new BellBoy("Victor", 23, false);
