// /* Project 1: Analyzing Inventory Data
// Imagine you work for an e-commerce company that needs to analyze its inventory data. You have an array of objects representing different products, each with properties like name, price, quantity, and category. Your task is to write a program that performs various operations on this data using the appropriate loop.
// Requirements:
// Calculate the total value of the inventory (price * quantity) for each category
// Find the product with the highest price in each category.
// Generate a report of products with low stock (quantity < 10) 
// */

const inventory = [
  {
    name: "Product A",
    price: 25.99,
    quantity: 50,
    category: "Electronics"
  },
  {
    name: "Product B",
    price: 15.99,
    quantity: 30,
    category: "Electronics"
  },
  {
    name: "Product C",
    price: 9.99,
    quantity: 100,
    category: "Clothing"
  },
  {
    name: "Product D",
    price: 19.99,
    quantity: 20,
    category: "Clothing"
  },
  {
    name: "Product E",
    price: 49.99,
    quantity: 10,
    category: "Furniture"
  },
  {
    name: "Product F",
    price: 29.99,
    quantity: 15,
    category: "Furniture"
  },
  {
    name: "Product G",
    price: 7.99,
    quantity: 80,
    category: "Accessories"
  },
  {
    name: "Product H",
    price: 12.99,
    quantity: 40,
    category: "Accessories"
  }
];

function calculateTotalValueByCategory(inventory) {
  const totalValueByCategory = {};
  inventory.forEach(item => {
    const price = item.price;
    const quantity = item.quantity;
    const category = item.category;

    const totalValue = (price * quantity) // toFixed return string

    if (totalValueByCategory[category]) {
      totalValueByCategory[category] += totalValue;
    }
    else {
      totalValueByCategory[category] = totalValue;
    }
  })
  return totalValueByCategory;
}

// const totalValueByCategory = calculateTotalValueByCategory(inventory);
// console.log(totalValueByCategory);


/*
if you want to get those values in 2 decimal points
```
const totalValue = (price * quantity).toFixed(2); // <--- added toFixed(2)

if (totalValueByCategory[category]) {
  totalValueByCategory[category] = (parseFloat(totalValueByCategory[category]) + parseFloat(totalValue)).toFixed(2);
}
else {
  totalValueByCategory[category] = totalValue;
}
```
*/
