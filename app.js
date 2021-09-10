// Array & Array methods

const balls = document.querySelectorAll('balls')
// const balls = document.getElementsByClassName('balls')
const body = document.querySelector('body')

const arr = [1, 2 , 3, 4, 5]
console.log(arr[0])

while (arr.length < 15){
    arr.push("iteration")
    console.log(arr.length)
}
console.log(arr)

const added = arr.includes(100)
console.log(added)

// const added = arr.unshift(100) (adds element at the beginning of array while push adds at end of array)
// console.log(arr)

// arr.shift()  (removes first element)
// arr.shift()  (can be used multiple times to keep removing first element)


// arr.splice(2)  (used to remove element from specific index)
// console.log(arr)
