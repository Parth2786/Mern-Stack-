function outer(){
    let sum = 0;
    function inner(){
        sum++;
        return sum;
    }
    return inner();
}
console.log(outer());