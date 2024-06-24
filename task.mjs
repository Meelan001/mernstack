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



// let number=[10,6,4,8,3,5,1,2]
// let numberSort=number.sort((a,b)=>{
//     return b-a;
// })
// console.log(numberSort);

//sort according to string length
// let name=['milan','ram','avi','ak','supendra'];
// let output = name.sort((a,b)=>{
//     return a.length-b.length;
// })
// console.log(output)

//object to array
// let info = {
//     name: "milan",
//     age : 28,
//     isMarried :false ,
// }

// let keyArray=Object.keys(info);
// console.log(keyArray)
// let valueArray=Object.values(info);
// console.log(valueArray)
// let propertyArray=Object.entries(info);
// console.log(propertyArray)

//array to object

// let list=[ [ 'name', 'milan' ], [ 'age', 28 ], [ 'isMarried', false ] ];
// let output=Object.fromEntries(list);
// console.log(output)

//math
// let data=Math.random(); give random value of 0 and 1
// console.log(data);

// let data=Math.random()*100;
// console.log(data)

// let data=Math.ceil(1.44)
// console.log(data)
// let data1=Math.floor(1.44);
// console.log(data1)

//scope 

// {
//     let a=5;
//     console.log(a)
// }
// console.log(a)

//a variable will be known with in its block for the line where it is defined.
//{ //parent block
// let a =1; 
// {   //child block
//     console.log(a)

// }
// console.log(a)
// }
//when a variable is called, first it is  searched in its own block, if variable is not find in that block then
//it will search for its parent block
//block level scope
// {
//     let a =1;
//     {
//         let a=10;
//         console.log(a)
//     }
//     console.log(a)
// }
//a variable cannot be redefined in the same loc, but we can redefine same variable in
//different block

// == or ===
// console.log(1=="1"); it only check values
// console.log(1==="1")  it checks both values and its datatype (most used)
//undefined =>  variable id defined but not initialized
// let a;
// console.log(a)

// Rest or Spread ...
// let {name,...rest}={name:"milan",age:28,address:"minbhawan"};
// console.log(rest)

// let sum=(a,...b)=>{
// console.log(a);
// console.log(b)
// }

// sum(1,2,3,4,5,6,7)

// //spread
// let arr=[1,2,3,4,5,6];
// let arr1=['milan','bibek','ram'];

// let output = [2,4,6,...arr1,"supen",...arr,"ravi"];
// console.log(output)

// let info={name:"milan",age:28,address:"minbhawan"};

// let info1={...info}
// console.log(info1)
// let info2={...info,country : "Nepal"}
// console.log(info2)

// let product=[
//     {name:"laptop", price :100000},
//     {name:"mobile", price: 50000},
//     {name:"tv" , price:70000},

// ];
// //
// let keyArray=product.map((value,index)=>{
//     return value.name;

// })
// console.log(keyArray)

// let priceArray=product.map((value,index)=>{
//     return value.price
// })
// console.log(priceArray)

// let filtArray=product.filter((a)=>{
//     return a.price>60000;
// })
// console.log(filtArray)

// let valueArray=product.map((value)=>{
//     return {[value.name]:value.price}
// })
// console.log(valueArray)

const products = [
    {
      id: 1,
      title: "MacBook Pro",
      category: "Laptops",
      price: 100000.0,
      description: "A high-performance laptop.",
      manufactureDate: "2023-05-15T08:30:00",
      isAvailable: true,
    },
    {
      id: 2,
      title: "Nike",
      category: "Running Shoes",
      price: 5000,
      description: "Running shoes designed for speed and comfort.",
      manufactureDate: "2023-02-20T14:45:00",
      isAvailable: true,
    },
    {
      id: 3,
      title: "Python",
      category: "Books",
      price: 500,
      description: "A language for AI",
      manufactureDate: "1925-04-10T10:10:00",
      isAvailable: false,
    },
    {
      id: 4,
      title: "Javascript",
      category: "Books",
      price: 700,
      description: "A language for Browser",
      manufactureDate: "1995-12-04T12:00:00",
      isAvailable: false,
    },
    {
      id: 5,
      title: "Dell XPS",
      category: "Laptops",
      price: 120000.0,
      description: "An ultra-slim laptop with powerful performance.",
      manufactureDate: "2023-04-25T09:15:00",
      isAvailable: true,
    },
  ];

  let filArray=products.filter((a)=>{
    return a.price>2000;
  })
  console.log(filArray);

  let arrDisplay=filArray.map((value,index)=>{
    return `${value.title} cost NRs ${value.price} and its category is ${value.category} `;
  })
  console.log(arrDisplay);