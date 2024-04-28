// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button Clicked");
// });

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button Clicked");
// });

// let input = document.querySelector("input");

// input.addEventListener("keydown", function(event){
//     console.log("key =",event.key);
//     console.log("code =",event.code);
//     console.log("Key was pressed")
// })

// input.addEventListener("keyup", function(){
//     console.log("Key was released")
// })

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  console.log("code =", event.code); //ArrowUp(u), arrowDown(d), AeeowLeft(l), ArrowRight(r)
  if (event.code == "KeyU") {
    console.log("Character moves Forward");
  } 
  else if (event.code == "KeyD") {
    console.log("Character moves Backward");
  } 
  else if (event.code == "KeyL") {
    console.log("Character moves Left");
  } 
  else if (event.code == "KeyR") {
    console.log("Character moves Right");
  }
});
