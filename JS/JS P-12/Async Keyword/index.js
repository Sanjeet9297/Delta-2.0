async function greet(){
    throw"404 page not found"
    return "hello!";
}

greet()
.then((result)=>{
    console.log("promise was resolvrd");
    console.log("result was :", result);
})
.catch((err)=>{
    console.log("promised was rejected with err:",err);
});


let demo = async () => {
    return 5;
};