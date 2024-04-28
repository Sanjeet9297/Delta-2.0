let greet = "hello"; //global scope

function changeGreet()
{
    let greet = "namaste"; //function scope
    console.log(greet);

    function innerGreen()
    {
        console.log(greet); // lexical scope
    }
}

console.log(greet);
changeGreet();