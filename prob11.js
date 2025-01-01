//  The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
function filterProducts(products, criterion) {
    if (!Array.isArray(products)) {
        throw new Error("First argument must be an array of products");
    }
    if (typeof criterion !== "function") {
        throw new Error("Second argument must be a function");
    }

    return products.filter(criterion);
}

// Example usage:
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Shoes", category: "Fashion", price: 50 },
    { id: 3, name: "Phone", category: "Electronics", price: 500 },
    { id: 4, name: "T-shirt", category: "Fashion", price: 20 },
];

// Filter by category
const electronics = filterProducts(products, product => product.category === "Electronics");
console.log(electronics);
// Output: [{ id: 1, name: "Laptop", ...}, { id: 3, name: "Phone", ...}]

// Filter by price range
const affordable = filterProducts(products, product => product.price < 100);
console.log(affordable);
// Output: [{ id: 2, name: "Shoes", ...}, { id: 4, name: "T-shirt", ...}]
