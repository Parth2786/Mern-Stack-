function greet(){
    return function(){
        console.log("Good Morning !");
    };
}

let greeting = greet();
greeting()