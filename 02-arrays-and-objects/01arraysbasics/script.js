//Array literals
const numbers = [12, 45, 33, 29, 39]

//Array Constructor
const fruits = new Array('apple', 'banana', 'orange')

x = fruits[1]
x = numbers[0] + numbers[3]

//utilize template literals with array
x = `My favorite fruit is an ${fruits[2]}`

//length
x = numbers.length

//change orange with tomato
fruits[2] = 'tomato'

//length is not read only
// fruits.length = 2

fruits[3] = 'strawberry'

//utilize the length as the index and it will always add to the end
fruits[fruits.length] = "blueberry"
fruits[fruits.length] = "peach"

console.log(fruits);
