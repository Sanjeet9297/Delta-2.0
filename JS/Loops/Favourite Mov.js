const favMovie = "Avtar";

let guess = prompt("Guess my favourite movie");
while((guess != favMovie) &&(guess != "quit"))
{
    guess = prompt("wrong guess. please try again");
}

if (guess == favMovie)
{
    console.log("congrats!!");
}

else 
{
    console.log("You Quit")
}