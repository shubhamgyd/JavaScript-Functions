/**
 * Introduction to function expressions.
 * Functions are usually declared using the syntax which we have discussed in previous lectures.
 * Besides this javaScript has a function expression which is a way to define a function and
 * assign it to a variable. The syntax is quite different from the function declaration.
 * 
 * Syntax
 * (function (parameters) {
 *  //body of the function 
 * })(arguments);
 * 
 * Implementation
 * 
 * Advantages of function expressions.
 * 1. Function expressions can be used as an arguments to another function, but function
 *    declarations cannot.
 * 2. Function expressions can be anonymous, while function declarations cannot.
 */

var sum = function(x, y){
    return x + y;
}

var total = sum;

console.log()