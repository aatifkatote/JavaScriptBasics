const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const board = document.querySelector('#board')

const handler = (event) => {
    const action = event.target.id
    // if(action === 'rock'){
    //     board.innerHTML = "Rock crushes Scissor"
    // }
    // else if(action === 'paper'){
    //     board.innerHTML = "Paper traps Rock"
    // }
    // else if(action === 'scissor'){
    //     board.innerHTML = "Scissor cuts Paper"
    // }
    // else{
    //     board.innerHTML = "Click Something"
    // }
    switch (action) {
        case "rock":
            board.innerHTML = "Rock crushes scissors"
            break
        case 'paper':
            board.innerHTML = "Paper traps Rock"
            break
        case 'scissor':
            board.innerHTML = "Scissor cuts paper"
            break
        default:
            board.innerHTML = "Click something"
    }

}

rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)