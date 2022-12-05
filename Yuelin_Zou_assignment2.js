const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Question 1
function doubbleArray(arr) {
  arr.forEach((item) => {
    item.quantity = item.quantity * 2;
    item.price = item.price * 2;
  });
  return arr;
}
const result = doubbleArray(itemsObject);
console.log(result);

//Question 2
function filterArray(arr) {
  const newArr = arr.filter((item) => {
    return item.quantity > 2 && item.price > 300;
  });
  return newArr;
}
const res = filterArray(itemsObject);
console.log(res);

//Question 3
function count(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item.quantity + item.price;
  });
  return sum;
}
const res2 = count(itemsObject);
console.log(res2);

// Question 4
const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
console.log(string.toLowerCase.split(" "));

const arr = string.split("");
const newArr = [];
arr.forEach((item) => {
  if (item !== " " && item !== "-") {
    newArr.push(item);
  }
  return newArr.join("");
});
console.log(newArr, "newarr");

//字符串转化
function StrFn(string) {
  const arr = string.split("");
  const newArr = [];

  arr.forEach((item) => {
    if (item !== " " && item !== "-") {
      newArr.push(item.toLowerCase());
    }
  });
  return newArr.join("");
}
const res3 = StrFn(string);
console.log(res3);

// Question 5

let arr = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
let arr1 = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const newArr = [];
arr.forEach((item, index) => {
  let target = arr1.find((ee) => ee.uuid == item.uuid);
  console.log(target);
  if (target) {
    const temp = Object.assign(item, target);
    newArr.push(temp);
    arr1.splice(arr1.indexOf(target), 1);
  } else {
    newArr.push(item);
  }
});
console.log(...arr1, ...newArr);

// Using function

function Fn(arr, arr1) {
  const newArr = [];
  arr.forEach((item, index) => {
    let target = arr1.find((ee) => ee.uuid == item.uuid);
    console.log(target);
    if (target) {
      const temp = Object.assign(item, target);
      newArr.push(temp);
      // `splice(pos, deleteCount, ...items)` —— 从 `pos` 开始删除 `deleteCount` 个元素，并插入 `items`到原数组中，（删除和添加同时进行）
      arr1.splice(arr1.indexOf(target), 1);
    } else {
      newArr.push(item);
    }
  });
  return [...arr1, ...newArr];
}
console.log(Fn(arr, arr1));
