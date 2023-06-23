// console.log(10 + 5);

// const username = "Yuliia";
// let numberRoom = "8";
// let greeting = `Dear ${username} welcome in room ${numberRoom}`;
// console.log(greeting);

// let name = "Ochota";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// const nameProject = "modal.scss";
// let newNameProject = nameProject.replace(".scss", ".min.scss");
// let secondNewNameProject = nameProject.replaceAll(
//   "modal.scss",
//   "miss.min.scss"
// );
// console.log(newNameProject);
// console.log(newNameProject.length);
// console.log(newNameProject.toUpperCase());
// console.log(secondNewNameProject);

// const productName = `Repair droid`;
// console.log(productName.slice(0, 6));

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost);

// let cash;
// const userSename = "Petro";

// if (userSename === "Pavlo") {
//   cash = 100;
// } else if (userSename === "Yuliia") {
//   cash = 50;
// } else if (userSename === "Petro") {
//   cash = 200;
// } else {
//   console.log("Not your day");
// }
// console.log(cash);

// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// console.log(pricePerItem);

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair Droid";
// pricePerItem = 3500;

// console.log(productName);
// console.log(pricePerItem);

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(totalPrice);
// console.log(message);

// function sayHi() {
//   console.log("Hello, this is my first function!");
// }

// sayHi();

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   let totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// }
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// const num1 = 10;
// const num2 = 18;
// let biggestNumber;

// biggestNumber = num1 > num2 ? num1 : num2;

// console.log(biggestNumber);

// if (num1 > num2) {
//   biggestNumber = num1;
// } else {
//   biggestNumber = num2;
// }
// console.log(`Це найбільше число ${biggestNumber}`);

// let age = 17;

// switch (age) {
//   case 17:
//     console.log(`Child`);
//     break;

//   case 35:
//     console.log(`Mama`);
//     break;

//   default:
//     console.log(`Human`);
//     break;
// }

// function isAdult(age) {
//   const passed =
//     age >= 18 ? console.log(`Є повнолітнім`) : console.log(`Є не повнолітнім`);

//   return passed;
// }

// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// const SAVED_PASSWORD = "jqueryismyjam";

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   isMatch = SAVED_PASSWORD === password;
//   return isMatch;
// }

// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }
//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(14));
// console.log(checkAge(8));
// console.log(checkAge(34));

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   const totalPrice = pricePerDroid * orderedQuantity;
//   const totalCredits = customerCredits - totalPrice;
//   let message;

//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${totalCredits} credits left`;
//   }
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// const number = 100;
// for (i = 0; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(`FizzBuzz`);
//   } else if (i % 5 === 0) {
//     console.log(`Buzz`);
//   } else if (i % 3 === 0) {
//     console.log(`Fizz`);
//   } else {
//     console.log(i);
//   }
// }

// function getDiscount(totalSpent) {
//   const GOLD_DISCOUNT = 0.1;
//   const SILVER_DISCOUNT = 0.05;
//   const BRONZE_DISCOUNT = 0.02;
//   const BASE_DISCOUNT = 0;

//   let discont;

//   if (totalSpent >= 50000) {
//     discont = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discont = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discont = BRONZE_DISCOUNT;
//   } else {
//     discont = BASE_DISCOUNT;
//   }
//   return discont;
// }
// console.log(getDiscount(137000));

// function checkStorage(available, ordered) {
//   let message;

//   message =
//     ordered > available
//       ? `Not enough goods in stock!`
//       : `The order is accepted, our manager will contact you`;

//   return message;
// }

// console.log(checkStorage(200, 20));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }
//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// function getShippingCost(country) {
//   const priceChina = 100;
//   const priceChile = 250;
//   const priceAustralia = 170;
//   const priceJamaica = 120;
//   let message;
//   switch (country) {
//     case "China":
//       message = `Shipping to ${country} will cost ${priceChina} credits`;
//       break;

