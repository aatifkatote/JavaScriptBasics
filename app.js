// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')

const add1 = (a=0, b=0) => { //this is preferred since all functions are declared initially and it looks neat
    return a + b
}
console.log(add1(12, 23))

console.log(add2(12, 5)) //with FUNCTION KEYWORD, this line can be used before declaration.

function add2(a=0, b=0){
    return a+b
}