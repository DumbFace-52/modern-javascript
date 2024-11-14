// Vanilla JS Objects:

// Creating Objects:
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