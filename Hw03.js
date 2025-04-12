// 1. Create variables and combine them into an introduction sentence
let myName = "Samuel";
let myAge = 18;
let myNationality = "Nigerian";

let introduction = "Hi, my name is " + myName + ", I am " + myAge + " years old, and I am " + myNationality + ".";
console.log(introduction);


// 2. Favorite quote or lyric, convert to UPPERCASE and lowercase
let favoriteQuote = "You don’t have to understand. You just have to have faith.";
let upperCaseQuote = favoriteQuote.toUpperCase();
let lowerCaseQuote = favoriteQuote.toLowerCase();

console.log("Uppercase: " + upperCaseQuote);
console.log("Lowercase: " + lowerCaseQuote);


// 3. Reverse a word and log it
let word = "cheesecake";
let reversedWord = word.split('').reverse().join('');
console.log("Reversed word: " + reversedWord);


// 4. Store the price of 3 items, calculate the total, and display it
let price1 = 15.99;
let price2 = 8.50;
let price3 = 12.00;

let totalPrice = price1 + price2 + price3;
console.log("Total price of all items: ₦" + totalPrice.toFixed(2));


// 5. Find the average of 5 test scores
let score1 = 78;
let score2 = 85;
let score3 = 90;
let score4 = 88;
let score5 = 92;

let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
console.log("Average test score: " + averageScore);


// 6. Array of 5 favorite foods and display first + last
let favoriteFoods = ["jollof rice", "pizza", "suya", "fried plantain", "ice cream"];
console.log("First food: " + favoriteFoods[0]);
console.log("Last food: " + favoriteFoods[favoriteFoods.length - 1]);


// 7. Add one food to the beginning and one to the end, then display the new list
favoriteFoods.unshift("akara"); // add to beginning
favoriteFoods.push("pounded yam"); // add to end

console.log("Updated food list:", favoriteFoods);


// 8, 9, 10. Three arrays with 10 student names each
let jssOne = ["Amina", "David", "Blessing", "Kelechi", "Uche", "Halima", "Michael", "Favour", "John", "Zainab"];
let jssTwo = ["Emeka", "Chisom", "Tolu", "Miracle", "Gbenga", "Fatima", "Samuel", "Janet", "Promise", "Deborah"];
let jssThree = ["Esther", "Ibrahim", "Chidera", "Peter", "Hope", "Olamide", "Maryam", "Kingsley", "Joy", "Joshua"];

console.log("JSS 1 Students:", jssOne);
console.log("JSS 2 Students:", jssTwo);
console.log("JSS 3 Students:", jssThree);
