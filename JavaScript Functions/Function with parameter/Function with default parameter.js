function passMessageWithParameter(courseName, enrollMessage="Enroll Today") {
    return "I am happy to learn " + courseName + " from PW Skills by Chirag, " + enrollMessage;
}

console.log(passMessageWithParameter("Full Stack development"))
console.log(passMessageWithParameter('Web Developement', '-Enroll Tomorrow'))