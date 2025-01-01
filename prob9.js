// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


async function placeOrder(orderDetails) {
    return new Promise((resolve, reject) => {
        if (!orderDetails || !orderDetails.item) {
            reject("Invalid order details provided");
            return;
        }

        const delay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1-3 seconds

        setTimeout(() => {
            resolve(`Order confirmed: ${orderDetails.item} will be delivered soon.`);
        }, delay);
    });
}

// Example usage:
async function main() {
    try {
        const orderDetails = { item: "Laptop", quantity: 1 };
        console.log("Placing order...");
        const confirmation = await placeOrder(orderDetails);
        console.log(confirmation); // Output: "Order confirmed: Laptop will be delivered soon."
    } catch (error) {
        console.error(error); // Handle errors like invalid order details
    }
}

main();
