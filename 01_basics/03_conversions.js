let score="33"
let score2="23abc"//not a pure number
let score3=null
let score4=undefined
let score5=true
console.log(typeof (score))

let valueInNumber=Number(score)
let value2InNumber=Number(score2)
let value3InNumber=Number(score3)
let value4InNumber=Number(score4)
let value5InNumber=Number(score5)
console.log(typeof (valueInNumber))
console.log(typeof (value2InNumber))//it will convert in number but its value will be NaN
console.log(value2InNumber)
console.log(value3InNumber)
console.log(value4InNumber)
console.log(value5InNumber)


//"33"=33
//"33abc"==NaN
//true=1;false=0

let isLoggedIn=""
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log( booleanIsLoggedIn)

//1=true;0=false
//""=false;"something"=true

let value=33
let toString=String(value)
console.log(typeof toString);
console.log( toString);

//****************************operations************************************* */

let val=3
let negval=-val
console.log(negval)
console.log(2*2)

let str1="aditi"
let str2="kumari"
let str3=str1+str2
console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2");
console.log(true)
console.log(+true)
console.log(+false)

let num1,num2,num3
num1=num2=num3=4

let gamecounter=100
console.log(gamecounter++)
console.log(++gamecounter)













