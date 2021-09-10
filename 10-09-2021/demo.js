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
const x=new Person();
x.sayName();