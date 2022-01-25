/*
Declare all the variables in above form without initialising and print their value.
 After printing their value assign them as null and print it again.
 Declare an object called employeeDetails and add all the above variables to this object now as keys with value as null and print this object.

*/

let name=null;
let email=null;
let age=null;
let address=null;
let phone_number=null;
let gender=null;
let isMarried=null;

console.log(name,email,age,address,phone_number,gender,isMarried);

const employee_name={
    name,
    email,
    age,
    address,
    phone_number,
    gender,
    isMarried
}
console.log(employee_name);