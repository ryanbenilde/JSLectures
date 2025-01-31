let x;
const arr = [28, 38, 44, 29, 309, 88]

//push() - push a value to the end of the array
arr.push(100)


//pop() - takes the last value off
arr.pop()

// unshift() - add a value to the beginning of the array
arr.unshift(99)

//shift() - remove the first value
arr.shift()

//reverse an array
// arr.reverse()

//includes() - check to see if something is in the array
x = arr.includes(29)

//return array as a string
// x = arr.toString();
// x = arr.join()

//slice - returns selected elements in an array as a NEW ARRAY. This takes in the index of the first element up to the index before the last element to be included in the new array
// x = arr.slice(1,4) // 38, 44, 29 //stop ka bago mag 4th

//splice() works like slice except it takes the index of the first element and the number opf elements after that as a second argument. It also mutates the original array
// x = arr.splice(1,4) //38, 44, 29, 309
x = arr.splice(3,1) //

//chaining methods - some methods can be chained depending on the return value
x = arr.splice(1,4).reverse().toString().charAt(0)
// x = arr.splice(1,4).reverse().charAt(0).toString()//this will not work because you cannot use charAt at array, only on string



// x = arr
console.log(x);