// PROMISE

// PROMISE IS AN OBJECT THAT RETURNS A VALUE THAT WE HOPE TO RECEIVE IN THE FUTURE BUT NOT IMMEDIATELY
// PROMISE HAS THREE STATES: PENDING, FULFILLED REJECTED
// PENDING ENDS IN RESOLVE OR REJECT

let concert = false;     //if the value is true it will only print resolve and not reject

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

// attendConcert.then((data)=>console.log(data));  //used to prints the promise directly if resolved

// attendConcert.catch((error)=>console.log(error)); //used to prints the promise directly if rejected

// attendConcert.then((data)=>console.log(data)).catch((error)=>console.log(error));
// When its false the rejected objected us going inside then and it is returning a error
// Since it is returning an error the catch statement catches it and hence prints it
// This is the proper way to use then and catch simultaneously.



// A-sync and Await (same thing as line number 26)
// Without a-sync we can't use await

// async function asyfuncname(){                    // Without arrow function
//     try{
//         let result = await attendConcert;
//         console.log(result) 
//     }
//     catch(e){
//         console.log(e)
//     }    
// }
// asyfuncname()

let asyfuncname = async() =>{                     // With arrow function
    try{
        let result = await attendConcert;
        console.log(result) 
    }
    catch(e){
        console.log(e)
    }    
}
asyfuncname()
// const afunc = async () =>{
//     let result = await attendConcert;   // This is a ES6 arrow javascript function
//     return result;
// }

console.log("HI, I WON'T WAIT FOR ANYONE")

console.log("HI, I AM DYING, I DON'T WANT TO WAIT")