function findLength(array) {
  let result = array.flat(Infinity).length;
  return result;
}
let arr1 = [1, [2, 3]];
let arr2 = [1, [2, [3, 4]]];
let arr3 = [1, [2, [3, [4, [5, 6]]]]];
console.log(findLength(arr3));
