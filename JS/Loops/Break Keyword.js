// let i=1;
// while(i<=5)
// {
//     if(i == 3)
//     {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// console.log("we used break at 3")



const favMovie = "Avtar";

let guess = prompt("Guess my favourite movie");
while((guess != favMovie))
    if(guess == "quit")
    {
        console.log("you quit");
        break;
    }
{
    guess = prompt("wrong guess. please try again");
}

if (guess == favMovie)
{
    console.log("congrats!!");
}

// else 
// {
//     console.log("You Quit")
// }