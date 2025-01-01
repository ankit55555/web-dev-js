
// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.


function calculateTotal(cart) {
    if (!Array.isArray(cart)) {
        throw new Error("The cart should be an array of products.");
    }

    return cart.reduce((total, product) => {
        if (!product.price || !product.quantity) {
            throw new Error("Each product must have a price and quantity.");
        }
        return total + (product.price * product.quantity);
    }, 0);
}

// Example usage:
const cart = [
    { name: "Laptop", price: 1000, quantity: 2 },
    { name: "Phone", price: 500, quantity: 1 },
    { name: "Headphones", price: 100, quantity: 3 },
];

const total = calculateTotal(cart);
console.log("Total cost: $" + total);  // Output: "Total cost: $2700"
