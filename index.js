const readline = require('readline');

// Function to calculate expression
function calculate(input) {

    const stack = [];
    let result = "";
    let a;
    let b;

    input.map((item) => {
        if (item != "+" && item != "-" && item != "*" && item != "/" && !isNaN(item)) {
            stack.push(item);
            
        }
        else {
            a = Number(stack.pop());
            b = Number(stack.pop());

            // check validity of expression
            if (a == undefined || isNaN(a) || b == undefined || isNaN(b)) {
                console.log("Expression is invalid")
            }

            if (item == "+") {
                result = (a + b);
            }
            else if (item == "-") {
                result = (b - a);
            }
            else if (item == "*") {
                result = (a * b);
            }
            else if (item == "/") {
                result = (b / a);
            }
            stack.push(result);
        }
    })

    result = Number(stack.pop())
    if (isNaN(result)) {
        console.log("Result is NaN")
    } else if (!isFinite(result)) {
        console.log("Result is Infinite")
    }
    else {
        return result;
    }


}


// Main Program Begins 

let input = [];
let keyboard = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
let ans;
let displayFlag = false;


keyboard.on('line', function (command) {

    displayFlag = false;

    if (command == "q") {
        keyboard.close()
        return
    }

    // This code parses string on the basis of space character
    input = input.concat(command.split(' '));
    input = input.filter(item => item != '')


    // This code is being used to handle different types of errors and outputs
    try {
        ans = calculate(input);
        displayFlag = true; // Display output
        console.log(ans);
    }
    catch (e) {
        console.log(e.message);
    }
    finally {
        if (!displayFlag) {
            input = []
            console.log("*******\t\t(Program Restarted)\t\t*******");
        }
    }
})