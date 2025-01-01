// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(coffeeType) {
    return new Promise((resolve, reject) => {
        if (!coffeeType) {
            reject("Error: No coffee type provided!");
            return;
        }

        const delay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1-3 seconds

        setTimeout(() => {
            resolve(`Your ${coffeeType} is ready! ☕`);
        }, delay);
    });
}

// Example usage:
async function main() {
    try {
        const coffeeType = "Latte";
        console.log(`Brewing your ${coffeeType}...`);
        const message = await brewCoffee(coffeeType);
        console.log(message); // Output: "Your Latte is ready! ☕"
    } catch (error) {
        console.error(error); // Handle errors like missing coffee type
    }
}

main();
