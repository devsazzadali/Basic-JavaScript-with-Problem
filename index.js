
// switch(Dream){
//     case 'Doctor' :
//     break;
//     case 'Engineer' :
//         console.log('Yes, This is my dream');
//         break;
//     default :
//     console.log('as your wish')
// }

// for (let i = 1; i <= 10; i ++){
//     console.log('Sajjad')
// }

// let i = 1;
// while ( i <= 5 ){
//     console.log('Runnig...')
//     i++
// }

// let i = 2;

// do{
// console.log('On times')
// i++
// }while( i <= 10);


// Remember


// while( i <= 10){
//     console.log("While");
//     i++
// }

// for(let i = 2; i <= 5; i++ ){
//     console.log("hello")
// }


// // HomeWork


// let money = 20;

// while(money >= 2){
//     console.log( money);
//     money--
// }


// let text = 'Hello World, Hello Tumi?';

// let result = text.replaceAll("Hello", " Good Bye")
// let upperLower = text.toLowerCase()

// console.log(upperLower)

// let first = 'Lucky';
// let last = 'seif';

// let full = first.concat(" ", last)

// console.log(full)

// let text = '  Hello World '
// let final = text.trim()

// console.log(final)

// let num = 'Sajjad';

// let final = num.padStart(10, "Ali ")
// console.log(final)

// let text = "Hello";
// console.log(text.charAt(0));


// let text = "a|b|c|d|e|f|g";

// let arr = text.split("|");

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// let loves  = "I Love JavaScript";

// let result = loves.startsWith("I");
// console.log(result)

// HomeWOrk Problem 

// function dataType(data){
//     console.log( typeof data);
// }

// dataType(123); //number
// dataType("str"); //tring
// dataType(true); //bolean
// dataType(Symbol()); //Symbol


// //  Problem 2 

// function getLength(checkLength){
//     console.log(checkLength.length);
// }

// getLength('JavaScript');

// // 3

// function firstCha(text){
//     console.log(text.charAt(0));
// }

// firstCha('Bangladesh');

// // 4

// function replaceword(reple){
//     console.log(reple.replace('Hi', 'Hello'));
// }

// replaceword('Hi GPT My Freind, I Love You,');


// // 5


// function checkWord(text, word){
//     console.log(text.search(word));
// };

// checkWord("I Love JS", 'Love');
// checkWord("I love Python", 'I');

// confuced //

// function capitalize(param){
//     let firstIndex = param.slice(0,1).toUpperCase();
//     let lastIndex = param.slice(1).toLowerCase();
//     let final = firstIndex + lastIndex;

//     console.log(final);
// }

// capitalize("hello");


// // 

// function countWords(param){
//     console.log(param.split(" ").length);
// }
// countWords("I love You Ma")


// //  


// // 🔹 1. Check Data Types
// function dataType(data) {
// console.log("Data Type:", typeof data);
// }
// dataType(123);
// dataType("str");
// dataType(true);
// dataType(Symbol());

// // 🔹 2. Get String Length
// function getLength(checkLength) {
// console.log("String Length:", checkLength.length);
// }
// getLength('JavaScript');

// 🔹 3. First Character (index 1)
// function firstCha(text) {
// console.log("Character at index 1:", text.charAt(1));
// }
// firstCha('Bangladesh');

// // 🔹 4. Replace Word (fix spelling mistake: replece → replace)
// function replaceword(reple) {
// let final = reple.replace('Hi', 'Hello');
// console.log("After Replace:", final);
// }
// replaceword('Hi GPT My Friend, I Love You');

// // 🔹 5. Search Word (fix spelling: serch → search)
// function checkWord(text) {
// console.log("Search 'JS' index:", text.search("JS"));
// }
// checkWord("I Love JS");
// checkWord("I love Python");

// // 🔹 6. Capitalize First Letter (fix spelling toLowerCase)
// function capitalize(param) {
// let firstIndex = param.slice(0, 1).toUpperCase();
// let lastIndex = param.slice(1).toLowerCase();
// let final = firstIndex + lastIndex;
// console.log("Capitalized:", final);
// }
// capitalize("hello tmi");

// // 🔹 7. Count Words
// function countWords(param) {
// let word = param.split(" ");
// console.log("Word Count:", word.length);
// }
// countWords("I love You Ma");

// day 2



// /* 📌 Problem 1:
// একটা function বানাও যেটা কোনো দশমিক সংখ্যা ইনপুট হিসেবে নিলে তার দশমিকের পর 2 ঘর রাখবে।*/

// function problemOne(param){
//     console.log(param.toFixed(2));
// }
// problemOne(13.7657654)

// /*📌 Problem 2:
// একটা function বানাও যেটা string হিসেবে একটা সংখ্যা নিবে, parse করে Number return করবে। যদি NaN হয়, তাহলে "Invalid Number" বলবে।*/

// function problemTwo(param){
//     let number = parseInt(param);
//     if( number == NaN ){
//         console.log("Invalid Number")
//     }else{
//         console.log(number);
//     }
// };
// problemTwo("678390")


// confuced
// /*📌 Problem 3:
// একটা function বানাও যেটা Infinity, -Infinity, NaN চেক করে বলে "Invalid input" কিনা। */
// // sorry,



// //////////////////////////

// // Homework:

// //  Number এবং BigInt এর মধ্যে পার্থক্য লিখো
// // ans: number onnk gulo thaklew 15 upore thekbe na,  BigInt 15 tar upore hole last a n add hobe

