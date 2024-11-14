## Functions
### What is a Function?
// A function is a block of code that performs a specific task.
// A function is a reusable block of code.
// A function is a named block of code that can be called multiple times.

### Creating a Function/ Function Syntax
#### Declaring a Function
// The function keyword is used to declare a function.
// The function keyword is followed by the name of the function.
// The name of the function is followed by a set of parentheses.
// The parentheses can be empty.
// The function body is a block of code that is executed when the function is called.

### Rules for Function Names:
/*
1. A function name must start with a letter, underscore, or dollar sign.
2. A function name can contain letters, underscores, and dollar signs.
3. A function name cannot start with a number.
4. A function name cannot contain spaces or special characters.
5. A function name cannot be the same as a reserved keyword.
6. A function name cannot be the same as a variable name.
7. A function name should be descriptive and meaningful.
8. Best practice is to use camelCase for function names.
*/

#### Calling a Function
// To call a function, you use the name of the function followed by a set of parentheses.
// The parentheses can be empty.

### Return Statement
// The return statement is used to return a value from a function.

### Syntax Rules for a Return Statement:
/*
1. A return statement must be the last statement in a function.
2. A return statement can only be used inside a function.
3. A return statement can only return a value.
4. The value is called a return value.
5. A return statement can return a value of any type.
6. When used return ends the function immediately. 
7. Best practice is to use a return statement to stop the execution of a function and return a value.
8. Return statement can be used to break the execution of a loop or condition.
9. Return Statement lets us get a value out of a function.
*/

### Function Parameters
// A function can have parameters.
// Parameter exists inside the function scope.
// Function can have more than 1 parameter.
// A parameter is a variable that is passed to a function.
// A parameter is used to pass data to a function.
// A parameter is the opposite of a return statement.

### Syntax Rules for Parameters:
/*
1. Can't use special words: function
2. Can't start with a number
3. Can't use special characters except: $
4. Can't be the same as a variable name
5. Can't be the same as a function name
6. Parameters are separated by commas
7. Best practice = use camelCase
*/

## Example
function calculateTax(cost, taxPercent = 0.1) {
    console.log(cost * taxPercent);
}
// Passing a value/ arguement to a Function
calculateTax(2000, 0.2); 
calculateTax(5000);


