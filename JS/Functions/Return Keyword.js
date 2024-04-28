function sum(a,b)
{
    return a+b;
}

// let s = sum(3+4);
// console.log(s);

console.log(sum(3, 4));

console.log(sum(sum(1,2),3));



function isAdult(age)
{
    if(age >=18)
    {
        return "adult"
    }
    else{
        return "not adult"
    }

    console.log("bye bye");  //not executed
}