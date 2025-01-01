// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiresIn) {
    if (typeof token !== "string" || token.trim() === "") {
        throw new Error("Invalid token: must be a non-empty string");
    }

    if (typeof expiresIn !== "number" || expiresIn <= 0) {
        throw new Error("Invalid expiration time: must be a positive number in milliseconds");
    }

    // Calculate expiration time
    const expirationTime = Date.now() + expiresIn;

    // Create the auth data object
    const authData = {
        token: token,
        expiresAt: expirationTime,
    };

    // Save the auth data to localStorage
    localStorage.setItem("authToken", JSON.stringify(authData));
}

// Example usage:
const token = "abc123xyz";  // Replace with actual token
const expiresIn = 3600000;  // 1 hour in milliseconds

try {
    setAuthToken(token, expiresIn);  // Save token to localStorage
    console.log("Token saved successfully");
} catch (error) {
    console.error("Error setting token:", error.message);
}

// Function to retrieve and check token validity
function getAuthToken() {
    const authData = JSON.parse(localStorage.getItem("authToken"));

    if (!authData) {
        console.log("No token found.");
        return null;
    }

    // Check if the token has expired
    if (Date.now() > authData.expiresAt) {
        localStorage.removeItem("authToken");  // Remove expired token
        console.log("Token has expired.");
        return null;
    }

    return authData.token;  // Return valid token
}

// Example retrieval of token
const storedToken = getAuthToken();
console.log("Retrieved token:", storedToken ? storedToken : "No valid token.");
