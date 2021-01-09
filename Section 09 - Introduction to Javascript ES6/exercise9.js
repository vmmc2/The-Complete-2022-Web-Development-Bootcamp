function main(){
    var priceBottle = parseFloat(prompt("Price of 1 bottle?"));
    var money = parseFloat(prompt("Current money?"));
    howManyBottles(money, priceBottle);
}

function howManyBottles(money, priceBottle){
    var numBottles = Math.floor(money/priceBottle);
    window.alert("With your money, you can buy " + numBottles + " bottle(s).");
}

main();
