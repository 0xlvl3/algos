"use strict";

function countDown(number) {
  console.log(number);
  if (number === 0) return;
  else countDown(number - 1);
}

// countDown(10);

//factorial recursion
function factorial(num) {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
}

// console.log(factorial(4));

function doubleArr(arr, i = 0) {
  if (i >= arr.length) return arr;

  arr[i] *= 2;
  return doubleArr(arr, i + 1);
}

// const double = doubleArr([1, 2, 3, 4]);
// console.log(double);
