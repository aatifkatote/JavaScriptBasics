console.log("MERGED CLASS 2 ES6")

let ranks = [1, 2, 3, 4];

console.log(
  ranks.map((e, index) => {      //If {} braces used, then return statement is a must
    return e * 100;              //map returns new array
  })                             //e represents each element, it has to be placed first
);

console.log(
  ranks.forEach((e, index) => {   //for each doesn't "return" new array and thats why it is undefined
    return e * 100;               //for each can print but not return
  })
);

let newarr = ranks.map((e, index) => {
    console.log(e)                //this will return all arrays
    if(e%2===0)                   //it will return only even array, the odd ones will be undefined
        return e                  //As map works on each element
})
console.log(newarr);            


// Filter
let newfilterarr = ranks.filter((e, index) => {
    if(e%2===0)
        return e
})
console.log(newfilterarr);        //filter returns arrays that match the condition (without undefined)



// PROMISE

// PROMISE IS AN OBJECT THAT RETURNS A VALUE THAT WE HOPE TO RECEIVE IN THE FUTURE BUT NOT IMMEDIATELY
// PROMISE HAS THREE STATES: PENDING, FULFILLED REJECTED
// PENDING ENDS IN RESOLVE OR REJECT

let concert = true;     //if the value is true it will only print resolve and not reject

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT");
        }
        else {
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    }, 2000);  // 2 seconds in milliseconds. Without setTimeout promise will be fulfilled instantaneously
});

console.log(attendConcert)

// let attendConcert = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (concert) {
//             resolve("BOB ATTENDED THE CONCERT");
//         }
//         else {
//             reject("BOB FAILED TO ATTEND THE CONCERT");
//         }
//     }, 2000);
// });

// console.log(attendConcert)

// attendConcert.then((data)=>console.log(data));  //used to prints the promise directly if resolved

// attendConcert.catch((error)=>console.log(error)); //used to prints the promise directly if rejected

attendConcert.then((data)=>console.log(data)).catch((error)=>console.log(error));
// When its false the rejected objected us going inside then and it is returning a error
// Since it is returning an error the catch statement catches it and hence prints it
// This is the proper way to use then and catch simultaneously.

console.log("HI, I WON'T WAIT FOR ANYONE")

console.log("HI, I AM DYING, I DON'T WANT TO WAIT")