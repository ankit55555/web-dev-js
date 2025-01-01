// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    return hasMinLength && hasUpperCase && hasLowerCase && hasDigit;
}

// Example usage:
const password = "Secure123";
console.log(validatePassword(password)); // true

const weakPassword = "short1";
console.log(validatePassword(weakPassword)); // false
