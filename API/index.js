let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) =>{
    // console.log(res);
    // console.log(res.json());
    // res.json().then((data) =>{
    //     console.log(data);
    // });
    return res.json();
})
.then((data) => {
    console.log("data1 = ",data.fact);
    return fetch(url);
})
.then((res) =>{
    return res.json();
})
.then((data2) =>{
    console.log("data2 = ", data2.fact);
})
.catch((err)=>{
    console.log("ERROR -",err);
});

console.log("I Am Happy")