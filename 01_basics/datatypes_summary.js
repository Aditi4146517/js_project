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

//*******************************memory*************************************8 */
//stack(primitive),heap memory(non primitive)
//stack- actual value is stored in stack memory,when we copy variable to another variable,a copy of value is created in stack memory and assigned to another variable
//heap-when we assing one variable to another,the refernce(address) stored in the first variable is copied to the second variable,so both variables point to the same object in heap memory,if we change the value of one variable,it will affect the other variable as well
let myName="aditi"
let anotherName=myName
console.log(myName)
console.log(anotherName)
myName="aditi sinha"//changing myname doesnt affect anotherName because they are stored in stack memory
console.log(myName)
console.log(anotherName)

let user1={
     user:"aditi",
     email:"abc@gmail.com"
}
let user2=user1;
user2.user="tiya"
console.log(user1.user)
     

