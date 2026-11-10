let myDate=new Date()
console.log(typeof myDate)//object
console.log(myDate.toString())//day date time timezone
console.log(myDate.toDateString())//day date
console.log(myDate.toTimeString())//time timezone

console.log(myDate.toLocaleString())//local format
console.log(myDate.toLocaleDateString())//local date format
console.log(myDate.toLocaleTimeString())//local time format

let myCreatedDate=new Date(2024,6,10)//month-0index
console.log(myCreatedDate.toDateString())
let myCreatedDate2=new Date(2024,6,10,5,35,10)//year,month,day,hours,minutes,seconds
console.log(myCreatedDate2.toString())
console.log(myCreatedDate2.toDateString())
console.log(myCreatedDate2.toTimeString())
let newdate=new Date("2024-06-10")//month 1 indexing,yyyy-mm-dd
console.log(newdate.toDateString())
let newdate2=new Date("03-27-2005")//mm-dd-yyyy
console.log(newdate2.toLocaleString())
console.log(newdate2.toDateString())
console.log(newdate2.getMonth()+1)//month =march ans=2(start from 0) so +1
console.log(newdate2.getDate())//date=27
console.log(newdate2.getFullYear())//year=2005
console.log(newdate2.getDay()+1)//day=Sunday ans=0(start from 0) so +1


const date=new Date("06-20-2004")
console.log(date.toLocaleString("en-IN",{weekday:"short"}))//dafault or en-IN or anythin mandatory to get the weekday otherwise it will give normal locale string
console.log(date.toLocaleString('default',{weekday:"long"}))
console.log(date.toLocaleString('default',{weekday:"narrow"}))
console.log(date.toLocaleString('default',{timeStyle:"long"}))
console.log(date.toLocaleString('default',{timeStyle:"medium"}))
console.log(date.toLocaleString('default',{timeStyle:"short"}))
console.log(date.toLocaleString('default',{timeStyle:"full"}))


/******************************TimeStamp**************************************** */

console.log(Date.now())//timestamp in milliseconds