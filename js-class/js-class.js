// // ✅ 1. একটি class বানাও Book নামে

// class Book {
// // ✅ 2. constructor এ নাও: title, author, pages
//     constructor(title, author, pages){
//         this.titles = title;
//         this.authors = author;
//         this.pages = pages;
//     }
// // ✅ 3. একটি method যোগ করো getSummary()
//     getSummary(){
//         return `${this.titles} by ${this.authors} has ${this.pages} pages`
//     };
// }


// // 👉 Example output: "JS Hero by Lucky has 350 pages"

// const book1 = new Book('Js Hero', 'Sazzad Ali', 200);
// console.log(book1.getSummary());


// ---------------------


// // ✅ Step 1: Create a class Student with name, dept
// class Student{
//     constructor(name, dept){
//         this.name = name;
//         this.dept = dept;
//     }
// // ✅ Step 2: Add a method introduce() → "I am Lucky from CSE"
//     introduce() {return `I'm ${this.name} from ${this.dept}`}
// }

// // ✅ Step 3: Create GraduateStudent extends Student
// class GraduateStudent extends Student{
//     constructor(name, dept, thesisTitle){
//         super(name, dept)
//     // ✅ Step 4: Add thesisTitle as extra property
//         this.thesisTitle = thesisTitle;
//     }
// // ✅ Step 5: Add method getThesis()
//      getThesis() {return `${this.name} from ${this.dept} is working ${this.thesisTitle}`}
// }


// const me = new GraduateStudent('Lucky', 'CSE', 'AI-based Learning');

// console.log(me.getThesis())

// // 👉 Output: "Lucky from CSE is working on AI-based Learning"




// ----------------
// ✅ Create a class Converter
class Converter{
    static cToF(celsius){
      return (celsius * 9/5) +32
    }
}

console.log(Converter.cToF(30))
// ✅ Add static method: cToF(celsius)
// 👉 Formula: (C × 9/5) + 32
// 👉 Example: cToF(30) → 86°F
