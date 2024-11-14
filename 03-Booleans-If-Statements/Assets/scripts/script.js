/*
// Examples of Boolean values

    console.log(typeof true, typeof 'true');
    console.log(typeof false, false);
    console.log(5 > 10 - 10);
    console.log(5 === '5.0000');

// If-Statement Code:
    console.log('Hello');
    if (true) {
      console.log('World');
    }
    console.log('Bye');
    // Code block to execute if the condition is false
    if (false) {
      // Code block to execute if the condition is true
      console.log('hii');
    } else {
      console.log('else');
    }

// Practial Example;
// 01--Writing a code to check if someone is old enough to drive;
    const age = 10;
    if (age >= 16) {
      console.log('You can drive');
      console.log('Congrats!');
    } else if (age >= 14) {
      console.log('Almost there bud!');
      console.log('You should go to school');
    } else {
      console.log('You are not old enough to drive');
      console.log('You are a massive idiot');
    }
// 02--Writing a code to check if a number is odd or even;
    const number = 10;
    if (number % 2 === 0) {
      console.log('The number is even');
    } else {
      console.log('The number is odd');
    }

// 03--Writing code to check if a number is a prime number
    const primeNumber = 19;

    if (primeNumber < 2) {
      console.log(`${primeNumber} is NOT a prime number`);
    } else if (primeNumber === 2) {
      console.log(`${primeNumber} is a prime number`);
    } else if (primeNumber % 2 === 0) {
      console.log(`${primeNumber} is NOT a prime number`); // Divisible by 2
    } else if (primeNumber % 3 === 0) {
      console.log(`${primeNumber} is NOT a prime number`); // Divisible by 3
    } else if (primeNumber % 5 === 0) {
      console.log(`${primeNumber} is NOT a prime number`); // Divisible by 5
    } else if (primeNumber % 7 === 0) {
      console.log(`${primeNumber} is NOT a prime number`); // Divisible by 7
    } else {
      console.log(`${primeNumber} is a prime number`);
    }
    */

// Logical Operators
  /*
    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && true); // false
    console.log(false && false); // false

    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false

    console.log(!true); // false
    console.log(!false); // true
  */
    
    // console.log(0.5 >= 0 && .5 > 1);
    // console.log(5 > 2 || 5 < 100);
    
    
//  Truthy and Falsy Values
/*if (0) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

const cartQuantity = 10;
if (cartQuantity) {
  console.log('Cart has products');
} else {
  console.log('Cart is empty');
}

console.log('text' / 10);

let numOne;
console.log(typeof numOne);

// or

const numTwo = undefined;
console.log(typeof numTwo); 
*/

// Shortcuts for If-Statements;
// --Ternary Operator ? :
const result = null ? 'truthy' : 'falsy';
console.log(result);

// --Guard Operator &&
true && console.log('hello');
const message = false && 'hello';
console.log(message);

// --Default Operator ||
false || console.log('good morning');

const myCurrency = undefined || 'USD';
console.log(myCurrency);
