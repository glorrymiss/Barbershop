// ------------------------ МАСИВИ ARRAY----------------------------------------

// const clients = [`Roma`, `Ola`, `Sara`];
// for (let i = 0; i < clients.length; i++) {
//   console.log(clients[i]);
// }

// const names = [`Jana`, `jaruna`, `Jan`];
// for (const name of names) {
//   console.log(name);
// }

// const usernames = [`Roma`, `Ola`, `Sara`, `Jana`, `Yaruna`, `Jan`];
// const usernameToFind = `Yaruna`;
// let message;

// for (const username of usernames) {
//   console.log(username);

//   if (username === usernameToFind) {
//     message = `У списку є Яринка`;
//     break;
//   } else {
//     message = `Шукайте в інших списках`;
//   }
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i++) {
//   //   console.log(numbers[i]);

//   if (numbers[i] > threshold) {
//     console.log(`Це число ${numbers[i]} більше за поріг ${threshold}`);
//   } else {
//     continue;
//   }
// }

// const usernames = [`Roma`, `Ola`, `Sara`, `Jana`, `Yaruna`, `Jan`];
// console.log(usernames.includes(`Pavlo`));
// console.log(usernames.includes(`Yaruna`));

// const name = "Mango";
// console.log(name.split(""));

// const usernameFor = "Ola";
// console.log(usernameFor.split(""));

// const message = "JavaScript - це цікаво";
// console.log(message.split(" "));

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";

// const hasFruit = redFruits.includes(fruit)
//   ? console.log(`${fruit} is a red fruit!`)
//   : console.log(`${fruit} is not a red fruit!`);

// let someFruits = redFruits.splice(0, 3);
// console.log(redFruits);
// console.log(someFruits);

// redFruits.splice(1, 1, `apple`);
// console.log(redFruits);

// const oldClients = ["Ira", "Yura", "Poly"];
// const newClients = ["Yaryna", "Yuliia", "Andriy"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst);

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst);

// function includes(array, value) {
//   for (i = 0; i <= array.length - 1; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );

// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElements = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElements);

// function getExtremeElements(array) {

//   const first = array[0];
//   const last = array[array.length - 1];
//   const getExtremeElements = [first, last];
//   return getExtremeElements;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function add() {
//   let total = 0;
//   for (const argument of arguments) {
//     total += argument;
//   }
//   return total;
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5));

// function calcSum(numberOne, numberTwo) {
//   let result = 1;
//   for (let i = 0; i < numberTwo; i++) {
//     result *= numberOne;
//   }
//   return result;
// }
// console.log(calcSum(2, 3));

// function calculateEngravingPrice(message, pricePerWord) {
//   const newArray = message.split(" ");
//   console.log(newArray);
//   const calculateEngravingPrice = newArray.length * pricePerWord;
//   return calculateEngravingPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// function slugify(title) {
//   const array = title.split(" ");
//   const string = array.join("-");
//   const slugify = string.toLowerCase();
//   return slugify;
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//   const makeArray = firstArray.concat(secondArray);

//   if (makeArray.length > maxLength) {
//     const correctArray = makeArray.slice([0], [maxLength]);
//     return correctArray;
//   }
//   return makeArray;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// function calculateTotal(number) {
//   let total = 0;
//   for (i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// function findLongestWord(string) {
//   const words = string.split(" ");
//   console.log(words);

//   let longestWord = words[0];
//   for (const word of words) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));

// let styles = ["Джаз", "Блюз", "Джаз", "Блюз", "Джаз"];
// styles.push("Рок-н-рол");
// console.log(styles);
// console.log(styles.shift());
// console.log(styles.unshift("Реп", "Реггі"));
// for (i = 0; i <= styles.length - 1; i++) {
//   let mediaIndex = Math.round((styles.length - 1) / 2);
//   styles.splice([mediaIndex], 1, `Класика`);
// }
// console.log(styles);

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// function filterArray(numbers, value) {
//   const filterArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filterArray.push(number);
//     }
//   }
//   return filterArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit) ? true : false;
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// function getCommonElements(array1, array2) {
//   const getCommonElements = [];
//   for (i = 0; i <= array1.length - 1; i++) {
//     if (array2.includes(array1[i])) {
//       getCommonElements.push(array1[i]);
//     }
//   }

//   return getCommonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// function getEvenNumbers(start, end) {
//   const getEvenNumbers = [];
//   for (let i = start; i <= end; i++) {
//     if (!(i % 2)) {
//       getEvenNumbers.push(i);
//     }
//   }
//   return getEvenNumbers;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

function includes(array, value) {
  for (let element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
);
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
