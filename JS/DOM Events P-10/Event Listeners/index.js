let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    btn.addEventListener("Click", sayHello);
    btn.addEventListener("Click", sayName);
    btn.addEventListener("dblclick",function(){
        console.log("your double clicked me");
    });
}
function sayHello(){
    alert("Hello!");
}

function sayName() {
  alert("Apna College!");
}

