// let smallImages = document.getElementsByClassName("oldImg");

// for (let i=0; i < smallImages.length; i++)
// {
//     console.dir(smallImages[i].src);
// }

// let smallImages = document.getElementsByClassName("oldImg");

// for (let i=0; i < smallImages.length; i++)
// {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no.${i} is changed`);
// }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));


// console.dir(document.querySelectorAll("div a"));





let links = document.querySelectorAll((".box a"));

for(links of links){
    links.style.color = "orange";   // inline style
}

// for(let i=0; i<links.length; i++)
// {
//     links[i].style.color = "green";
// }