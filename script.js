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


