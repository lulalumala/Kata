/*
A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Magoso" and store it in a variable called result. He needs your help to fix this code.

Examples
nameString("Mubashir") ➞ "MubashirMagoso"

nameString("Matt") ➞ "MattMagoso"

nameString("javaScript") ➞ "javaScriptMagoso"
*/

// Code starts here
function nameString(result) {
    console.log(result.concat("Magoso"))

}
nameString()
// Code ends here

/***********************************************************************************************************************/

/*
Create a function that accepts two numbers as arguments and return the remainder when you divide the first number with the second number

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0
*/

// Code starts here
function rem(a, b) {
    console.log(a%b)
}
rem()
// Code ends here

/***********************************************************************************************************************/

/*
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50
*/

// Code starts here
function area(b, h) {
    console.log((b*h/2))
}
area()
// Code ends here

/***********************************************************************************************************************/

/*
Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120

*/

// Code starts here
function convert(n) {
    console.log(n*60)
}
convert()
// Code ends here

/***********************************************************************************************************************/

/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

*/

// Code starts here
const num3 = (num) => {
    console.log(num.toString())
} 
num3 (34)
// Code ends here

/***********************************************************************************************************************/

/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
*/

//Code starts here
const minMax=(numArray)=>{
    let maxVal=Math.max(...numArray)
    let minVal=Math.min(...numArray)
    const result=[minVal, maxVal]
    console.log(result)
  }
  minMax([1,3,5,7])
//Code ends here

/***********************************************************************************************************************/

/*
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

Examples
animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50
*/
function animals(chicks, cows, pigs) {
    console.log((chicks*2)+(cows*4)+(pigs*4))
}
animals(1,2,3)
/***********************************************************************************************************************/

/*
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]
*/
const makepair = (a, b) => {
    let makePPair = [] 
    makePPair.push(a,b)
    console.log(makePPair)
}
makepair(1,2)
//[a,b]
/***********************************************************************************************************************/

/*
Create a function that accepts two strings as arguments and return true if they have equal number of characters or false if they do not.

Examples
compareStrings("home", "roof") ➞ true
compareStrings("no", "yes") ➞ false
*/
function twoStrings(t,u) {
    if (t.length == u.length) 
        {console.log(true)}
    else{console.log(false)}
}