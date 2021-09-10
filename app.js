//Iteration over array
const arr = [1, 2 , 3, 4, 5]

// Basic Method for printing
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }



// For Each
arr.forEach((element, iteration) => {
    console.log('iteration')
    console.log(element)
    // console.log(element, iteration)
})