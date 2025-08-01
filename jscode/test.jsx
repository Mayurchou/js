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

function fetchData(Callback){
    console.log('Fetching data......');
    setTimeout (() => {
        const data = { id : 1, name: 'Mayur '};
        console.log('Data is fetched successfully');
        Callback(data);
            })}
fetchData((data) => { 
    console.log('Data is ready to be processed:', data);
});