let vikas = {
    name: 'Vikas',
    age: 29,
    email: 'vikas.trainer@gmail.com',
};

let laksh = {
    // name: 'Laksh',
    age: undefined,
    email: 'laksh.webdev@gmail.com',
    __proto__: vikas,   
};

let rajan = {
    age: 21,
    __proto__: laksh,   
};

console.log(rajan.__proto__.__proto__.__proto__);
