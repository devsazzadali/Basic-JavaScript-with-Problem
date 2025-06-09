// // 1
// // নিচের ফাংশনে typeof ব্যবহার করে চেক করো ইনপুটটা স্ট্রিং কিনা।
// function isString(input) {
//   const isStr = typeof input === 'string' ? `isString: ${input}` : `${input} not string, type: ${typeof input}`;
//   console.log(isStr);
// }

// isString('hello');

// // 2

// // একটি সংখ্যা ইনপুট নিয়ে বলো এটা Even না Odd
// function isEvenOrOdd(num) {
//   let numbers = num % 2 === 0? 'Even' : 'odd';
//   console.log(numbers);
// }

// isEvenOrOdd(10);

// // 3

// // নিচের object থেকে পুরো নাম বের করে রিটার্ন করো
// // const person = { firstName: "Ali", lastName: "Khan" };
// // function getFullName(obj) {
// //    return `${person.firstName} ${person.lastName}`
// // }

// // console.log(getFullName(person));


// 4 confuced  // second Time Clear
// const nums = [5, 88, 4, 32, 100];
// function findMax(arr) {
//   let max = arr[0];
//   arr.forEach(num => {
//     if(num > max){
//       max = num;
//     }
//   });
//   return max;
//   };
// const total = findMax(nums);
// console.log(total);

// 5
// // "hello" → "olleh"
// function reverseString(str) {
//   const reverses = str.split('').reverse().join('');
//   return reverses;
// }

// console.log(reverseString('Hello'))


// 6
// function countVowels(str) {
//   let count = 0;
//   const vowelWord = "aeiou";
//   for(let letter of str.toLowerCase()){
    
//     if(vowelWord.includes(letter)){
//       count ++
//     }};
//     return count;
//   }
//   console.log(countVowels('Tithy is my life line, I realy love to you, My name is Lucky'))

 
// 7

// function sumArray(arr) {
//   // use reduce
//   const sum = arr.reduce((curren, nextVal) =>{
//     return curren + nextVal;
//   });
//   return sum;
  
// }

// console.log(sumArray([1,3,5,6,5,7,4,3]))


// // 8
// function removeDuplicates(arr) {
//   return [...new Set(arr)];   
// }

// console.log(removeDuplicates([1,4,6,5,3,6,8,4,5]));

//  9

// function checkResult(result){
//   if(typeof result !== 'number' || isNaN(result)){
//     return 'Must be Number'
//   }

//   if(result >= 80 && result <= 100 ){
//     return 'A+'
//   }else if(result >= 69 && result <= 79){
//     return 'A-'
//   }else if(result >= 59 && result <= 69){
//     return 'A'
//   }else if(result >= 49 && result <= 59){
//     return 'B'
//   }else if(result >= 33 && result <= 49){
//     return 'Good'
//   }else{
//     return 'Fail'
//   }
// }

// console.log(checkResult(32));

// confuced
// const showRes = checkResult(33);
// document.getElementById("demo").innerHTML = showRes;

// 10 helpnwith Google
// function isPalindrome(str) {
//   // const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   // return cleanedStr === cleanedStr.split('').reverse().join('');
//   const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// console.log(isPalindrome('Tithy is my GF'))

// 11
// confuced but help with deepseek , One time see
// 3 এর multiple → Fizz, 5 এর multiple → Buzz, 3 ও 5 দুইটাই → FizzBuzz
// function fizzBuzz(num){
//   if(num % 15 === 0) return 'FizzBuzz';
//   if(num  % 3 === 0) return 'Fizz';
//   if(num % 5 === 0) return 'Buzz';
//   return num.toString();
// }
// console.log(fizzBuzz(57))

// 12 some confuce please explain in bangla

// function countCharecters(word){
//   const result = {};

//   for(const char of word){
//     result[char] = (result[char] || 0) + 1;
//   }
//   return result;
// }

// console.log(countCharecters('Tithy I loving you'));

// // 13
// // input: 123 → output: 6
// function sumDigits(nums) {
//     const sum = nums.reduce((current, next) => current + next, 0);
//     return sum;
// }
// console.log(sumDigits([1,2,3]))



14 
function factorial(n) {
if(typeof n !== 'number' || n < 0) return 'Invalid Input';

let result = 1;

for(let i = 2; i <= n; i++){
  result*= i;
}
return result;

}

console.log(factorial([89,65,]))
 
// 15 confuced 
 // C to F formula: (C * 9/5) + 32






// // 16

// function isValidNumber(input) {
//   // return true if number, false otherwise
//   if(typeof input === 'number')return true;
//   return false;
  
// }

// console.log(isValidNumber());


// // 17

// const add = (a, b) => {
//   return a + b;
// };

// const result = add(5, 2);
// console.log(result);



// // 18 

// const student = {
//   name: "Lucky",
//   greet() {
//     const greating = `Hello ${this.name}`
//     return greating;
//   }
// };

// console.log(student.greet());

// // 19
// // What happens here?
// console.log(x); //undefined;
// var x = 5; 

// //20

// var global = "I am global";

// function checkScope() {
//   let local = "I am local";
//   const funScope = "I'm a Function Scope";
//   console.log(global); // access
//   console.log(local); //access
//   console.log(funScope); //access

// }

//   console.log(global); // access
//   // console.log(local); // can't access: I'ts a local scope
//   //   console.log(funScope); // can't access: I'ts a function scope
