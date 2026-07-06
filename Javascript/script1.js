function greet(){
    return function(){
        console.log("Good Morning !");
    };
}

let greeting = greet();
greeting()

var sayBye = () => {
    console.log("Good Bye!");
}
sayBye();