// //  Number Methods-এর ৫টা উদাহরণ নিজে করো
// // toFixed()
// // parseInt()
// // parseFloat()
// // isNaN()
// // Number.MMX_VALUE()

// function problemThree(param){
// if (param === Infinity || param === -Infinity || isNaN(param)) {
// console.log("Invalid input");
// } else {
// console.log("Valid input:", param);
// }
// }
// problemThree(Infinity); // Invalid
// problemThree(-Infinity); // Invalid
// problemThree(NaN); // Invalid
// problemThree(123); // Valid


// function problemThree(param){
//     if( param === Infinity || param === -Infinity || isNaN(param)){
//         console.log("Invalid Input");
//     }else {
//         console.log(param);
//     }
// }

// problemThree(Infinity); // Invalid
// problemThree(-Infinity); // Invalid
// problemThree(NaN); // Invalid
// problemThree(123); // Valid


// // homework

// let gf = ["Tania", "Bristy", "Tithy", "Mukta", "Anni"];


// console.log("This is my vabi: ", gf[0]);
// console.log("This is my nani: ", gf[1]);
// console.log("This is my crush: ", gf[2]);
// console.log("This is my biyan: ", gf[3]);
// console.log("This is my sister: ", gf[4])



// let tasks = ["Wake Up", "Pray", "Code", "Sleep"];

// // তোমার নিজের মতো ৩টা কাজ push করো: 
// tasks.push('metting', 'prayer', 'reading quran')
// // তারপর প্রথম item shift করে ফেলো
// tasks.shift();
// // তারপর সবগুলোকে " | " দিয়ে join করো
// let final =  tasks.join(" | ")
// // সবশেষে console-এ result দেখাও
// console.log(tasks)
// console.log(final)





// let favFoods = ["Biryani", "Burger", "Pizza", "Kacchi"];

// // 1️⃣ "Pizza" কোন index-এ আছে সেটা খুঁজে বের করো (indexOf)
// let pizza = favFoods.indexOf("Pizza");

// // 2️⃣ "Fuchka" এই item টা আছে কিনা check করো (includes)
// let fuchka = favFoods.includes("Fuchka");

// // 3️⃣ তোমার console-এ দুইটার result print করো
// console.log(pizza); // 2
// console.log(fuchka); //false


// let myMarks = [88, 45, 92, 30, 100, 75];

// // 1️⃣ বড় থেকে ছোট (descending) সাজাও
// myMarks.sort((a, b )=>{
//     return a - b;
// })

// // sorry for this, tell me batter way
// console.log(myMarks)
// // 2️⃣ ছোট থেকে বড় (ascending) সাজাও
// myMarks.sort(function(a, b){
//     return b - a;
// })
// // 3️⃣ দুইটাকেই console log করো
// console.log(myMarks)

// // extra work

// let great = ["X","C", "E", "Z", "B", "D", "A", "F", "G"]
// console.log(great.sort());




///////////////////////////////
// let todos = ["Pray", "Study", "Code", "Eat", "Sleep"];

// // 1️⃣ forEach দিয়ে console log করো: "I will: Pray" etc.
// todos.forEach(function(name, index){
//     console.log(`I will: ${name}`)
// });
// // 2️⃣ map দিয়ে সবগুলোর সাথে "- Done" যোগ করো 
//   let final =  todos.map(function(name){
//         return name + '- Done'
//     });
//     console.log(final);
// // 3️⃣ filter দিয়ে শুধু যেগুলা "Code", "Study" এগুলো বের করো
// let finals = todos.filter(function(name){
//     return name == "Code" || name == "Study";
// })
// console.log(finals);

// --------------------------------------------------------

// GPT--
// let nums = [10, 23, 55, 60, 90];

// // ✅ filter দিয়ে শুধু even number বের করো
// let evens = nums.filter(function(num){
//     return num % 2 === 0;
// });
// console.log("Even Numbers:", evens);

// // ✅ map দিয়ে সবগুলোকে 5 দিয়ে ভাগ করো
// let divided = nums.map(function(num){
//     return num / 5;
// });
// console.log("Divided by 5:", divided);



// let items = ["Pen", "Book", "Paper", "Pencil", "Eraser", "Notebook"];
// // 1️⃣ শুধু যেগুলোর length 5-এর বেশি, সেগুলো বের করো (filter)
// let final = items.filter(function(name){
//     return name.length > 5;
// })
// console.log(final);
// // 2️⃣ সবগুলো item-এর নাম uppercase করে দাও (map)
// let = result = items.map(function(name){
//     return name.toUpperCase();
// });
// console.log(result);


// // 3️⃣ forEach দিয়ে একটা motivational message দেখাও:
// items.forEach(function(name, index){
//     console.log(`Today I will use: ${name}`);
// })
// // Output: "Today I will use: PEN", etc.



// // 1️⃣ একটা const array declare করো with 5 items
// const  array = ["Dim", "Mim", "Mukta Akther", "Monira Moni", "Tithy"]
// // 2️⃣ তার 2 নম্বর item change করো
// array[0] = "Mim";
// array[1] = "Dim";
// // 3️⃣ নতুন ২টা item push করো
// array.push("Jarin", "Sirin")
// // 4️⃣ সব items log করো
// console.log(array)
// // Bonus: শুধু যেগুলা length > 6 সেগুলা filter করে print করো
// let final = array.filter(function(name){
//     return name.length > 6;
// });
// console.log(final);


