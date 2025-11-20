// EXERCISE 1

function isEmptyString(str) {
  return typeof str === "string" && str === "";
}

console.log(isEmptyString("")); // true
console.log(isEmptyString("Hello")); // false

// EXERCISE 2
function usdToGel(priceUSD, exchangeRate) {
  return priceUSD * exchangeRate;
}

console.log(usdToGel(10, 2.7)); // 31

// EXERCISE 3
function getCountryByCurrency(code) {
  if (code === "USD") {
    return "United States";
  } else if (code === "EUR") {
    return "European Union";
  } else if (code === "GEL") {
    return "Georgia";
  } else {
    return "Unknown currency";
  }
}
console.log(getCountryByCurrency("USD")); // United States
console.log(getCountryByCurrency("EUR")); // European Union
console.log(getCountryByCurrency("GEL")); // Georgia
console.log(getCountryByCurrency("JPY")); // Unknown currency

// EXERCISE 4
function toLowercase(str) {
  return str.toLowerCase();
}
console.log(toLowercase("MY NAME IS TAMARI")); // my name is tamari

// EXERCISE 5
function filterGreaterThan100(numbers) {
  return numbers.filter(function (num) {
    return num > 100;
  });
}

console.log(filterGreaterThan100([50, 120, 300, 80, 101]));
// შედეგი: [120, 300, 101]

// EXERCISE 6
function getCheapestProduct(products) {
  if (!products || products.length === 0) {
    return null; // თუ მასივი ცარიელია ან არ არის გადაცემული
  }

  let cheapest = products[0]; // ვაყენებთ პირველ ელემენტს თავდაპირველ უმცირესად

  for (let i = 1; i < products.length; i++) {
    if (products[i].price < cheapest.price) {
      cheapest = products[i];
    }
  }

  return cheapest;
}

// გამოყენება:
import { data } from "./data.js";

const cheapestProduct = getCheapestProduct(data.products);
console.log(cheapestProduct);

// შედეგი: { name: "Product C", price: 50 }

// EXERCISE 7
function findById(array, idToFind) {
  return array.find((item) => item.id === idToFind);
}

const products = [
  { id: "101", name: "Laptop" },
  { id: "102", name: "Phone" },
  { id: "103", name: "Tablet" },
];

console.log(findById(products, "102"));
s;
// შედეგი: { id: "102", name: "Phone" }

console.log(findById(products, "999"));
// შედეგი: undefined
