/**
 * Introduction to Anonymous functions:
 * 
 * As the name suggests "Anonymous", is something that does not have any
 * "name" or "identity". Similarly, anonymous functions in javascript
 * are functions that do not have any name. Named functions are simply
 * functions, that have some name associated with them, you can consider
 * them as the normal javascript functions we use.
 * 
 * In general, an anonymous function is a function without a function
 * name but can be assigned to a variable. Arrow functions are also
 * anonymous functions with a compact syntax.
 */

const getFullName = function(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(getFullName("Chirag", "Goel"));