// // 1. আজকের তারিখ বের করো
// console.log(new Date());
// // 2. "2025-05-17" string থেকে date object বানাও
// console.log(new  Date("2025-05-17"))
// // 3. তোমার জন্মদিনের long format date বানাও (e.g., "August 12, 2007")
// console.log(new Date("August 12, 2007"))


// let myBirthday = new Date("August 12, 2007");

// // 1. তোমার জন্ম সাল, মাস, তারিখ বের করো
// let year = myBirthday.getFullYear();
// let month = myBirthday.getMonth() + 1;
// let date = myBirthday.getDate();
// // 2. কোন দিন জন্মেছো (e.g., Sunday, Monday)
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let day = days[myBirthday.getDay()];
// // 3. জন্মদিনের ঘণ্টা, মিনিট, সেকেন্ড দেখাও
// let hours = myBirthday.getHours();
// let min = myBirthday.getMinutes();
// let second = myBirthday.getSeconds();
// // 4. সবগুলো console.log() করো
// console.log("Year:", year);
// console.log("Month:", month);
// console.log("Date:", date);
// console.log("Day:", day);
// console.log("Hour:", hours);
// console.log("Minute:", min);
// console.log("Second:", second);



// // Lucky's Birthday is on Sunday, 12/8/2007 at 00:00:00

// getMyBirthdayDetails("12/8/2007 00:00:00 " ) {
//    let date = getComputedStyle.getDate();
//    let month = getComputedStyle.getMonth() + 1;
//    let year = getComputedStyle.getFullYear();
//    let day = getComputedStyle.getDay();
//     let hours = getMyBirthdayDetails.getHours();
//     let min = getMyBirthdayDetails.getMinues()
//     let second = getMyBirthdayDetails.getSecond()
//     console.log(`Lucky's Birthday is on ${day}, ${date}/${month}/${year} at ${hours}:${min}:${second}`)
// };



// let myDate = new Date();


// myDate.setDate(12);
// myDate.setMonth(8);
// myDate.setFullYear(2007);


// console.log(myDate)


// let text = "";
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// if (someday > today) {
//   console.log("Today is before January 14, 2100.");
// } else {
//   console.log("Today is after January 14, 2100.");
// }



// console.log(Math.round(4.4))
// console.log(Math.ceil(3.1));
// console.log(Math.floor(4.9));
// console.log(Math.trunc(4.7))
// console.log(Math.pow(5, 3));
// console.log(Math.sqrt(10));



// console.log(Math.sqrt())

// console.log(Math.min(1,3,5,32,53))
// console.log(Math.max(4,654,543,5,456,7));

// console.log(Math.random());

// // 1. 9.7 কে round করো
// console.log(Math.round(9.7));
// // 2. 3.3 কে ceil করো
// console.log(Math.ceil(3.3));
// // 3. 5.8 কে floor করো
// console.log(Math.floor(5.8));
// // 4. 16 এর square root বের করো
// console.log(Math.sqrt(16));
// // 5. 4 এর power 3 বের করো
// console.log(Math.pow(4,3));
// // 6. 0 থেকে 10 এর মধ্যে একটা random সংখ্যা দেখাও
// // Who is batter
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.ceil(Math.random() * 10));
// console.log(Math.round(Math.random() * 10 ));



// console.log(Boolean(false));     
// console.log(Boolean(100));      
// console.log(Boolean("0"));      
// console.log(Boolean(null));     
// console.log(Boolean(undefined));


// let x = 15;
// let y = "15";
// let z = 10;

// console.log(x == y);    // ? true
// console.log(x === y);   // ? false
// console.log(x != z);    // ? true
// console.log(x > z);     // ? true
// console.log(x <= y);    // ? true



// let isStudent = true;
// let hasID = false;
// let age = 20;

// // 👉 যদি user student হয় AND তার ID থাকে, অথবা বয়স 18+ হয়,
// if((isStudent && hasID) || age >= 18){ 
//     // তাহলে console.log করো "Entry allowed"
//     console.log('Entry allowed')
// }else{ // না হলে "Access denied"
//     console.log('Access denied')
// };

// let isLoggedIn = true;
// // যদি user logged in থাকে → console এ দেখাবে: "Welcome back!"
// let result = isLoggedIn ? 'Welcome back!' : 'Please log in!';
// console.log(result);
// // না হলে → console এ দেখাবে: "Please log in!"


// let student = {
//   name: "Lucky",
//   age: 17,
//   class: "Dakhil"
// };

// for(let key in student){
//     console.log(key + " :" + student[key])
// }


// let student = {
//   name: "Rubel",
//   age: 17,
//   class: "Dakhil",
//   group: "Arts"
// };

// // 👉 এই object এ কয়টা property আছে সেটা console.log করো
// let count = 0;

// for(let length in student){
//     count++
// };

// console.log(count);

// একটি array আছে, তার সব values console.log করো using for...of

// let numbers = [10, 20, 30, 40];

// for(let num of numbers){
//   console.log(num)
// };


// // একটি string এর প্রতিটি character console.log করো using for...of

// let message = "Bangladesh";

// for(let letter of message){
//   console.log(letter)
// };


// 🎯 Challenge Time (Solve These):
// 🔥 Problem 1:
// একটা সংখ্যা 1 থেকে 20 পর্যন্ত while loop দিয়ে console করো।
// {
//   let n = 1;
// while(n <= 20){
  
// // Only even numbers (only 2, 4, 6...).
//   if( n % 2 === 0)
//     // sorry ata ami google theke serch kore ber krci...
//   console.log(n)
//   n++
// } 
//   }

