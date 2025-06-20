// let x = 20;
// let y = x;
// y = 50;
// console.log(x);

// Output 20
// --------------------------

// console.log(a);
// var a = 5;

// Output: undefined

// ----------------------------

// const obj1 = { name: "Lucky" };
// const obj2 = obj1;

// obj2.name = "Tithy";

// console.log(obj1.name);
 
// Output: Tithy
// -----------------------

// function test() {
//   var x = 10;
// }
// console.log(x);

// Output: error
// ------------------------------------

// console.log(typeof null);

// Output: object

// ----------------------------------------
// const numbers = [1, 2, 3];
// numbers.push(4);
// console.log(numbers.length);

// Output: 4

// --------------------

// function outer() {
//   let name = "Lucky";
//   return function inner() {
//     return name;
//   };
// }

// const fn = outer();
// console.log(fn());

//  Output: Lucky


// const user = { name: "Lucky", age: 22 };
// const { name } = user;

// console.log(name);


// -------------------
// const person = {
//   name: "Tithy",
//   greet: () => {
//     return `Hello ${this.name}`;
//   }
// };

// console.log(person.greet());


// --------------
// async function getData() {
//   return "JS Hero";
// }

// getData().then(data => {
//   console.log(data);
// });


// ---------------
// const nums = [1, 2, 3];
// const squared = nums.map(n => n * n);

// console.log(squared);

// const nums = [1, 2, 2, 3, 4, 4];
// const unique = [...new Set(nums)];

// console.log(unique);


// function getData() {
//   return Promise.resolve("Ready!");
// }

// async function printData() {
//   const result = await getData();
//   console.log(result);
// }
// printData();


// -----------------------


