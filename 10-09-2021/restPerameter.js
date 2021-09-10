function show(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
show(1,2,3,4,5,6,7,8,9,10,11,12,1,3);
//Example2
let arr1=[1,2];
let arr2=[...arr1,3,4,5,6];
console.log(arr2);