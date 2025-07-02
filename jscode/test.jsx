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




let meg = "Global message";

function showMessge(){
    let meg = "Local message";
    console.log(meg); // This will log "Local message"
}
showMessge();
// console.log(meg); // This will log "Global message"