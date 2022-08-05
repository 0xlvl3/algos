"use strict";

//finds intersection of two arrays using hashTable
//O(N) efficiency
function getIntersection(arr1, arr2) {
  let intersection = [];
  let hashTable = {};

  for (let i = 0; i < arr1.length; i++) {
    hashTable[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (hashTable[arr2[j]]) {
      intersection.push(arr2[j]);
    }
  }

  return intersection;
}

getIntersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]);

const stringArr = function (strArr) {
  strArr.forEach((s) => {
    console.log(s);
  });
  console.log(strArr);
};

stringArr(["a", "b", "c", "d", "c", "e", "f"]);
