

Union Types : 
Union types allow a variable to hold a value of several types. They are defined using the | (pipe) symbol. This feature is particularly useful when a variable can have multiple possible types.

code Example : 
let value : number | string 
value = 42   // valid assignment
value = 'hello' // valid assignment


Flexibility in function Arguments : 

function printId(id : number | string){ 
    console.log(`Your Id is : ${id}`)
}

printId(101) 
printId("E-123")



//////****************************/////////////




Intersection Types : 

Intersection types combine multiple types into one. They are defined using the & (ampersand) symbol. An intersection type means that a variable must satisfy all the combined types.


code Example : 
interface Person{
    name : string;
}

interface Employee{
    employeeId : number
}

type Staff = Person & Employee 

const staffMember : Staff = {
    name : 'Alic'
    employeeId : 34
}




Ensuring Type Conformity: 
By requiring a variable to adhere to multiple types, intersection types ensure that all required properties are present, enhancing type safety.


function logStaff(staff : Staff){
    console.log(`Name : ${staff.name}, Employee ID : ${staff.employeeId}`);
}
logStaff(staffMember);