//     case "Chile":
//       message = `Shipping to ${country} will cost ${priceChile} credits`;
//       break;

//     case "Australia":
//       message = `Shipping to ${country} will cost ${priceAustralia} credits`;

//       break;

//     case "Jamaica":
//       message = `Shipping to ${country} will cost ${priceJamaica} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Germany"));

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];

// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + `...`;
//   } else {
//     result = message;
//   }
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(input);
//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

// function checkForSpam(message) {
//   let result;
//   const normalizedMessage = message.toLowerCase();

//   result =
//     normalizedMessage.includes("spam") || normalizedMessage.includes("sale");
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

// ЗАДАЧІ ВІД РЕПЕТИ - 1

// let balance = 10000;
// let payment = 2000;

// console.log(
//   `Вартість покупки становить ${payment} грн. Перевіряємо загальні кошти на балансу`
// );

// if (payment <= balance) {
//   balance -= payment;
//   console.log(`На рахунку залишилось ${balance} гривень`);
// } else {
//   console.log(`Недостатньо коштів на рахунку`);
// }

// console.log(`Операція завершена`);

//  REPETA - 2

// let totalSpent = 2000;
// let pay = 500;
// let discont = 0;

// if (totalSpent >= 5000) {
//   discont = 0.1;
//   console.log(`Ви Золотий партнер, ваша знижка - ${discont * 100}%`);
// } else if (totalSpent < 5000 && totalSpent >= 1000) {
//   discont = 0.05;
//   console.log(`Ви Срібний партнер, ваша знижка - ${discont * 100}%`);
// } else if (totalSpent < 1000 && totalSpent >= 100) {
//   discont = 0.02;
//   console.log(`Ви Бронзовий партнер, ваша знижка - ${discont * 100}%`);
// } else {
//   discont = 0;
//   console.log(`Ви не є партнером, ваша знижка ${discont}%`);
// }
// pay = pay - pay * discont;
// console.log(
//   `Оформляємо замовлення на ${pay}грн із знижкою - ${discont * 100}%`
// );

// totalSpent += pay;
// console.log(`Загальні розтрати ${totalSpent}грн`);

// Робимо імітацію логіна юзера і визначаємо до якої групи він відноситься
// В перший prompt() юзер вводить своє імя, в 2 prompt() вводить свій вік
// Якщо юзер молодший 18 років виводемо стрінгу `User ${name} has been added to the children group
// Якщо юзеу 18 років і більше виводемо стрінгу `User ${name} has been added to the adult group

// const username = prompt(`Enter your name`);
// const age = Number(prompt(`Enter your age`));

// console.log(username);
// console.log(age);

// if (age < 18) {
//   console.log(`User ${username} has been added to the children group`);
// } else {
//   console.log(`User ${username} has been added to the adult group`);
// }

// const depth = 42;
// const daySpeed = 7;
// const nightSpeed = 2;
// let days = 0;
// let distance = 0;

// while (distance < depth) {
//   distance += daySpeed;
//   days -= 1;
//   if (distance < depth) {
//     distance -= nightSpeed;
//   }
// }

// console.log(days);

// Дано рядок, що складається із символів, наприклад, 'abcde'.  ------------------- ЗАДАЧА
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'

// const value = "abcde";
// !value.indexOf(`a`) ? console.log(`так`) : console.log(`ні`);

// // або
// value[0] === `a` ? console.log(`так`) : console.log(`ні`);
// //або
// value.startsWith(`a`) ? console.log(`так`) : console.log(`ні`);

// При завантаженні сторінки користувачеві пропонується
//В prompt ввести число. Введення додається до значення змінної total.
//Операція введення числа триває до того часу,
//Поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів не потрібно.

// let total = 0;
// let flag = false;

// do {
//   const number = Number(prompt());
//   if (number) {
//     flag = true;
//     total += number;
//   } else {
//     flag = false;
//   }
// } while (flag);

// console.log(total);
