<!-- The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself. -->

function mirrorString(str) {
    const reversed = str.split('').reverse().join('');
    return str + reversed;
}

// Example usage:
const original = "hello";
const mirrored = mirrorString(original);
console.log(mirrored); // Output: "helloolleh"
