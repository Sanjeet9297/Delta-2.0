let nums = [1,2,3,4,2,4,5,6,7,8,9,11,13,];

let ans = nums.filter((el) => {
    // return el % 2 != 0;       // even -> true , odd-> false
    // return el % 2 == 0;
    return el < 5;
});