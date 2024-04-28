let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "delete";
    dltBtn.classList.add("delete");

    item.appendChild(dltBtn);
    ul.appendChild(item);
    // console.log(inp.value);
    inp.value ="";
});

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let ListItem = event.target.parentElement;
        ListItem.remove();
        console.log("deleted");
    }

//   console.log("button clicked");
});


