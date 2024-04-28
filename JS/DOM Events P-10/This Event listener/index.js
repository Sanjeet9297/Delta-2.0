let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");


function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "red";
}


btn.addEventListener("click", changeColor)

p.addEventListener("click", changeColor)

h1.addEventListener("click", changeColor)

h3.addEventListener("click", changeColor)



// btn.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor ="red";
// });


// p.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "yellow";
// });

// h3.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "orange";
// });