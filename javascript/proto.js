// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// console.log(parent);
// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child);
// console.log(child.hasOwnProperty("name"));
// console.log(child.name);
// console.log(child.hasOwnProperty("age"));
// console.log(child.age);
// console.log(child.hasOwnProperty("surname"));

// -----------------------------------------------------------------------------

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const audi = new Car("Audi", "Q3", 36000);
// const bmw = new Car("BMW", "X5", 58900);
// const nissan = new Car("Nissan", "Murano", 31700);
// // Change code above this line

// console.log(Car);
// console.log(audi);
// console.log(bmw);
// console.log(nissan);

// --------------------------------------------------------- 10

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// --------------------------------------------------------- 11
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value += str;
//     this.value = str + this.value;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ------------------------------------------------------------------- 12

// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }
// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// const bmw = new Car({ brand: "bmw", model: "X5", price: 58900 });
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });

// console.log(audi);
// console.log(bmw);
// console.log(nissan);

// --------------------------------------------------- 16

// class Car {
//   // Change code below this line
//   static = {
//     MAX_PRICE: 50000,
//   };
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//     if (this.#price < this.static.MAX_PRICE) {
//       this.#price = this.static.MAX_PRICE;
//     }
//   }
// Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ======================================================= 17
// class Car {
//   static MAX_PRICE = 50000;
//   static checkPrice(price) {
//     if (price > Car.MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//   // Change code below this line

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ==================================================== 20
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklistedEmails = [];

//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком
//   if (card === 7 || card === 8 || card === 9) {
//     count += 0;
//   } else if (
//     card === 2 ||
//     card === 3 ||
//     card === 4 ||
//     card === 5 ||
//     card === 6
//   ) {
//     count += 1;
//   } else if (
//     card === 10 ||
//     card === "J" ||
//     card === "Q" ||
//     card === "K" ||
//     card === "A"
//   ) {
//     count -= 1;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }

// Змініть код лише над цим рядком
// }

// console.log(cc(2));
// console.log(cc(3));
// console.log(cc(7));
// console.log(cc("K"));
// console.log(cc("A"));

// ===================================

// // // // потрібно створити функцію яка буде формувати чергу в магазині
// // // // 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// // // // 2 параметр це кількість кас
// // // // Повертає обєкт де ключ це номер касси, значення це час черги на касі
// // // // 12 + 2 + 15 = 29
// // // // 3 + 5 + 6 + 7 = 21
// // // // { 1 : 29, 2 : 21}

function fn(buyers, cases) {
  const obj = {};
  for (let i = 1; i <= cases; i++) {
    obj[i] = 0;
  }
  const time = buyers.reduce((acc, elem) => {
    const values = Object.values(acc);
    const minValue = Math.min(...values);
    const current = values.indexOf(minValue) + 1;
    acc[current] += elem;
    return acc;
  }, obj);
  console.log(obj);
  return obj;
}
console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));

// ================================ // // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// // Not found
const people1 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Alex"],
  },
];

const people2 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

// jhon
const people3 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

function findNarcys(arr) {
  const result = arr.filter((el) => !el.know.length);
  console.log(result);
  if (result.length !== 1) {
    console.log("Not found");
    return;
  }
  const narsis = result[0].name;
  console.log(narsis);
  const isNarsis = arr.every(
    (elem) => elem.know.includes(narsis) || elem.name === narsis
  );
  console.log(isNarsis);
  if (isNarsis) {
    console.log(narsis);
  }
  {
    console.log("Not found");
  }
}
console.log(findNarcys(people1));
console.log(findNarcys(people2));
console.log(findNarcys(people3));
