const name="aditi"
const repoCount=50

console.log(name+repoCount)

console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)
// way to declare string
const myName=new String("aditi")//it provides additional methods and properties to work with strings, but it is not recommended to use it as it can lead to unexpected behavior
//type = object(string object);js creates an object that wraps the string "aditi"
console.log(myName[3])
console.log(myName.__proto__)
console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.charAt(2))
console.log(myName.toLocaleLowerCase())
console.log(myName.indexOf('t'))
console.log(myName.substring(0,3))//0 1 2
console.log(myName.slice(0,3))//0 1 2;slice(start,end)
console.log(myName.slice(-3))//last 3 characters;slice(indexStart)
console.log(myName.slice(-5))//last 5characters
console.log(myName.slice(-4,4))//start=-4 end=4-1=3
console.log(myName.slice(-4,-1))//start=-4 end=-1-1=-2


const newString="   aditi  there  "//primitive string
console.log(newString)
console.log(newString.trim())//removes the whitespace from the start and end of the string

//if a string is primitive,how can it access methos like trim(),js temporarily wraps the primitive string in object when we access its methods and properties, allowing us to use them as if they were objects. This is known as "boxing" or "autoboxing". Once the method is called, the temporary object is discarded and the primitive string remains unchanged.

console.log(newString.replace("aditi","tiya"))
console.log(newString.includes("riya"))

const word="my name name is aditi"//array of words 
console.log(word.split(" "))
console.log(word.split(" ",2))//array of words with limit 2
console.log(word.search("name"))//returns the index of the first occurrence of the specified value in a string
console.log(word.search((/Name/i)))//returns the index of the first occurrence of the specified value in a string, case insensitive
console.log(word.match(/name/g))//returns an array of all matches of a string against a regular expression,g=global search

const pets="cat dog cat dog cat dog"
console.log(pets.match(/cat/g))//returns an array of all matches of a string against a regular expression, g=global search



//strings are immutable, once a string is created, it cannot be changed. Any operation that modifies a string will create a new string instead of modifying the original string.
