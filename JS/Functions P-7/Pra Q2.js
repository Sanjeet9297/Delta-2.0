let id = setInterval(() => {
  console.log("Hello world");
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear Interval ran")
}, 10000);