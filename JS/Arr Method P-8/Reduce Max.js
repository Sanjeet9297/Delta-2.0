let arr = [1, 2, 4, 5, 4, 7, 10, 8, 9, 9];

// let max = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }


// console.log(max);


let max = arr.reduce((max,el) => {
    if(max < el){
        return el;
    } else{
        return max;
    }
});

console.log(max);