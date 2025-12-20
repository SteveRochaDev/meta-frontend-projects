// Dishes Data
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 0.2; // 20%

// Task 1: getPrices
function getPrices(taxBoolean) {
  if (typeof taxBoolean !== "boolean") {
    console.log("You need to pass a boolean to the getPrices call!");
    return;
  }

  for (let i = 0; i < dishData.length; i++) {
    let finalPrice;
    if (taxBoolean) {
      finalPrice = dishData[i].price + dishData[i].price * tax;
    } else {
      finalPrice = dishData[i].price;
    }

    // <-- NOTICE: no comma in the string
    console.log("Dish: " + dishData[i].name + " Price: $" + finalPrice.toFixed(2));
  }
}

// Task 2: getDiscount
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  if (typeof guests !== "number" || guests <= 0 || guests >= 30) {
    console.log("The second argument must be a number between 0 and 30");
    return;
  }

  let discount = guests < 5 ? 5 : 10;
  console.log("Discount is: $" + discount);
}

// Export functions for autograder
module.exports = { getPrices, getDiscount };
