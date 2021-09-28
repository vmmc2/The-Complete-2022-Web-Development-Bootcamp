/* FUNCOES DE ALTA ORDEM */
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
//A funcao abaixo eh uma funcao de alta ordem (high order function).
//Esse tipo de funcao consegue receber outras funcoes como entrada/argumento.
function calculator(num1, num2, operator){
    return operator(num1, num2);
}
