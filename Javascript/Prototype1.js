String.prototype.reverse = function() {
    let reversed = "";
    for (let i = this.length - 1; i >= 0; i--) {
        reversed += this[i];
    }
    return reversed;
};
String.prototype.transform = function(){
    let transform = "";
    for(let i = 0; i < this.length; i++){
        transform += this[i];
        if(i < this.length - 1){
            transform += "*";
        }
    }
    return transform;
}

// Example usage
let str = "Parth";
console.log(str.reverse());
console.log("Laksh".reverse());
console.log("Parth".transform());



