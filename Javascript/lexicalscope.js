let globalvariable = "I'm a Global Variable";
let globalVariable = "I'm a Global Variable Inside Outer Variable";

function outer() {
    let outerVariable = "I'm an Outer Variable";

    function inner() {
        let innerVariable = "I'm an Inner Variable";
        let globalVariable = "I'm global Inside Inner variables";

        console.log(innerVariable);   
        console.log(outerVariable);   
        console.log(globalVariable);  
    }

    inner();
}

outer(); 
