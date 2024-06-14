/* console.log("Hello  world");
console.log("Mern stack second class is staredx");
console.log(1+1); */
// java script is a asynchronus and signle threated language.
// if two numbers are added it produces a output of sum and if two string are added it concatenate and produces output as a string.

// variable 
/* let name="meelan";
let address= "minbhawan";
let age =27;
age=26;
console.log("my name is "+ name +"." + " i live in " +address +".");
console.log(`i am ${age} years old.`)
console.log("a"-"a")

console.log("hello hello") */

// let a='mee"lan'
// console.log(a)
// we cannot  use double quotes inside double quotes and we also cannot use single quotes 
//inside single quotes. but qw can use single quotes into the double quotes and double quotes
//single quotes
// console.log("1"+2+3+4)
// if we add a number and a string, the interpreter converts the number into string and concatenates both together.
//we cannot declare same naming variables like let a=24; and let a=26;

// string literals => `` ${}

/* let num1=10;
let num2=20;
let message= ` the sum of ${num1} and ${num2} is ${num1 +num2}`;
console.log(message); */

//boolean truthy and falsy value
// sinle string is flasy value other are truthy value
// 0 also is a falsy value other are true.
/* let a=!!10;
let name=!!"meelan"
console.log(a)
 */

/* if else statement
if()
    {

    }
    else{

    } */

/* let a=true;
if(a){
    console.log("iam true")
}else{
    console.log("i am false")
} */

//in if else statemnet condition block is always wraped by parenthesis. () {} []

// let firstName= "milan";


/* if(firstName==="mila" && firstName==="milan"){
    console.log("i am milan")
}else{
    console.log("i am other")
}

for(i=0;i<=5;i++){
    console.log("the number is",i)
} */

//if value is true single not ! will make value false and double not !! converts value into boolean.
// let name="meelan";
// if(!name){
//     console.log("a")
// }else{
//     console.log("b")
// }

//function Started (define function / call functions / pass value to function return arrow function
// let myFunc=function(){
//     console.log("first")
// }


// let sum=function(a,b){
    
//     return  a+b;
// }
// let data=sum(1,2);
// console.log(data)


// console.log("a")
// myFunc();

// let myFunc=function(a){
//     console.log(a)
// }
// myFunc(10);
// myFunc("hello world");


// let myFunc=()=>{
//     console.log("hello world")
// }
// myFunc();
/* 
let myFunc=(age)=>{
    if(age>18){
        console.log("he can vote.")
    }else{
        console.log("he cannot vote")
    }
}

myFunc(5);


let mul=(num1,num2)=>{
    return num1*num2
}
let data=mul(5,10);
console.log(data); */

// let name="milan";
// console.log(name);
// name="avishek";
// console.log(name);
// name="supendrea";
// console.log(name)

//javascrit is a dynamic langugae because variables can be stored different value at a different name.

//export and import

console.log(new Date());
console.log(new Date().toDateString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());

let name="milan khadka";
console.log(name.length)
console.log(name.toUpperCase());
console.log(name.replaceAll("milan","avi"))