// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num < 0) break; // Stop if a negative number is encountered
        sum += num; // Add the number to the sum
    }
    return sum;
}

// Example usage:
const numbers = [10, 20, 30, -5, 40];
const result = sumUntilNegative(numbers);
console.log(result); // Output: 60
