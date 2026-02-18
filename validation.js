function multiply(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "please provide a number";
    }

    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 7);
console.log(result);

//---------------------------------------

//now validation check for string

function fullName(first, second) {
    if (typeof first !== "string") {
        return "first nsme should be a string "
    }
    else if (typeof second !== "string") {
        return "seconf name should be a string"
    }
    const full = first + " " + second;
    return full;
}

const name = fullName("arman", "munshi")
console.log(name);