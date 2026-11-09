const accountId=144543//constant
let accountEmail="aditi23@gmail.com"
var accountPassword="12345"//do not know scope
accountCity="jaipur"
let accountState;

//accountId=23//not allowed
accountEmail="abc@gmail.com"
accountPassword="2367"
accountCity="raipur"
console.log(accountId);


/*
preffered not to use var b/c issues in block scope and functional scope
*/
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


