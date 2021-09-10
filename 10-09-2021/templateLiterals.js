//backtack use to print var
let name1="aman";
console.log(`hello ${name1} how are you`);
//document.write(`<h1 style="color:red;">hello aman </h1>  ngj   kese ho`);

//template literals for string
const str1="hello aman";
const str2=`hello "aman" is a boy `;
//can not use backtick inner backtick  const str3=`hello `aman` is a boy `;
const str4="hello 'aman' kese ho";
//can not use double codes with inner double codes const str5="hello "aman" kese ho";
console.log(str1);
console.log(str2);
console.log(str4);

//escap character
const str3='A \`quate\` inside a string';
const str5="";

//multiline string using template literals
const message=`hello aakash
               how are you
               and currently where are you`;
               console.log(message);

//Expresion interpolation
const name="arjun";
console.log(`hello ${name}`);

const result=`The sum of 4+5 is : ${4+5}`;
console.log(result);

console.log(`${result < 10 ? "Too low" : "Very High"}`);