const arr=["my","name","is","aman"];
console.log(arr);
console.log(...arr);
//array copy using spread operator
const arr1=[1,2,3];
const arr2=[...arr,"one","two"];
console.log(arr2);

//clone array using sperad operator
const arr3=[1,2,3];
const arr4=[...arr3];
console.log(arr3);
console.log(arr4);
arr3.push(4);
console.log(arr3);
console.log(arr4);

//sperad operator with object
const obj1={x:1,y:2};
const obj2={z:3,a:4};
const obj3={...obj1,...obj2};
console.log(obj3);