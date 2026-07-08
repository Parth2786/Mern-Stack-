function BasicStudentsDetails(value){
    return{
        name : value.name,
        email : value.email,
        phone : value.phone
    };
}

const students = [
    BasicStudentsDetails({ 
        name: "Rahul Sharma", 
        email: "rahul@gmail.com", 
        phone: "9876543210" 
    }),
    BasicStudentsDetails({ 
        name: "Priya Patel", 
        email: "priya@gmail.com", 
        phone: "9123456780" 
    }),
    BasicStudentsDetails({ 
        name: "Amit Singh", 
        email: "amit@gmail.com", 
        phone: "9988776655" 
    })
];