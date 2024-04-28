h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// },1000);

// setTimeout(() => {
//     h1.style.color = "green";
// },2000);

// setTimeout(() => {
//     h1.style.color = "blue";
// },3000);

// setTimeout(() => {
//     h1.style.color = "purple";
// },4000);



function changeColor(color,delay,nextColorChange){
    setTimeout(() => {
         h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
   
}

changeColor("red", 1000, () => {
    changeColor("orange",1000,() => {
        changeColor("green",1000,() =>{
            changeColor("purple",1000,()=>{
                changeColor("yellow",1000);
            });
        });
    });
});

//callback nesting -> callback hell
