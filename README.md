# Awesome CLI Calculator 

![Calculator with Javascript and NodeJs](https://user-images.githubusercontent.com/83928646/180323381-a9a5dae8-4b46-405c-ae7a-aa7599fc92ac.gif)

RPN CLI is a Reverse Polish Notation (RPN) calculator for the command line. With RPN CLI, you can execute RPN functions in the command line.
Application based on Code Sample 

- The main technologies used are : JavaScript, Nodejs, Readline.
- This project run on CLI.

# [JavaScript](https://www.javascript.com/)
I choose JavaScript because it's the language of the web, which gives it completely unparalleled reach and portability. It's also quite fast, and reasonably sophisticated. This means you can create a very wide range of applications with it (web pages, interactive offline apps, 3d animations, and games), that you can easily transfer to any platform. 

# [nodeJs](http://nodejs.org/)
By using nodejs, you may build your own front-end server using only JS.
You are no longer have to rely on PHP, Java, or.net.
You will have the ability to write your application without depending on the backend thanks to this.
You may now write your own services, build your own server, and other things. 

# [Readline](https://nodejs.org/api/readline.html)
The Readline module provides a way of reading a datastream, one line at a time.

```bash
const readline = require('readline');
```

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
