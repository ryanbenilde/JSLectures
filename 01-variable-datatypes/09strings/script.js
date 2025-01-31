//strings are primitive but you can use methods in it because JS is using a wrapper

let x;

const name = "Ryan"
const age = 19

//concatenation 
x = "Hello, my name is " + name + " and I am " + age + " years old"

//Template literals or template strings 
x= `Hello, my name is ${name} and I am ${age} years old`


//String properties and methods
//creating a string object (JS does this automatically when using property or methods on a primitive string

const s = new String("Hello World")
x = typeof s

x = s.length;

//access value by key
x = s[6]

//shows the prototype of the string object
x = s.__proto__

//returns the character at the specified index
x = s.charAt(6)

//returns the index of the first occurence of a specified value in a string
x = s.indexOf('d')

//search a string for a specified value
x=s.substring(2,5) //llo
x=s.substring(7) //orld..... hanggang sa dulo ng walang hanggan

//slice() - extracts a part of the string and returns a new string
x = s.slice(0,5) //Hello
x = s.slice(-11, -6) //Hello
x = s.slice(-11) //Hello World

//trim() - removes white spaces from beginning and end of a string
x = '        Hello World      '
x = x.trim()

//replace() - replace all instances of a string
x = s.replace('World', 'Love Again')

//includes() returns atrue if the string is found
x = s.includes('Hell')

//valueOf() - return the primitive value of a variable
x = s.valueOf()

//split() - returns an array of string
x = s.split('')
console.log(x);