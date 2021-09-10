//syantax of arrow function
let x=(x,y)=>x*y;   
console.log(x(10,2));

//arrow function with no argument
let y=()=>console.log("hello aman");
y();

//arrow function with one argument
let z= x =>console.log(x);
z('aman');

//arrow function as an Expresion
let age=6;
let welcome=(age<18)? ()=>console.log("baby") : ()=>console.log("adult");
welcome();

//Multiline arrow function 
let sum= (a,b) =>{
    let result=a+b;
    return result;
}
console.log(sum(10,20));

//this with arrow function 
    //arrow function does not have its  own this so its calls parents scope.
function Person(){
    this.name='aman',
    this.age=23,
    this.sayName=function(){
        console.log("hello am");
        console.log(this.age);
        let innerFunc=()=>{
            console.log(this.age);
        }
        innerFunc();
    }
}
const pp=new Person();
pp.sayName();