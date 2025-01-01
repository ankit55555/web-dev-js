// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


function countVowels(str) {
    const vowels = /[aeiouAEIOU]/g; // Regular expression to match vowels
    const matches = str.match(vowels); // Find all matches in the string
    return matches ? matches.length : 0; // Return the count or 0 if no matches
}

// Example usage:
const input = "Hello World!";
const vowelCount = countVowels(input);
console.log(vowelCount); // Output: 3


