let x;

const num = new Number(12.1453)


//toString() - return a string representation of the number
x = num.toString()

//to get the length
x = num.length //this will not work because there is no property in number na length
x = num.toString().length 

//toFixed() - returns a string representation of the number with a specified number of decimals

x = num.toFixed(2)
//toPrecision() - returns a number with the specified length
x = num.toPrecision(4); 

//toExponential() - convert a number to exponential notation and returns its value as a string
x = num.toExponential(2)

console.log(x);