# Awesome CLI Calculator 

![Calculator with Javascript and NodeJs](https://user-images.githubusercontent.com/83928646/180323381-a9a5dae8-4b46-405c-ae7a-aa7599fc92ac.gif)

RPN CLI is a Reverse Polish Notation (RPN) calculator for the command line. With RPN CLI, you can execute RPN functions in the command line.
Application based on Code Sample 

- The main technologies used are : JavaScript, Nodejs, Readline.
- This project run on CLI. 


## Getting started

Clone this project:
```bash
git clone https://github.com/Yafet-Segid/CLI-RPN-Calculator.git
```

Install [node.js](http://nodejs.org/). Then install the project dependencies:
```bash
npm install
```
 
Start app:
```bash
Node index.js
```

For instance, the equation 5 1 2 + 4 * + 3 - (which, in conventional notation, reads as 5 + ((1 + 2) * 4) - 3)) should evaluate to 14.


The input is set up so that there is a space between each token for your convenience.


The empty expression should evaluate to 0.


Valid operations are +, -, *, /.



Example Input/Output
--------------------


    > 5 5 5 8 + + -
    -13
    > 13 +
    0

---

    > -4
    -2
    > -2
    -2
    > *
    6
    > 10
    10
    > +
    16
