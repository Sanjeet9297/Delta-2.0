// function sum(...args) {
//   //arguments
//   for (let i = 0; i < args.length; i++) {
//     console.log("you gave us: ", args[i]);
//   }
// }

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }



function sum (...args){
    return args.reduce((sum,el) => sum + el);
}


function min(msg, ...args){
    console.log(msg);
    return args.reduce9((min, el) => {
        if (min > el){
            return el;
        }else {
            return min;
        }
    });
}