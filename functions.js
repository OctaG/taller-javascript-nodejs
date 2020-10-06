
//Funcion "normal"
function addTwoNums(num1 = 1, num2 = 1){
  return num1 + num2;
}

let sum = addTwoNums(5, 10);
console.log(sum);

sum = addTwoNums();
console.log(sum);


function addNums(nums){
  let sum = 0;
  //Arrow function
  let addTwoNums = (num1, num2) => {
    return num1 + num2;
  }
  for(num of nums){
    sum = addTwoNums(sum, num);
  }
  return sum
}


let nums = new Array(1, 2, 3, 4, 5, 6);
let listSum = addNums(nums);
console.log(listSum);
