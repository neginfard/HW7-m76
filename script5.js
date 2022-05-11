//filter even numbers in an array
let filterArr = [1, 2, 3, 4, 5, 6];
let isEven = (num) => num % 2 === 0;
Array.prototype.customFilter = function (fn) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    let el = this[i];
    if (fn(el, i)) {
      res.push(el);
    }
  }
  return res;
};
console.log(filterArr.customFilter(isEven));

//find method
let findArr = ["Bill", "Russel", "John", "Tom", "Alien", "Till"];
Array.prototype.myFind = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};
findArr.myFind((element, index, array) => {
  if (element[0] === "T") {
    console.log(`This is ${element} in index of ${index} in array ${array}`);
  }
});

//slice method
function newSlice(array, begin, end) {
  let tempArray = [];
  for (let i = begin; i < end; i++) {
    tempArray.push(array[i]);
  }
  return tempArray;
}
console.log(newSlice([8, 3, 4, 5, 4], 1, 3));

//splice method
function newSplice(array, start, count) {
  let index2remove = 0;
  if (typeof count == "undefined") count = 1;

  while (count--) {
    index2remove = start + count;
    array[index2remove] = array.pop();
  }

  return array;
}

console.log(newSplice([8, 3, 6, 5, 4, 2], 1, 3));

//some method
Array.prototype.mySome = function (fn, context) {
  for (let i = 0; i < this.length; i++) {
    if (fn.call(context, this[i], i, this)) return true;
  }
  return false;
};

let passed = [12, 5, 8, 130, 44].mySome((element) => element >= 200);
console.log("some: " + passed);
