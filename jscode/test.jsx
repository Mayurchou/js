// function testVar(){
//     if (true){
//    var x = 5;

//     }
//     console.log(x); 
// }
// testVar();



// function markDone(){
//     const mark = () =>{
//         task[index-1].done = true;

//     };
//     mark();
//     console.log("Task marked as done",mark);
// }




// var x = 1;
// let y = 2;
// const z = 3;


// x = 11;
// y = 22;
// // z= 33;  // z is a constant and cannot be reassigned

// console.log(x,y,z);


// function testScope() {
//     if(true){
//         var x = 5; // 'var' is function-scoped or globally scoped
//         let y = 10; // 'let' is block-scoped
//         const z = 15; // 'const' is block-scoped and cannot be reassigned
//     }
//     console.log(x);
//     // console.log(y);
//     // console.log(z); // This will throw an error because 'y' and 'z' are not defined outside the block
// }
// testScope();




// let meg = "Global message";

// function showMessge(){
//     let meg = "Local message";
//     console.log(meg); // This will log "Local message"
// }
// showMessge();
// // console.log(meg); // This will log "Global message"



// {
//     var x = 10; // Global variable
//     let y = 20; // Block-scoped variable
//     const z = 30; // Block-scoped constant
// }
// console.log(x); // This will log 10
// // console.log(y); // This will throw an error because 'y' is not defined outside the block
// // console.log (z); // This will throw an error because 'z' is not defined outside the block




// var a = 10;
// var a = 20; // This is valid, 'a' is redeclared

// console.log(a); // This will log 20

// let b = 10;
// // let b = 20; // This will throw an error because 'b' is already declared
// console.log(b); // This line will not be executed due to the error above

// const c = 10;
// // const c = 20; // This will throw an error because 'c' is already declared
// console.log(c); // This line will not be executed due to the error above


// loopScoping 

// for (var i = 0; i < 3; i++){
//     setTimeout (()  => 
//         console.log('var i: ', i), 1000);
//     }


// for (let j = 0; j <3; j++){
//     setTimeout (() => 
//         console.log('let j',j ),1000)
// }    




// Tranditional Function Declaration

// function add(a, b ){
//    return a + b;
// }

// add(10,5); // This will return 15


// arrow function

// let add = (a, b) => {
//     return a + b;
// }

// add(10, 5); // This will return 15




// function add(a,b){
//     return a +b;

// }
// add (11,20); // This will return 31




// // 1 No parameter
// const greet = () => {
//     console.log('hello world from arrow function');
// }
// greet(); // This will log "hello world from arrow function"


// // 2 Single parameter
// const grretuser = name => {
//     name = name || 'undefined'; // 
//     console.log(`hello ${name}, welcome to arrow function`);
// }

// grretuser('Mayur'); // This will log "hello undefined, welcome to arrow function"


// // 3 Multiple parameters
// const multiply = (a,b) => {
//     return a * b;

// }
// console.log(multiply(5, 10)); // This will log 50


// //4. With curly braces and return

// const devide = (a,b) => {
//     return a / b;
// }
// console.log(devide(10, 2)); // This will log 5




// Callback Function


// function greet(name, callback){
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// function Goodnbye(){
//     console.log('Goodbye!');
// }
// greet('Mayur', Goodnbye); // This will log "Hello, Mayur!" followed by "Goodbye!"


// Simulating server request

// function fetchData(callbacks){
//     console.log('Fetching data.......');{
//         setTimeout(() => {
//             const data = { id: 1 , name : 'Mayur' };
//             console.log('Data fetched successfully');
//         })
//     }
// }
// fetchData(() => {
//     console.log('Data is ready to be processed');
// });


// ✅ Arrow Function with Callback

// function fetchData(Callback){
//     console.log('Fetching data......');
//     setTimeout (() => {
//         const data = { id : 1, name: 'Mayur '};
//         console.log('Data is fetched successfully');
//         Callback(data);
//             })}
// fetchData((data) => { 
//     console.log('Data is ready to be processed:', data);
// });


