function firstRepeating(str) {
  let obj = {};
  let strArr = str.split("");
  let result = strArr.filter((item, index) => strArr.indexOf(item) !== index);
  let letterIndex = strArr.indexOf(result[0]);
  obj[result[0]] = [
    strArr.indexOf(result[0]),
    strArr.indexOf(result[0], letterIndex + 1),
  ];
  return obj;
}
console.log(firstRepeating("AREDCBSDERD"));
