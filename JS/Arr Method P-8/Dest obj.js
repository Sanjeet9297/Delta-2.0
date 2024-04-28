const student = {
    name: "karan",
    class: 9,
    age: 14,
    subjects: ["hindi","english","math","science","social studies"],
    username: "karan@123",
    password: abcd,
};

// let username = student.username;
// let password = student.password;

let {username: user, password: pass} = student;

// console.log(user); //"karan"