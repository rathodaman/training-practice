function talk(a=10,b=5){
    console.log(a+b);
}
function sum(x=1,y=x,z=x+y)
{
    return x+y+z;
}
talk();
talk(5);
talk(2,3);
console.log(sum());