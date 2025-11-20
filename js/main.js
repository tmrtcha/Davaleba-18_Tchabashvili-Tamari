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
console.log(getCountryByCurrency("USD"));
console.log(getCountryByCurrency("EUR"));
console.log(getCountryByCurrency("GEL"));
console.log(getCountryByCurrency("JPY"));

// EXERCISE 4
function toLowercase(str) {
  return str.toLowerCase();
}
console.log(toLowercase("MY NAME IS TAMARI"));

// EXERCISE 5

function numbersGreaterThan100(numbers) {
  return numbers.filter((number) => number > 100);
}

// გამოყენების მაგალითი
let nums = [50, 150, 200, 75, 120];
resultFinal = numbersGreaterThan100(nums);
console.log(resultFinal); // [150, 200, 120]

// EXERCISE 6
// ფუნქცია, რომელიც იღებს products მასივს და აბრუნებს ყველაზე იაფ პროდუქტს
function getCheapestProduct(products) {
  if (!products || products.length === 0) return null;

  let cheapest = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price < cheapest.price) {
      cheapest = products[i];
    }
  }

  return cheapest;
}

const cheapestProduct = getCheapestProduct(data.products);
console.log(cheapestProduct);

// EXERCISE 7
// ფუნქცია იღებს ობიექტების მასივს და id-ს სტრინგად
function findById(array, id) {
  return array.find((item) => item.id.toString() === id);
}

const products = [
  { id: 1, name: "HP Notebook" },
  { id: 2, name: "MacBook Air" },
  { id: 3, name: "ASUS Vivobook" },
];

const result = findById(products, "2");
console.log(result); // { id: 2, name: "MacBook Air" }