// // 🔥 Problem 2:
// // একটা সংখ্যা ধরো n = 5
// let n = 5;
// while(n >= 1 ){
//   console.log(n)
//   n--
// };

// // Use while loop to calculate the factorial of n.// banglay bollee bujhtam




// 🎯 এখন তোমার জন্য ২টা চ্যালেঞ্জ:

// // ✅ চ্যালেঞ্জ ১:
// // do...while লুপ ব্যবহার করে 1 থেকে 10 পর্যন্ত সংখ্যা প্রিন্ট করো।
// let num = 1;
// do{
//   console.log(num)
//   num++
// }while(num <= 10);

// // ✅ চ্যালেঞ্জ ২:
// // do...while লুপ দিয়ে শুধু 2, 4, 6, 8, 10 (even সংখ্যা) প্রিন্ট করো।
// let i = 2;
// // help with deepseek 
// do{
//   console.log(i)
//   i+= 2
// }while(i <= 10)

//   //deepseek 



// Just experiment

// const arr = ['Ena', 'Mina', 'Tina'];
// arr.push('Lina');

// console.log(arr)


// Again back after 4 days left


// const fruits = ["Apple", "Banana", "Mango"];

// for(const fruit of fruits){
//     console.log(fruit)
// };

// const name = "Lucky";

// for (const letter of name) {
//   console.log(letter);
// }

// Asignment 

// // 👉 একটা array বানাও যেটার মধ্যে থাকবে তোমার পছন্দের ৫টা জিনিস (যেমন: খাবার, বই, সফটওয়্যার টুল, স্পোর্টস টিম ইত্যাদি)।
// const myLove = [ 'Biryani', 'VSCode', 'Messi', 'React', 'FreeCodeCamp' ];
// // তারপর for...of দিয়ে তাদের একটার পর একটা console এ দেখাও।
// for(const love of myLove){
//     console.log(`I love : ${love}`);
// }


// // 👉 তোমার নাম (string) কে for...of লুপ দিয়ে ঘুরিয়ে, কয়টা vowel আছে সেটা গুনো।


// let myName = 'Mehidi';
// let vowelCount = 0;

// for (let letter of myName.toLowerCase()){
//     if("aeiou".includes(letter)){
//         vowelCount++
//     }

// }

// console.log(`Total vowels in '${myName}' = ${vowelCount}`);



// // ✅ আজকের Assignment (2টা):
// // 1️⃣: Unique Numbers Only
// const nums = [1, 2, 2, 3, 4, 4, 5];
// // // 👉 একটা array দাও যেটাতে duplicate number আছে। 
// const numbers = new Set(nums);
// console.log(numbers);
// // তারপর Set দিয়ে unique number গুলো বের করো
// // // output: 1 2 3 4 5

// // ---------------Extra-------------------

// let mySet = new Set([6,8,7,6,5]);

// console.log(mySet);


// let crush = new Set(['Mukta', 'Mariya', 'Mim', 'Mim']);

// if(crush.has('Tithy')){
//     crush.add('Taniya');
//     crush.delete('Mim');
//     console.log(crush, crush.size);
// }else{
//       crush.clear();
//       console.log('Empty World😥 without Tithy');

// }





// // 2️⃣: My Set of Skills


// // 👉 তুমি যে স্কিলগুলো শিখছো তার একটা Set বানাও (HTML, CSS, JS, React ইত্যাদি)।
// let skills = new Set(['HTML', 'CSS', 'JS', 'React']);
// // তারপর check করো তুমি “Python” জানো কিনা (has() method দিয়ে)। যদি না জানো, add করে ফেলো!

// if(skills.has('Python')){
//     console.log(skills);
// }else{
//     skills.add('Python');
//     console.log('Updated skills :', skills);
// }







// 1️⃣: Student Info Map

// 👉 একটা Map বানাও যেখানে থাকবে:

// name: তোমার নাম

// age: তোমার বয়স

// hobby: তোমার প্রিয় কাজ

// const myMap = new Map();
// myMap.set('name', 'Lucky');
// myMap.set('age', 17,);
// myMap.set('hobby','codes' );


// // তারপর get() দিয়ে name আর hobby দেখাও।
// let name = myMap.get('name');
// let hobby = myMap.get('hobby');

// console.log(`Hi GPT My best friend🧑! My name is ${name}, and My hobby is ${hobby}`);



// // 2️⃣: Country Code Map
// // 👉 একটা map বানাও যেখানে country code (like: "BD", "US", "UK") আর country name থাকবে।
// let countryCode = new Map([
//     ["BD", "Bangladesh"],
//     [ "US", "United States"],
//     ["UK", "United Kingdom"],

// ]);


// // তারপর:
// // "BD" আছে কিনা check করো
// if(countryCode.has('BD')){
//    console.log(countryCode);
// }else{
//    // না থাকলে add করে ফেলো 
//    countryCode.set("BD", "Bangladesh");
// }
// // শেষে সব কিছুকে for...of দিয়ে দেখাও
//  for(let [code, country] of countryCode){
//     console.log(`${code} => ${country}`);
//  }








// ✅ আজকের Assignment (2টা):
// 1️⃣: Simple Login System
// 👉 নিচের মত একটা username আর password check করো:


// let username = "lucky";
// let password = 12345;


// let userNames = "lucky";
// let userPassword = 12345;
// if(username === userNames && password === userPassword){
// // ➡️ যদি username lucky আর password 12345 হয়, দেখাও —
// // Welcome back Lucky! 🧑‍💻
// console.log("Welcome back Lucky! 🧑‍💻")
// }else{
//    // না হলে দেখাও — Access Denied! ❌
//    console.log("Access Denied! ❌");
// }


