// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
async function asyncArrayMap(numbers) {
    return numbers.map(num =>
        new Promise(resolve =>
            setTimeout(() => resolve(num * 2), 500)
        )
    );
}

// Example usage:
async function main() {
    const numbers = [1, 2, 3, 4, 5];
    const promises = await asyncArrayMap(numbers);

    // Resolve all promises
    const results = await Promise.all(promises);
    console.log(results); // Output: [2, 4, 6, 8, 10]
}

main();
