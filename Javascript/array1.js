function BasicStudentsDetails(value){
    return{
        name : value.name,
        email : value.email,
        phone : value.phone
    };
}

const students = [
    BasicStudentsDetails({ 
        name: "Aman Sinha", 
        email: "aman@gmail.com", 
        phone: "7984981214" 
    }),
    BasicStudentsDetails({ 
        name: "Parth Vishvakarma", 
        email: "parth@gmail.com", 
        phone: "9303366954" 
    }),
    BasicStudentsDetails({ 
        name: "Raushan Kumar", 
        email: "raushan@gmail.com", 
        phone: "7654454504" 
    })
];

students.forEach((student, index) => {
    console.log(`Student ${index + 1}:`);
    console.log(`Name: ${student.name}`);
    console.log(`Email: ${student.email}`);
    console.log(`Phone: ${student.phone}`);
    console.log("-------------------");
});