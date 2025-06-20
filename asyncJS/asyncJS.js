// ✅ Write a function: processUser(name, callback)
// ➤ First log: "Processing user Lucky"
// ➤ Then run callback() to say "Done processing"

// I don't know about callback param.. I want to know

// function processUser(name, callback) {
//   console.log(`Processing user ${name}`);
//   setTimeout(() => {
//    callback();
//   }, 2000)
// }

// function doneMessage(){
//     console.log("Done processing");
// }

// processUser('Lucky', doneMessage);
// ---------------------------------------

// ✅ Write a function: sum(a, b, callback)
// function sum(a, b, callback){
//     let result = a + b;
//     callback(result)
// }
// ➤ Add a + b
// ➤ Then pass the result to callback to log it



// sum(23, 68, function(result){
//     console.log(`Result is: ${result}`);
// })


// sum(5, 10, function(result) {
//   console.log(`Result is: ${result}`);
// });




// ----------------------------------

// console.log("Start");

// setTimeout(() => {
//   console.log("Task 1 done");
// }, 1000);

// setTimeout(() => {
//   console.log("Task 2 done");
// }, 0);

// console.log("End");


// output
// start - end - task 2 - task 1


// ✅ Step 1: Log: "Fetching data..."
// console.log("Fetching data...");
// // ✅ Step 2: After 3s delay, log: "Data received!"
// setTimeout(()=>{
//     console.log("Data received!");
//       console.log("Processing...")
// },3000)
// ✅ Step 3: Immediately after that, log: "Processing..."


// -----------------------------------------------------------
// ✅ Create a promise called 'download'
// const download = new Promise((resolve, reject)=>{
//     console.log("Starting download...");
//     setTimeout(()=>{
//         resolve("Download complete!");
//     }, 2000);
     

// })

// download.then(function(message){
//     console.log(message);
// })
// ✅ Inside it, use setTimeout to wait 2s, then resolve with "Download complete!"
// ✅ Before it, log: "Starting download..."
// ✅ Use .then() to log the final message


// exta

// const download = new Promise((resolve, reject)=>{
//     console.log("Starting download...");
//     let result = false; // some confuced 1
//     setTimeout(()=>{
// if(result){
//             resolve("Download complete!");
//         }else{ // e.g., simulate an error: reject("No internet!");
//             reject("No internet!") // some confuced 2
//         }
//     }, 2000);
     

// })

// download.then(function(message){
//     console.log(message);
// }).catch((err)=>{
//     console.log(err)
// })







// // ✅ Step 1: Create an async function called startDownload()
// async function startDownload(){
// // ✅ Step 2: Inside it, wait 2s using Promise & resolve "Download done!"
//    let result = await new Promise((resolve, reject)=>{
//       let loaded = true;
//     setTimeout(()=>{
//          if(loaded){
//             resolve("Download done!"); 
//          }else{
//             reject("Rejected")
//          }
//     },2000)
//    })
//    console.log(result);
//    console.log("Processing file...")

// }

// startDownload();
// // })
// // ✅ Step 3: Use await to pause & log that message

// // ✅ Step 4: Then immediately log: "Processing file..."