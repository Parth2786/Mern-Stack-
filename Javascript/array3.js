let arr = [15, 6, 7, 8, [1, 5, 6, 89, 0], 89, 67];
console.log(arr.flatMap((ele) => ele * 2), 1);


let array_cars = ['Maruti', 'Toyota', 'Mahindra', 'Hyundai'];
const [first, second, ...third] = [...array_cars.flat(1)];
console.log(first);
console.log(second);
console.log(third);


const user = {
    name: 'John',
    age: 30,
    email: 'user@gmail.com',
    phone: '89101077',
};
const { age, phone, address } = user;
console.log(age);
console.log(phone);
console.log(address);