//get the total of price
// let list = [
//   { name: "mobile", price: 10000 ,code:3},
//   {
//     name: "battery",
//     price: 8000,
//     code : 5
//   },
//   {
//     name: "earphone",
//     price: 5000,
//     code : 2
//   },
//   {
//     name: "charger",
//     price: 2000,
//     code: 8
//   },
// ];

// let totalPrice = list.map((value, index) => {
//   return value.price;
// });
// console.log("all price",totalPrice)
// let sum = totalPrice.reduce((a, b) => {
//   return a + b;
// },0);

// console.log(sum);

//sort the array of object according to price

// let names=list.map((value,index)=>{
//     return value.name;
    
// })
// console.log(names)
// let sortArray=names.sort()


    
// console.log(sortArray)
  
// make a arrow function if age is 25, console your ticket is free,if age is 26 console your ticket is 100
//

// let func = (age)=>{
//     if( age===25){
//         console.log("your ticket is free");
//     }
//     else if(age===26){
//         console.log("youe  ticket is 100")
//     }
//     else{
//         console.log("not allowed")
//     }
// }
// let output=func(20);

//
/* let sum=(num1,num2)=>{
    let num3= (`the sum of ${num1} and ${num2}  is ${num1+num2}`)
    console.log(num3)
}

sum(10,15) */

// let fun = (num1,num2)=>{
    
//     let num3 = `${num1+ num2}`
// console.log(num3)
// }
// fun(25,24);

/* let fruitArray=(fruits)=>{
    if(fruits.includes("apple")){
            console.log("apple contained")
    }else{
        console.log("apple doenot contain")
    }
}

fruitArray(["apple","orange"]) */

let fruitArray = (fruits) => {
  if(fruits.includes("mango")){
    console.log("apple contained")
  }else{
    console.log("apple does not contained")
  }

}



