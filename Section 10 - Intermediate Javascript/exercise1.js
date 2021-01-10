function main(){
    var male = prompt("What is the name of the man?");
    var female = prompt("What is the name of the woman?");
    var lovePercentage = Math.round(Math.random() * 100);

    window.alert(male + " and " + female + " have a chance of " + lovePercentage + "% of falling in love!");
}

main();
