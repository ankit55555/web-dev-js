
// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleWithoutDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        // Check for consecutive duplicates
        if (i > 0 && arr[i] === arr[i - 1]) {
            result.push(arr[i]); // Keep as is
        } else {
            result.push(arr[i] * 2); // Double the element
        }
    }
    return result;
}

// Example usage:
const inputArray = [1, 1, 2, 3, 3, 4];
const output = doubleWithoutDuplicates(inputArray);
console.log(output); // [2, 1, 4, 6, 3, 8]


 
// // Alternative solution using map method

// function doubleWithoutDuplicates(arr) {
//     return arr.map((num, i) => (i > 0 && num === arr[i - 1] ? num : num * 2));
// }

// // Example usage:
// const inputArray = [1, 1, 2, 3, 3, 4];
// const output = doubleWithoutDuplicates(inputArray);
// console.log(output); // [2, 1, 4, 6, 3, 8]
