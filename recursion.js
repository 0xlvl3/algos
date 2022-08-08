"use strict";

/**
 * Recursive countdown through console
 * @param {int} number
 * @returns console.log count down
 */
function countDown(number) {
  console.log(number);
  if (number === 0) return;
  else countDown(number - 1);
}
// countDown(10);

/**
 * Recursive factorial
 * @param {int} number
 * @returns Factorial of passed in number
 */
function factorial(number) {
  if (number === 0) return 1;
  else return number * factorial(number - 1);
}
// console.log(factorial(4));

/**
 * Double Array Recursion
 * @param {Object[]} arr
 * @param {int} i default = 0; meaning you only need to place arr argument.
 * @returns Recursive function that will double the int values of an array passed in.
 */
function doubleArr(arr, i = 0) {
  if (i >= arr.length) return arr;

  arr[i] *= 2;
  return doubleArr(arr, i + 1);
}
// const double = doubleArr([1, 2, 3, 4]);
// console.log(double);

// function countX(string) {
//   string.toLowerCase();

//   if (string.lenth === 0) return 0;
//   if (string[0] === "x") return 1 + countX(string[(1, string.length - 1)]);
//   else return countX(string[(1, string.length - 1)]);
// }
// console.log(countX("xaxaxax"));

/**
 * Staircase Problem Recursion
 * @param {int} n number of stairs
 * @returns number of available paths
 */
function numberOfPaths(n) {
  if (n < 0) return 0;
  if (n === 1 || n === 0) return 1;
  else
    return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3);
}
// console.log(numberOfPaths(3));
