function passMessageWithParameter(courseName, cost){
    return "I am happy to learn " + courseName + "and its cost is " + cost
}

let a = passMessageWithParameter('Full Stack developement ', 400)
let b = passMessageWithParameter('Frontend development ', 450)

console.log(a)
console.log(b)