// // 2️⃣: Even or Odd Checker
// // 👉 একটা number input নাও (variable দিয়ে)
// // Check করো সেটা even না odd?

// // js
// // Copy
// // Edit
// // let number = 7;
// // ➡️ Output:

// // arduino
// // Copy
// // Edit
// // "7 is odd" বা "8 is even"
// // 🎯 Bonus (যদি পারো):
// // 👉 আরেকটা check করো: যদি number 0 হয়, দেখাও — "Zero is neither even nor odd"

// // ✅ Assignment complete করলে code paste দে, আমি check করে দিবো।
// // 🔜 Next: Switch Statement বা Logical Operators নিয়ে যাবো।

// // লিখে ফেল — "Assignment complete" যখন ready! 😎🧠💻


// // 1️⃣ নিচের number কে string এ convert করো এবং type দেখাও
// let birthYear = 2007;

// let finaBirth = birthYear.toString();
// console.log(typeof finaBirth); 

// // 2️⃣ নিচের boolean value কে string করো
// let isLucky = true;
// isLucky.toString();

// // 3️⃣ নিচের array কে string বানাও
// let favLangs = ["HTML", "CSS", "JS", "Python"];
// favLangs.toString();

// // Extra
// let nothing = null;
// let noth = String(nothing);
// console.log(typeof noth);


// // 1️⃣ নিচের value গুলোকে number এ convert করো:
// let str1 = "100";
// let str2 = "hello";
// let bool1 = true;
// let strOne = Number(str1);
// let strTwo = Number(str2);
// let boolOne = Number(bool1);

// console.log(`${typeof str1} | ${typeof str2} | ${typeof bool1}`);

// // 2️⃣ নিচের number কে boolean এ convert করো:
// let num1 = 0;
// let num2 = 45;

// let  bollNum = Boolean(num1);
// let  bollNumTwo = Boolean(num2);

// console.log(`${typeof bollNum} | ${typeof bollNumTwo}`);


// // 3️⃣ নিচের সবকিছুকে string করো:
// let n1 = null;
// let n2 = undefined;
// let n3 = NaN;

// let strn1 = String(null);
// let strn2 = String(undefined);
// let strn3 = String(NaN);

// console.log(`${typeof strn1} | ${typeof strn2} | ${typeof strn3}`);



// // 4️⃣ Bonus: কোনটা Truthy আর কোনটা Falsy? Try using Boolean()
// let v1 = "";  //false
// let v2 = "Lucky"; //true
// let v3 = 0; //false
// let v4 = 1; //true
// let v5 = null; //false

// console.log(Boolean(v1));

// console.log(Boolean(v2));

// console.log(Boolean(v3));

// console.log(Boolean(v4));

// console.log(Boolean(v5));




// let book = ["JS", "React", "Node"];
// // এক লাইনে destructure করে প্রথম ও শেষটা console.log করো
// let [jsBo0k, reactBook, nodeBook] = book;
// console.log(jsBo0k);
// console.log(nodeBook);

// let student = {
//   name: "Rubel",
//   batch: "2025",
//   section: "A"
// };
// // destructuring করে শুধু section টা দেখাও

// let = {section} = student;

// console.log(section);


// // // ✅ একটা pattern বানাও যেটা শুধু “Lucky” লিখা আছে কি না চেক করে।
// let str = "Hi Lucky, Will you marry me? Lucky Please respect my proposal";
// let result = str.match(/Lucky/g);
// console.log(result)

// // ✅ আরেকটা pattern বানাও যেটা শুধু digit চেক করবে (1-9)।

// let str1 = "Lucky123 wants 5 mangoes and 1000 taka";
// let result1 = str.match(/\d+/g);
// console.log(result);  // 👉 ["123", "5", "1000"]




// 🎯 তোমার কাজ আজ:
// 
// // একটা custom throw করে error বানাও
// const myFunc =(a, b)=>{
//     if(b === 0){
//         throw new Error('Error Messege');
//     } return a / b
// }


// // try-catch দিয়ে ২টা bug ধরো

// try{
//    console.log( myFunc(5, 0))
// }catch(err){
//     console.log(err.message); // ✅ Correct spelling

// } 


// // ReferenceError এর example দেখাও

// let a = 10 + b;



// // ১️⃣ একটা function বানাও যেখানে একটা block scope variable declare করবা
// const myFunc = ()=>{
//     let funScope = "I'm Funtion Scope";
//     // Break
//     if(true){
//        let blockScope = "I'M BlockScope"
//     }
// }


// myFunc();
// // ২️⃣ তারপর function এর বাইরে সেটা access করে error ধরবা
// try{
//     console.log(funScope);
//     //Break
//     console.log(blockScope);
// }catch(err){
//     console.log(err.message);
// }

// {// undefined
// // console.log(msg);
// // var msg = "Hello!";
// }

// {//solve

// var msg = "Hello!";
// console.log(msg);
// }



// { //Reference error
// //     greet();
// // let greet = function() {
// //   console.log("Hey there!");
// // };
// }


// { //solve
    
// let greet = function() {
//   console.log("Hey there!");
// };
// greet();
// }


// {
//     "use strict";
// let a = 10;
// b = 20;
// console.log(a + b);

// // Error
// }'


