// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }
// ------------------------------- 2
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
// console.log(aptDescr);
// const aptPrice = apartment.price;
// console.log(aptPrice);
// const aptTags = apartment.tags;
// console.log(aptTags);

// const ownerName = apartment.owner.name;
// console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[2];
// console.log(lastTag);

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// ------------------------------------------ 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// console.log(keys);
// console.log(values);

// ---------------------------------------- 12

// function countProps(object) {
//   let propCount = 0;

//   // Change code below this line

//   for (key in object) {
//     propCount = Object.values(object).length;
//   }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ------------------------------------------------- 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// console.log(apartment);
// console.log(keys);
// console.log(values);

// ------------------------------------------ 14

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const arrayKeys = Object.keys(object);

//   propCount = arrayKeys.length;

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ------------------------------------------ масив однотипних об'єктів---17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
//   hexColors.push(color.hex);
// }
// for (let color of colors) {
//   rgbColors.push(color.rgb);
// }

// console.log(colors);
// console.log(hexColors);
// console.log(rgbColors);

// ----------------------------------- 18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     const values = Object.values(product);
//     console.log(values);
//     if (values.includes(productName)) {
//       return values[1];
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// ------------------------------ або правильніше цей варіант -----
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     console.log(product);
//     console.log(product.name);
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// --------------------------------------   19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const result = [];

//   for (let product of products) {
//     const keys = Object.keys(product);
//     // console.log(keys);
//     if (keys.includes(propName)) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// ------------------------------------------- 20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     const values = Object.values(product);
//     // console.log(values);

//     if (values.includes(productName)) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// ----------------------------------------------------- 22  ---деструктуризація
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   today,
//   tomorrow,
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday);
// console.log(today);
// console.log(tomorrow);
// console.log(icon);
// console.log(meanTemperature);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(forecast);
// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);

// ----------------------------------------------------     Патерн «Об'єкт налаштувань»

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   })
// );

// ---------------------------------------------------------   30

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   data = {
//     category,
//     priority,
//     ...data,
//     completed,
//   };

//   return data;
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));

// function add(...args) {
//   console.log(args);
//   let totalSum = 0;
//   for (const arg of args) {
//     totalSum += arg;
//   }

//   return totalSum;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// ----------------------------------    32
// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (let i = 1; i < args.length; i++) {
//     if (args[0] < args[i]) {
//       total += args[i];
//     }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 4));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// ---------------------------------------      33

// function findMatches(array, ...args) {
//   console.log(args);
//   const matches = [];
//   for (const arg of args) {
//     for (const value of array) {
//       if (value === arg) {
//         matches.push(arg);
//       }
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// -------------------------------------- 34 методи об'єкта  - коли в об'єкті прописуються функції

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf);
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// --------------------------------------------      35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     console.log(index);
//     this.books.splice(index, 1, newName);
//     return this.books;
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad);
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.getPotions);

// ------------------------------------------------ 40 (вирізати стерий елемент і вставити новий)

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const index = this.potions.indexOf(oldName);
//     const newArrayPotions = this.potions.splice(index, 1, newName);
//     return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// ------------------------------------------------ 41

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       const { name } = this.potions[i];
//       if (name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//   },
// };
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// ------------------------------------ задачі з МЕНТОРОМ!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ===  1

// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Lika`,
//     language: `html`,
//   },
//   {
//     name: `Anton`,
//     language: `css`,
//   },
//   {
//     name: `Andriy`,
//     language: `js`,
//   },
//   {
//     name: `Lika`,
//     language: `html`,
//   },
//   {
//     name: `Vova`,
//     language: `html`,
//   },
//   {
//     name: `Alina`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Alexandr`,
//     language: `html`,
//   },
//   {
//     name: `Taras`,
//     language: `css`,
//   },
//   {
//     name: `Ivan`,
//     language: `js`,
//   },
//   {
//     name: `Make`,
//     language: `html`,
//   },
// ];

// function takeArrayName(arrayStudents, language) {
//   const names = [];
//   for (const student of arrayStudents) {
//     if (student.language === language) {
//       names.push(student.name);
//     }
//   }
//   return names;
// }

// console.log(takeArrayName(students, `html`));
// console.log(takeArrayName(students, `js`));
// console.log(takeArrayName(students, `css`));

// =====   2
// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )
// const workers = [
//   {
//     name: "Alex",
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: "Dima",
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: "Oleg",
//     salary: 1500,
//     month: 36,
//   },
// ];

// function getSalary(arrayWorkers, nameWorker) {
//   for (let i = 0; i < arrayWorkers.length; i++) {
//     const worker = arrayWorkers[i];
//     if (worker.name === nameWorker) {
//       return (total = worker.salary * worker.month);
//     }
//   }
// }
// console.log(getSalary(workers, `Oleg`));
// console.log(getSalary(workers, `Alex`));
// console.log(getSalary(workers, `Dima`));

// ====    3;

// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
  {
    name: "Oleksii",
    books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
    age: 26,
  },
];

// function returnNamesUsers(arrayFriends, bookName) {
//   const userNames = [];
//   for (let i = 0; i < arrayFriends.length; i++) {
//     const friend = arrayFriends[i];
//     const valueBooks = Object.values(friend.books);
//     // console.log(valueBooks);
//     if (valueBooks.includes(bookName)) {
//       userNames.push(friend.name);
//     }
//   }
//   return userNames.join(",");
// }
// console.log(returnNamesUsers(friends, "Bible"));
// console.log(returnNamesUsers(friends, "Harry Potter"));
// console.log(returnNamesUsers(friends, "Romeo and Juliet"));

// 2 Порахувати весь вік юзерів, якщо у них є цей параметр

function returnNamesUsers(arrayFriends) {
  let total = 0;
  for (let i = 0; i < arrayFriends.length; i++) {
    if ("age" in arrayFriends[i]) {
      total += arrayFriends[i].age;
    }
  }
  return total;
}

console.log(returnNamesUsers(friends));
//  ===       4;

// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   creatArrayStudents(nameFacultet) {
//     const students = [];
//     for (const student of this[nameFacultet]) {
//       students.push(student.name);
//     }
//     return students;
//   },

//   addTotalPoints(nameFacultet) {
//     let totalPoints = 0;
//     for (const student of this[nameFacultet]) {
//       totalPoints += student.points;
//     }
//     return totalPoints;
//   },

//   returnGetBest() {
//     const keys = Object.keys(this);
//     console.log(keys);
//     let nameBestFacultet = ``;
//     let nameBestPoints = 0;
//     for (const key of keys) {
//       console.log(key);
//       if (Array.isArray(this[key])) {
//         console.log(this.addTotalPoints(key));
//         if (nameBestPoints < this.addTotalPoints(key)) {
//           nameBestFacultet = key;
//           nameBestPoints = this.addTotalPoints(key);
//         }
//       }
//     }
//     return nameBestFacultet;
//   },
// };

// console.log(hogvarts.creatArrayStudents(`griffindor`));
// console.log(hogvarts.creatArrayStudents(`sliserin`));
// console.log(hogvarts.addTotalPoints(`griffindor`));
// console.log(hogvarts.addTotalPoints(`sliserin`));
// console.log(hogvarts.returnGetBest());
