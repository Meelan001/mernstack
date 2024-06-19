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

// console.log(new Date());
// console.log(new Date().toDateString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleTimeString());

// let name="milan khadka";
// console.log(name.length)
// console.log(name.toUpperCase());
// console.log(name.replaceAll("milan","avi"))

// let num=[1,2,3,4,5,6]
// for (let i=0;i<num.length;i++){
//     console.log(num[i])
// }
// num.forEach((element)=>{
//     console.log(element*element)
// })

// Array.from

// let name="milan";
// let arr = Array.from(name);
// console.log(arr)

//for of loop
// let num=[1,2,3,4,5]
// for  ( let item of num){
//     console.log(item)
// }

//for in loop
// let num=[1,2,3,4,5]
// for(let i in num){
//    // console.log(i) //for key of array
//     console.log(num[i])
// }

//map()
//  let arr=[25,30,40,50];
//  arr.map((value,index, array)=>{
//     console.log(value, index ,array)
//  })

 // array filter method
// let num=[1,2,3,4,520,30,40,50,6]
// let n=num.filter((a)=>{
//     return a<10;
// })
// console.log(n)

//array reduce method
// let num=[1,2,3,4,5,6,7,8,9]
// let n=num.reduce((a,b)=>{
//     return a+b;
// })
// console.log(n)

// let Employees={
//     name :"milan",
//     address :"minbhawan",
//     contact: "9849788814",
//     role : 'frontend developer'

// }

// console.log(Employees.name)
// console.log(Employees.address)

//while loop
// let i=1;
// while(i<2){
//     console.log(i);
//     i++;
// }

//do while loop
 
// let list=['a','b','c']
//  let newList=list.map((value,index)=>{
//   return `${value}${index}`;
 
   
// });

// console.log(newList)

//use map method if both input and output arrays are the same and both input and output's length are same.
//[1,2,3,4] =[2,4,6,8]

// let list=[1,2,3,4,5]
// let newList=list.map((value,index)=>{
//     return value*3;
// });
// console.log(newList);


//   let func1=((arrays)=>{
//     let output=arrays.map((value,index)=>{
//         return value*2;
//     })
//     return output;
// })

// let func=func1([1,2,3,4,]);
// console.log(func)


//reduce
//find the mjltyplication of all array values

// let list=[1,2,3,4,5];
// let newList=list.reduce((previous, current)=>{
//     return previous * current;
// },1);
// console.log(newList)

// let list=[1,2,3,5,8,10]
// let newList=list.filter((a)=>{
//     return a%2===0;
// })
// console.log(newList)
// let redNum=newList.reduce((a,b)=>{
//     return a+b
// },0)
// console.log(redNum)

//objects 


// let stdDetails={
//     stdId : 1,
//     stdName : "Milan khadka",
//     address : "minbhawan",
//     age : 26,
//     isMarried :false

// }

// console.log(stdDetails.isMarried)

// //cahneg the object value
// stdDetails.name="supendrea dangol";
// stdDetails.age=29;
// console.log(stdDetails.name)

// //delet object value
// delete stdDetails.isMarried;
// console.log(stdDetails)

//duplicate key doesnot exist ,if exist override by below code
// let data={
//     name: "milan kahdka",
//     favFruits: ["apple","orange"],
//     location :{
//         country :"Nepal",
//         provience: "bagmati",
//         city: "kathmandu"
//     },
//     age:function(){
//         console.log("my name is milan khadka,i am 20 years old")
//     }

// }

// console.log(data.name)
// console.log(data.favFruits[1]);
// console.log(data.location.city)
// data.age();

//alias
//alias means changing variables names.

// let{
//     name :fullName,
//     age : year,
//     ismarried,
// }={
//     name:"milan khadka",
//     age :28,
//     ismarried :false
// }
// console.log(fullName)

//this keyword
// let info ={
//     name:"milan",
//     surName:"khadka",
//     fullName:function(){
//         console.log(this.name);
//         console.log(this.surName)
//     }
// }

// info.fullName();

//array destructure
// let names=["milan","supendra","rajdeep"]; 
// let [a,b,c,d="rosedeep"]=names; //default value d="rojdip"
// console.log(a,b,c,d)

//spread operator
//syntax ...
// let planet=["sun","moon","pluto"];
// let[planet1,...rest]=planet;
// console.log(planet1)
// console.log(rest)

let name=["milan","supen","bibek","ravi"];
let data=["school","kathmnadu","nepal"];
let totalData=[...name,"this is my data",...data,...name];
console.log(totalData);