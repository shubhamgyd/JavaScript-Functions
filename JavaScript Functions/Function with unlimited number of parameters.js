/**
 * Function with an unlimited number of parameters
 * 
 * From the previous lectures, we are clear with the concept of function declarations, parameters,
 * arguments, and function calls.
 * 
 * In this lecture, we will be looking at a situation where an unlimited number of parameters
 * are passed as parameters to the function. As a developer what are the options available to
 * handle this situation?
 * 
 * Assume a condition where we want to find the sum of all the numbers passed a parameter to the
 * function. In this case, as we have no idea of the number of parameters. So, we cannot make
 * use of what we have learned in previous lectures.
 */

// The argument keyword
/**
 * In javascript, the arguments keyword refers to an object that contains all the arguments
 * passed to a function.
 * 
 * It is similar to an array, but not an actual array. We can make use of the ".length" method
 * to know how many parameters are passed.
 * 
 * The arguments object is available within all function bodies and can be used to access the
 * values of the arguments passed to the function.
 */

function sumOfAllParameters() {
    console.log(arguments.length);
    let sum = 0
    for(let i = 0; i <arguments.length-1; i++) {
        console.log(arguments[i])
        sum += arguments[i];
    }
    return sum;
}

const total = sumOfAllParameters(1,2,3,4,5,6,7,8);

console.log(total);