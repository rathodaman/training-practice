const name="aman";
const greet="true";
function tagExample(stringd,nameValue)
{
    let str0=string[0];
    let str1=string[1];
    if(greet)
    {
        return `${str0},${nameValue},${str1}`;
    }    
}
//creating tagged literals passing arguments name
const result=tagExample`hello ${name}, how are you`;
console.log(result);