// const student = {
//   name: "Lucky",
//   id: 101,
//   printInfo: function () {
//     setTimeout(() => {
//       console.log(`Student: ${this.name}, ID: ${this.id}`);
//     }, 1000);
//   }
// };

// student.printInfo();

// // 📌 Explain: কেন এখানে arrow function use করা ঠিক ছিল?
// // যেহেতু অ্যারো ফাংশনগুলো তাদের লেক্সিক্যাল স্কোপ থেকে this কে উত্তরাধিকার সূত্রে পায়,


// // 🧠 Assignment: Your Own Example!
// // 👉 তোমার কাজ:
// // একটা object বানাও (তোমার নাম, age, job থাকবে)।
// // তাতে showInfo() নামে একটা method থাকবে যেটা this use করে সব print করবে।

// const me = {
//     name: 'Lucky',
//     age: 17,
//     job: 'Web Developer',
//     showInfo: function(){
//         console.log(`Hello my name is ${this.name}, I'm ${this.age} years old, I working as a ${this.job}`)
//     }
// };

// me.showInfo();




// // ✅ Assignment Time 😎
// // 👉 তোর কাজ:

// // একটা Car class বানাবি।

// class Car{
//   // Constructor এ নিবে — brand আর model।
//   constructor(brand, model){
//     this.brand = brand;
//     this.model = model;
//   }
// // একটা method হবে showDetails() → যেটা বলবে:
//   showDetails(){
// // Brand: Toyota, Model: Corolla
//     console.log(`Brand: ${this.brand}, Model: ${this.model}`)
//   }

// }

// // তারপর ElectricCar নামে আরেকটা class বানাবি, যেটা Car class কে extend করবে।
//   class ElectricCar extends Car{
// // তার constructor এ নতুন property নিবি: batteryLife
//     constructor(brand, model, batteryLife){
//       super(brand, model);
//       this.batteryLife = batteryLife;
//       // একটা নতুন method বানাবি: showBattery() → বলবে:
//     }
//       showBattery(){
//         // Battery Life: 500km
//         console.log(`Battery Life:  ${this.batteryLife}km`)
//       }
//   }

//   const myCar = new Car('Toyota', 'Corolla');
//   const battery = new ElectricCar(500);

//   myCar.showDetails();
//   battery.showBattery()

 
// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

//   showDetails() {
//     console.log(`Brand: ${this.brand}, Model: ${this.model}`);
//   }
// }

// class ElectricCar extends Car {
//   constructor(brand, model, batteryLife) {
//     super(brand, model); // ✅ ঠিকমতো parent এর constructor কল করলাম
//     this.batteryLife = batteryLife;
//   }

//   showBattery() {
//     console.log(`Battery Life: ${this.batteryLife}km`);
//   }
// }

// // ✅ Now testing
// const myCar = new Car('Toyota', 'Corolla');
// const batteryCar = new ElectricCar('Tesla', 'Model 3', 500);

// myCar.showDetails();       // ✅ Brand: Toyota, Model: Corolla
// batteryCar.showDetails();  // ✅ Brand: Tesla, Model: Model 3
// batteryCar.showBattery();  // ✅ Battery Life: 500km



// class Mobile{
//   constructor(brand, model){
//     this.brand = brand;
//     this.model = model;
//   }
//   showDitails(){
//     console.log(`Our Brand: ${this.brand}, This is my phone model: ${this.model}`)
//   }
// }

// class SmartPhone extends Mobile{
//   constructor(brand, model, ourBrand){
    
//     super(brand, model)
//     this.ourBrand = ourBrand;
//   }
//   showPhone(){
//     console.log(`My phone ${this.ourBrand} : ${this.brand} => ${this.model}`)
//   }
// }


// const myPhone = new Mobile('Symphony', 'i32');
// const myBrand = new SmartPhone( 'Symphony', 'i32', 'Apple');
// myPhone.showDitails();
// myBrand.showPhone();



// import { add, multiPly } from "./math";


// console.log(add(6,7));
// console.log(multiPly(5,7));

// // 👉 Import করলাম
// import { add, multiply } from './math.js';

// console.log(add(5, 3));         // 8
// console.log(multiply(4, 2));    // 8


// import {  sayHi } from "./math.js";;
// console.log(sayHi('sazzad'));

// import great from "./math.js";

// console.log(`${great('Tithy')}`);



// // 🧪 Assignment Time:
// // নিচের object কে JSON string এ convert করো:

// const book = {
//   title: "JavaScript Magic",
//   author: "Lucky Seif",
//   year: 2025
// };

// const jsonFormat = JSON.stringify(book);
// console.log(`Json: ${jsonFormat}`);

// // তারপর JSON string থেকে object বানিয়ে title console এ দেখাও।
// const jsonToObj = JSON.parse(jsonFormat);
// console.log(`Book Title: ${jsonToObj.title}`);




// 🔥 Assignment:
// 👉 নিচের URL থেকে data ফেচ কর:

