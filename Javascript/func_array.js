function createArray() {
    let arr = [];
    return {
        push: (val) => arr.push(val),
        getElement: (index) => arr[index],
        getArray: () => arr
    };
}


const myarray = createArray();
myarray.push(10);
myarray.push(20);
myarray.push(30);
myarray.push(40);
myarray.push(50);
console.log(myarray.getElement(1));
console.log(myarray.getArray());