// We know that the return statement in JavaScript is used to specify the 
/**
 * We know that the return statement in JavaScript is used to specify
 * the value that a function should return when the function is called
 * upon finishing the execution.
 * 
 * The return statement is followed by the value or expression that you
 * want to return.
 * 
 * Functions can be declared without any parameters but can have a return
 * statement. This is done to return some value when the function is
 * called.
 * 
 * When the function is called and the return statement is executed, the
 * function execution is stopped and the specified value is returned to
 * the calling code.
 */

// Declaration

function passMessage() {
    return "I am happy to learn Full Stack Development from PW Skills";
}

// Calling a function

let message = passMessage();

// The function would be executed and on executing the return statement the
// returned message is stored in the message variable.

console.log(message.toUpperCase())
console.log(message.toLowerCase())
