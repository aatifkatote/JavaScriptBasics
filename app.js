// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')

function logName(Name="Enter your name", age = 18){
    console.log(Name + " You are" + age)
}

logName() //output UNDEFINED if no parameter is passed

function add(a=0, b=0){
    const sum= a+b
    return sum
}
console.log(add())