//Array Methods 
// let fruits = ['Apple', 'banana', 'charry', 'date', 'elderberry'];

// console.log('Original Array:', fruits);

// Array push method

// let num = [1,2,3,4,5];

// num.push(6); // Adds 6 to the end of the array
// console.log(num); 

// Array pop method
// let num = [1,2,3,4,5,6,7];

// num.pop(); // Removes the last element (7) from the array
// console.log(num);

// Array shift method
// let num = [1,2,3,4,5,6,7];
// num.shift(); // Removes the first element (1) from the array
// console.log(num); 

// Array unshift method
// let num = [1,2,3,4,5,6,7];
// num.unshift(4); // Adds 0 to the beginning of the array
// console.log(num); 


// Array splice method
// let num = [1,2,3,4,5,6,7];
// num.splice(2, 1, 10); // Removes 1 element at index
// // 2 and adds 10 at that position
// console.log(num); 

// Array slice method
// let num = [1,2,3,4,5,6,7];
// let sliceArray = num.slice(2, 5); // Extracts elements from index
// // 2 to index 5 (not including 5)
// console.log(sliceArray); 


//loop Methods

// for loop
// for (let i = 0; i<5; i++){
//     console.log(i);
// }

//While Loop
// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }


//  For...of Loop
// let fruits = ["apple", "banana", "charray"];
// for (let fruit of fruits){
//     console.log(fruit);
// }


// map
// let nums = [1,2,3];
// let Squared = nums.map(num => num*num);
// console.log(Squared);


// let nums = [1,2,3,4,5];
// let Squared = nums.map(num => num * 5)
// console.log(Squared);

// let Fruits = ["apple","banana","carray"];
// let UppaerCase =  Fruits.map(Fruits => Fruits.toUpperCase());
// console.log(UppaerCase);


//filter
// let nums = [1,2,3,4,5,6,7,8];
// let evens = nums.filter(nums => nums % 2 == 0)
// console.log(evens)

// let nums = [12, 13, 44, 66 ,74, 77]
// let odd = nums.filter(nums => nums % 2 == 1)
// console.log(odd)

// Object

// const person = {
//     name: 'Mayur',
//     age: 25,
//     isStudent: false
// };

// console.log(person.name);
// console.log(person["age"]);
// console.log(person.isStudent)

// person.name = "Ashvin";
// person["age"] = 26;

// console.log(person.name);
// console.log(person["age"]);


// const student = {
//     name : "Emma",
//     grade : {
//         math : 89,
//         science : 100,
//         bio : 60
//     }
// };
// console.log(student.grade.math)
// console.log(student.grade.science)
// console.log(student.grade.bio)
// console.log(student.name)

// student.grade.bio = 30
// console.log(student.grade.bio)


// const person = {
//     name : "Mayur",
//     age  : 26,
//     isStudent : false,
//     hobbies : ["Reading","coding"],
//     addresss :{
//         city : "Burhanpur",
//         pincode : 445
//     }
// }

// console.log(person.addresss.city)





// function OuterFunction(){
//     let count = 1;

//     function InnerFunction(){
//         count++;
//         console.log('count:', count)

//     }
//     return InnerFunction;

// }
// const counter = OuterFunction();
// counter();
// counter();
// counter();
// counter();


// ✅ Promise Syntax:

// const promise = new Promise((resolve, reject) =>{
//     if(success){
//         resolve("Operation was successful");

//     }else{
//         reject("operation failed");
//     }
    
// })


// promise
// .then(result => {
//     console.log("success:", result);

// })

// .catch(error => {
//     console.log("error:", error);
// })


// const promise = new Promise((resolve, reject) => {

//     success = true; 
//     // async operation
//     let result = "Operaton was successful";
//     let error = "Operation failed";
//     if (success) {
//         resolve(result); // fulfilled
//     } else {
//         reject(error);   // rejected
//     }
// });



// promise
//   .then(result => console.log("Success:", result))
//   .catch(error => console.error("Error:", error));




// ✅ What is async/await?


