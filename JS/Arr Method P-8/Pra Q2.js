// let nums = [10, 20, 30, 40, 50, 5];

// let min = nums.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });

// console.log(min);



function getMin(nums){
    let min = nums.reduce((min, el) => {
      if (min < el) {
        return min;
      } else {
        return el;
      }
    });
    return min;
};

let nums = [ 10,20,30,40,5];
