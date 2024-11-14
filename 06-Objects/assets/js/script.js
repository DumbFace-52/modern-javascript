// Vanilla JS Objects:

// Creating Objects:
/*
const product = {
    name: 'Laptop',
    price: 1000,
    color: 'black'
};

console.log(product, typeof product);

// Accessing Properties:
console.log(product.name, typeof product.name);
console.log(product.price, typeof product.price);
console.log(product.color, typeof product.color);

// Updating Properties:
product.name = 'Macbook';
product.price = 2000;
product.color = 'white';

console.log(product);

// Adding Properties:
product.isTrue = true;
product.brand = 'Apple';

console.log(product);

// Deleting Properties:
delete product.isTrue;
console.log(product);
*/

/*
const product2 = {
    name: "Smartphone",
    ['price']: 1250,
    'color': "black",
    ['delivery-time']: "2 days",

    // Nested Objects:
    rating: {
        'stars': 4.5,
        ['count']: 87
    },

    // Function:
    fun: function function1() {
        console.log("Function 1 is called");
    }
};
console.log(product2, product2.name);
*/

// Another way of accessing values of an object:
// Bracket Notation;
/*
    -Bracket notation is used when you don't know the name of a property in advance.
    -Lets us use properties that don't work with dot notation;
    -You can add values to an abject using bracket notation when you create it;

console.log(product2["name"], product2["price"], product2["color"], product2['delivery-time']);
console.log(product2['rating'], product2.rating['count'], product2.rating.stars);
product2.fun();
*/

// Built-in Objects:
// JSON Built-in Object:
// Similar to JS object syntax but less features.
// It's syntax is universal

// Why use JSON?
/*
    - when we send data between computers
    - when we store data
*/

/*
Built-in JSON Object
Helps convert object to JSON and vice versa
*/

// Converting product2 to JSON:
/*
JSON.stringify(product2);
console.log(JSON.stringify(product2));
*/

// Converting JSON to object:
/*
const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
*/

// Local Storage:
// Used to save values more permanently;

// Auto Boxing;
console.log('lomen'.length);
console.log('lomen'.toLocaleUpperCase());

// Objects as references;
const object1 = {
    message: 'hey you!'
};

const object2 = object1;
object1.message = 'heyyy!';
object2.message = 'hey you!!'
console.log(object1, object2);

// Deep Copying Objects;
const object3 = {
    message: 'hey you!!'
};
console.log(object3 === object1);
console.log(object2 === object1);

// Shortcuts for Objects:
const object4 = {
    message: 'hey you!!',
    price: 100
};

// const message = object4.message;
// Destructuring:
const { message, price } = object4;
console.log(message, price);

// Shorthand Property:
const object5 = {
    // message: message
    message,
    price 
};
console.log(object5);

// Shorthand Method:
const object6 = {
    message,
    // method: function function1() {
    //     console.log('method');
    // }
    method() {
        console.log('method');
    }
};
console.log(object6);
object6.method();