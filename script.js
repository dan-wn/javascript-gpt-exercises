// Exercise 1: Variable & Condition Thinking

const age = 18;
const hasID = true;

const isAdult = age >= 18;
const isVerified = hasID;

if (isAdult && isVerified) {
  console.log("Allowed");
} 
else {
  console.log("Not Allowed");
}

//Exercise 2: Truthy & Falsy Values

const email = "juandelacruz@gmail.com";
const hasEmail = email;

if (hasEmail) {
  console.log("Email provided");
} 
else {
  console.log("Email is required");
}

//Exercise 3: Truthy/Falsy to Boolean

const username = "";
const hasUsername = !!username;
if (hasUsername) {
 console.log("Username exists");
}
else {
 console.log("No username");
}

//Exercise 4: Function

const LEGAL_AGE = 18

function canEnter (age = 0, hasValidID = false) {
 return age >= LEGAL_AGE && hasValidID;
}

canEnter (18, true);

// Exercise 5: Logical Operators & Short-Circuit Evaluation
function getUserStatus (isLoggedIn, isAdmin) {
  return isLoggedIn && isAdmin ? "Admin" : isLoggedIn && !isAdmin ? "Customer" : "Guest";
}

getUserStatus(true, true);

// Exercise 6: Basic Counting 
for (let i = 0; i <= 4; i++) {
  console.log (i);
}

// Exercise 7: Start & End Control
for (let i = 5; i >= 1; i--) {
  console.log (i);
}

//Exercise 8: Skip Values (Step Size)
for (let i = 0; i <= 10; i += 2) {
  console.log (i);
}

//Exercise 9: Conditional Logic Inside Loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log (i);
}

//Exercise 10: Loop Control
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log (i);
}

// Exercise 1: Basic loop read
const fruits = ["apple", "banana", "orange"];

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Exercise 2: Index awareness
const numbers = [10, 20, 30, 40];

for (i = 0; i < numbers.length; i++) {
  console.log(`${i} ${numbers[i]}`);
}

//Exercise 3: Manual last element 
const cities = ["Manila", "Tokyo", "Seoul"];
for (i = 2; i < cities.length; i++) {
  console.log (cities[i]);
}

//Exercise 4: Compare with at()
const scores = [85, 90, 95];
for (i = 2; i < cities.length; i++) {
  console.log (scores[i]);
  console.log (scores.at(-1));
}

//Exercise 5: Empty the array 
const stack = ["a", "b", "c"];
for (i = 0; i < stack.length; i++) {
  console.log (stack.pop());
}

//.map method exercises

// Exercise 1: Double the numbers 
const num = [2, 4, 6, 8];
const doubleNum = num.map(nums => nums * 2);
console.log(doubleNum); //returns 4, 8, 12, 16
console.log(num); //return original array

//Exercise 2: Convert to strings
const numberz = [1, 2, 3];
const numToString = numberz.map(num => num.toString());
console.log(numToString);
console.log(numberz);

//Exercise 3: Add "Mr." to names
const names = ["Dan", "Leigh", "Dang"];
const namesWithMr = names.map(namee => "Mr. " + namee );
console.log(namesWithMr);
console.log(names);

//Exercise 4: Extract property
const products = [
  { name: "Laptop", price: 1000},
  { name: "Phone", price: 500}
];

const returnName = products.map(namez => namez.name);
console.log(returnName);

//Exercise 5: Transform objects 
const users = [
  { name: "Dan", age: 25 },
  { name: "Alex", age: 30}
];

const transformUser = users.map(user => { 
  return {
    name: user.name,
    age: user.age + 1
  }
}
)
console.log(transformUser);
console.log(users);

/* 
Exercise: Add 1 to every number
const numbers = [1, 2, 3, 4];
const addOneToNumbers = numbers.map(num => num + 1);
console.log(addOneToNumbers);

Exercise: Triple the numbers
const tripleTheNumbers = numbers.map(num => num * 3);
console.log(tripleTheNumbers)

Exercise: Convert to booleans
const numToBooleans = numbers.map(num => Boolean(num));
console.log(numToBooleans);

Exercise: Uppercase all strings
const words = ["hello", "world", "odin"];
const wordsToUppercase = words.map(word => word.toUppercase());
console.log(wordsToUppercase);

Exercise: Add suffix
const wordsAddSuffix = words.map(word => word + "!");
console.log(wordsAddSuffix);

const getWordsLength = words.map(word => word.length);
console.log(getWordsLength);

const users = [
  { name: "Dan", age: 25 },
  { name: "Alex", age: 30 },
  { name: "Maria", age: 22 }
];

const getUsersName = users.map(user => user.name);
console.log(getUsersName);

const products = [ 
 { name: "Laptop", price: 1000},
 { name: "Phone", price: 500}
];

const addPriceToProduct = products.map(product => {
  return 
    {
    name: product.name, 
    price: product.price / 10 + product.price
    }
  });


const addPriceToProduct = products.map(product => {
  return 
    {
    name: product.name, 
    price: product.price / 10 + product.price
    }
  });

console.log(addPriceToProduct);

const users = [
  { firstName: "Dan", age: 25 },
  { firstName: "Alex", age: 30 }
];

const usersRenameProperty = users.map(user => {
  return {
    name: user.firstName,
    age: user.age
  }
  });
  
console.log(usersRenameProperty)
*/