// https://jsonplaceholder.typicode.com/posts
// তাহলে:
 
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then( data=>{
  
// for(let i = 0; i < 3; i++){
//   // প্রথম ৩টা post এর title দেখাও।
//   const myData = data[i].title;
//   // console.log() দিয়ে show করো।
//   console.log(`Title: ${myData}`);

//   }
// } )








// 👨‍🔧 Assignment for You:
// 👉 কর:
//  console.log(typeof x) and console.log(typeof y) //দিয়ে check কর values কী type?
// যদি string detect করিস → "❌ Must be numbers" লিখে error show কর।

// const add = function(a,b){
//   if(typeof a !== 'number' || typeof b !== 'number'){
//     return '❌ Inputs must be numbers!';
//   } 
//   return a + b;
// }

// console.log(add(5, '4'))

// function divide(a, b){

// //   // আগে typeof চেক করবি!
// if(typeof a !== 'number' || typeof b !== 'number'){
//   return 'Error codes'
// }if(b === 0 ){
//     // যদি b = 0 হয়, তাহলে error দিবি
//     return 'error divitio by zero ';
//   }

//     // না হলে  return করবি
//     return a / b;
// }

// const result = divide(5, 5);

// if(typeof result === 'number'){
//   console.log(result.toFixed());
// }else{
//   console.log(result);
// }



// // তুমি নিজে এই ফাংশনের মতো আরেকটা ফাংশন লেখো, ধরো GPA স্কোর দেখে Grade বের করবে।

// function checkResult(Student){
//  try{
//    const {name, marks} = Student;

//    if(marks === undefined ){
//     throw new Error('Marks not provided')
//    }else if( name === undefined){
//     throw new Error('name not provided')
//    }
//    const result = marks >= 40? 'Pass' : 'Faild';
//    console.log(`${name} has ${result}`)
//  }catch(err){
//       console.log(` Error Message: ${err.message}`)
//  }
  
// }


// checkResult({name : 'Lucky', marks: 40});

// checkResult({ marks: 40});



// confuced


// function isClose(a, b) {
//   return Math.abs(a - b) < Number.EPSILON;
// }

// console.log(isClose(3,6))






// function calcArea(w, h) {
//   if (w === null || h === null) {
//     return "Missing value!";
//   } 
//    if (Number.isNaN(w) || Number.isNaN(h)) {
//     return "Invalid area";
//   }
//       const area = w * h;
//       return "Area is " + area;

// }
// console.log(calcArea(5,'5'));  // ব্যাকরণগত ভুল আছে!

// function calcArea(w, h){
//   if (w === null || h === null){
//     return 'Null imput'
//   }
//   if(typeof w !== 'number' || typeof h !== 'number'){
//     return 'must be number'
//   }

//   if(Number.isNaN(w) || Number.isNaN(h)){
//     return 'Not a number'
//   }
//   const area = w * h;
//   return `Area is ${area}`
// }


// console.log(calcArea(5, 7));



// function sumArray(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// reserved words

// let userLet = 10;
// const myFunction = "run";
// var myClass = 5;

// function test() {
//   var x = 10;
//   if (true) {
//     var x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// test();


// let x;
// console.log(x);
// console.log(typeof x);

// function myFunc(){
//   console.log(this) //this er man window object
// }


// const myObj = {
//   name: 'lucky',
//   age: 17,
//   great: function(){
//     console.log(`Hello ${this.name}`) // this er man object er name
//   }
// }

// myObj.great()

// // ----


// const myFunct = ()=> {
//   console.log(this) //this er man window object
// }


// const myObject = {
//   name: 'lucky',
//   age: 17,
//   great: ()=>{
//     console.log(`Hello my bro ${this.name}`) // this er man window object
//   }
// }

// console.log('------------------------------')

// myObject.great()  //Hello my bro undefined asbe 



// ✅ Q7. একটি ফাংশন লিখো getUserFullName(user) যা নিচের ইনপুট থেকে ফুলনেম রিটার্ন করবে।



// function getUserFullName(user){
//   return `My name is ${ user.firstName} ${user.lastName}`;
// }


// const user =  {
//   firstName: "Rafi",
//   lastName: "Hasan"
// };

// // Expected Output: "Rafi Hasan"
// getUserFullName(user)



// // ✅ Q8. একটা ফাংশন বানাও getGrade(score) যা ০ থেকে ১০০ স্কোর ইনপুট নিয়ে এই নিয়মে গ্রেড রিটার্ন করবে:

// /* | Score Range | Grade |
// | ----------- | ----- |
// | 80-100      | A+    |
// | 70-79       | A     |
// | 60-69       | A-    |
// | 50-59       | B     |
// | 0-49        | F     |
//  */


// const checkResult = (result)=>{
//   if( result !== isNaN(result)){
//     if(result >= 80 && result <= 100 ){
//       return 'A+';
//     }else if(result >= 70 && result < 79 ){
//       return 'A';
//     }else if(result >= 60 && result < 69 ){
//       return 'A-';
//     }else if(result >= 50 && result < 59 ){
//       return 'B'
//     }else if(result >= 40 && result < 49 ){
//       return 'F'
//     }else{
//       return `${result} not accepted`
//     }
//   }
// }




// console.log(checkResult('fh'))


// function getGrade(score) {
//   if (typeof score !== 'number' || isNaN(score)) {
//     return "Invalid input";
//   }

//   if (score >= 80 && score <= 100) return 'A+';
//   else if (score >= 70) return 'A';
//   else if (score >= 60) return 'A-';
//   else if (score >= 50) return 'B';
//   else return 'F';
// }

// function getGrade(score){
//   if(typeof score !== 'number'  || isNaN(score)){
//     return 'Invalid input';
//   }
//   if( score >= 80 && score <= 100) return 'A+';
//   else if (score >= 70) return 'A';
//   else if (score >= 60) return 'A-';
//   else if (score >= 50) return 'B';
//   else return 'F';
// }

// console.log(getGrade('68')) // Output: Invalid input
// console.log(getGrade(76)) // Output: A

// JavaScript Problem 1
/*
const sentence = "Hi my name is Lucky, I'm 17 years old. and now a time feel in love, I love Tithy, Tithy is my Best freind, and I realy love to him, Tithy I love you";

const match = sentence.match(/Tithy/gi);
const occurance  = match ? match.length : 0;
console.log(match, occurance);

let position =  sentence.search(/Tithy/i);
position = position >= 0 ? position : 'Not found';
console.log(position); */

// JS Problem 2
/*
function liniarSerch(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val) return i + 1;
  }
  return 'Not Found'
}
console.log(liniarSerch(['a','b','c','d','e', 'f'], 'e')) */

// ---------------------
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

// ---------------------Js Object-----------------------------

// ✍️ Practice Problem
// Problem 1:
// একটি object তৈরি করো book নামে, যার মধ্যে থাকবে:
// const book = {
//     title: 'JavaScript Hero',
//     author: 'Lucky Seif',
//     pages: 350
// };
// title: "JavaScript Hero"
// author: "Lucky Rafi"
// pages: 350

// এবং console.log() দিয়ে author প্রিন্ট করো।
// console.log(book.author);
// console.log(book['author']);

// 📘 Assignment
// Problem 2:
// user নামে একটি অবজেক্ট তৈরি করো যার মধ্যে:

// name: "Tithy"
// age: 19
// isLoggedIn: true

// const user = {
//   name: 'Swethert Tithy',
//   age: 19,
//   isLoggedIn: true
// };

// 🔹 এরপর name ও isLoggedIn console.log() দিয়ে দেখাও।
// console.log(`She ${user.name}, is loggedIn ${user.isLoggedIn}`);


// // 📘 Assignment


// const mobile = {
//   brand: "Samsung",
//   model: "A52"
// };

// mobile.price = 30000;
// mobile.isAvailable = true;

// console.log(`Brand Name: ${mobile.brand}, Price: ${mobile.price}`)

// // ➕ Add: price = 30000, isAvailable = true
// // তারপর brand, price প্রিন্ট করো

// const student = {
//   name: "Lucky",
//   department: "CSE"
// };

// // ➕ Add: batch = "28", isActive = true
// student.batch = 28;
// student.isActive = true;
// student.department = "EEE";
// delete student.isActive;
// // test,
// console.log(student)
// // 📝 Update: department = "EEE"
// // ❌ Delete: isActive
// // ✅ Check if "batch" exists

// // const batch = student.batch;

// // if(batch){
// //   console.log(`Batch is exists, Batch Number: ${batch}`)
// // }else{
// //   console.log('Not found batch');
// // }

// // const batch = student.batch;

// // if("batch" in student){
// //   console.log(`Batch is exists, Batch Number: ${batch}`)
// // }else{
// //   console.log('Not found batch');
// // }



// const batch = student.batch;

// if(student.hasOwnProperty("batch")){
//   console.log(`Batch is exists, Batch Number: ${batch}`)
// }else{
//   console.log('Not found batch');
// }


// -------'
// নিচের object-এ একটি method যোগ করো
// যেটা return করবে: "Hello, I am <name>"
// name property টি object-এর ভেতর থেকেই নেওয়া হবে

// const student = {
//   name: "Tithy",
//   greet: function(){
//     return `Hello I'm  ${this.name}`;
//   }
// };

// console.log(student.greet());  // "Hello, I am Tithy"

// Second Option:

// const student = {
//   name: "Tithy",
//    greet(){
//     return `Hello I'm ${this.name}`;
//   }
// };

// console.log(student.greet());  // "Hello, I am Tithy"

// 📘 Assignment
// 🔧 নিচের অবজেক্টে:

// ✅ একটি method যোগ করো getSummary()

// যা return করবে:
// 👉 "Lucky is 17 years old and lives in Bangladesh"


// const profile = {
//   name: "Lucky",
//   age: 17,
//   country: "Bangladesh",
//   getSummary(){
//     return `Lucky is ${this.age} old and lives in ${this.country},`
//   }
// };

// console.log(profile.getSummary());


// ------------------------------\

// ১। নিচের object এ get fullName যোগ করো
// const student = {
//   firstName: "Tithy",
//   lastName: "Moni",
//   get fullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
// };

// // 👉 Output: "Tithy Moni"
// console.log(student.fullName); 
// --------------------
// const profile = {
//   firstName: "",
//   lastName: "",

//   set fullName(name){
//     const parts = name.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
//   // 👉 set fullName = "Lucky Rafi"
//   // 👉 get fullName → returns "Lucky Rafi"
//   get fullName(){
//     return `${this.firstName} ${this.lastName}`;
//   }
// };


// profile.fullName = "Lucky Rafi";
// console.log(profile.firstName); // Lucky
// console.log(profile.lastName);  // Rafi
// console.log(profile.fullName);  // Lucky Rafi


// -----------------------------------\\

const person = {
  name: "Lucky",
  country: "Bangladesh"
};

// Object.freeze(person);
Object.freeze(person);
  person.name = 'Swetheart Tithy';
  person.love = true;


console.log(person);
// name পরিবর্তন করো
// নতুন property যোগ করো
// তারপর console.log(person);



const account = {
  holder: "Tithy",
  balance: 5000
};


// Step 1: seal object
Object.seal(account);

  account.holder = 'Lucky';
  account.CashIn = 100; // nw = not working
  delete account.balance; //nw

console.log(account);

// Step 2: balance = 7000 (✅ update it)
// Step 3: add new prop => isActive = true (❌)
// Step 4: delete holder (❌)
// Step 5: console.log(account);
