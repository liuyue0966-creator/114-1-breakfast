const numbers = [15, 4, 9, 16, 25];

// let aryStr = "";
// for (let i=0; i < numbers.length; i++){
//   aryStr += (i === 0 ? "" : ",") + numbers[i];
// }
// console.log(aryStr);

let aryStr = "";
numbers.forEach((vaule, index) => {
  aryStr += (index === 0 ? "" : ", ") + vaule;
});
console.log(aryStr);

// map(): array => new array
const aryTwice = numbers.map((value) => value * 2);
console.log(aryTwice);
console.log(numbers);

// reduce(): 純量: array => single vaule
const sum = numbers.reduce((total, vaule, index) => {
  return total + vaule;
}, 2);
console.log(sum);

const sum2 = numbers.reduce((sumStr, vaule, index) => {
  return sumStr + (index === 0 ? "" : ", ") + vaule;
}, "");
console.log(sum2);

// filter():array => new array
const aryFiltered = numbers.filter((vaule) => vaule > 10);
console.log(aryFiltered);

// some():array => boolean: true / false
const hasOver10 = numbers.some((vaule) => vaule > 100);
console.log(hasOver10);

// every():array => boolean: true / false
const allOver10 = numbers.every((vaule) => vaule > 0);
console.log(allOver10);

// findIndex(): array => index
const index16 = numbers.findIndex((vaule) => vaule > 16);
console.log(index16);
