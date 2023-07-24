/**
 * Introduction to Arrow Functions.
 * 
 * In the early 2010s javascript was rapidly evolving and devleopers were looking for ways to write
 * more concise and expressive code. While working with functions, there was a need for some function
 * declaration with concise syntax and extended capabilities.
 * 
 * At the time, function expressions were a common way to define functions, but they had come 
 * limitations. Around this time, a proposal for a new type of function colled an "arrow function"
 * was introduced. This proposal aimed to address some of the limitations of function expressions
 * by introducing a new shorthand syntax for defining functions.
 * 
 * The proposal was first included in the 6th edition of ECMAScript (ECMAScript 2015), which was
 * released in June 2015. This marked the official introduction of arrow functions to the 
 * JavaScript language.
 * 
 * Since then, arrow functions have become a popular feature of the language and are widely used
 * by developers.
 */

// Arrow functions, also known as "fat arrow" functions.


// 1. One parameter, and a single return statement
const square = (x) => x *x;

console.log(square(3))
// 2. Multiple parameter, and a single return expression
const sumOftwoNumbers = (x, y) => x + y;

// 3. Multiple statements in function expression
const sum = (x, y) => {
    console.log(` Adding ${x} and ${y}`);
    return x + y;
}

// 4. Returning an object
const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y});


/**
 * Features of Arrow Function Syntax
 * 
 * * Parenthesis are optional in the case of a single parameter.
 * * Must use paranthesis in case of multiple parameters.
 * * The return keyword is not requried for a single return expression in the function
 * * The return keyword is required in case of multiple statements in the function.
 * * To return an object notation, wrap it with parentheses.
 */