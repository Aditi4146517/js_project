const score=400
console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))//returns a string representation of a number with a specified number of decimal places
const num=123.4567
console.log(num.toPrecision(6))//returns a string representation of a number with a specified length
const num2=10000000000
console.log(num2.toLocaleString('en-IN'))//returns a string representation of a number with commas as thousands separators, based on the locale specified

/************************MATHS****************************************** */


console.log(Math)
console.log(Math.abs(-5))//5
console.log(Math.abs(5))//5
console.log(Math.round(4.6))//5
console.log(Math.round(4.4))//4
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.7))//4
console.log(Math.min(2,5,6,7,8))//2
console.log(Math.max(4,5,6,7,8))//8

console.log(Math.random())//[0-1)
console.log(Math.random()*10)//[0-10]
console.log(Math.random()*10+1)//[1-11]avoid zero

//in range printing random numbers
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))//[10-20]