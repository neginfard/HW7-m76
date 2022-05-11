function numInStr(arr) {
  return arr.filter((item) =>
    [...item].filter((value) => value == parseInt(value)).join()
  );
  /*second solution
  let a = [];
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == parseInt(arr[i][j])) {
        a.push(arr[i]);
        break;
      }
    }
  }
  return a;*/

  /*Third solution
  return arr.filter((item) => item.match(/\d/));*/
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
