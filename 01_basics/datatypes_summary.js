//primitive 
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

//js is dynamically typed:no need to declare datatype
const score=100//number
const scorevalue=23.5//number
const pass=false//boolean
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)

const bigNumber=23456789234234523455667n
console.log(typeof bigNumber);


//reference(non primitive)
//array function object
const fruits=["apple","banana"];
let myobj=
{
     user:"aditi",
     age:22
};
console.log(myobj)

const myfun=function()
{
console.log("hello")
}
myfun()//calling function
console.log(typeof myfun);
console.log(typeof fruits);
console.log(typeof myobj);

//function=function
//arrray=object;null=object
//object=object
