function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    var array = [];
    //Write your code here:
    if(n === 0){
        return array;
    }else if(n === 1){
        return [0];
    }else if(n === 2){
        return [0, 1];
    }else{
        array = [0, 1];
        for(var i = 3; i <= n; i++){
            array.push(array[i - 2] + array[i - 3]);
        }
        return array;
    }
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

