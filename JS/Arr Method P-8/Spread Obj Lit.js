const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};


const dataCopy = { ...data, id: 123 };




let arr = [1,2,3,4,5];  //value
let obj1 = {...arr};   //obj -> key:val


let obj2 = {..."hello"};