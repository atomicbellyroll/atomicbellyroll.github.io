// Select boxes
//add event listener
//click on the square to fill it in
//alternate what to put 
//make sure you can't click on the same square more than once 
//create a function to select winner
//create function to alert when it's a draw


let boxes = document.querySelectorAll('.box')
let player = 'X'

// alternate players
function changePlayer() {
    if (player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}


boxes.forEach(function (box) {
    box.onclick = function (event) {
        if (event.target.innerHTML == '') {
            event.target.innerHTML = player
            if (checkWinner()) {
                setTimeout(function () {
                    alert('You are ZE WEENER')
                }, 200)
            }
            else {
                if (checkDraw()) {
                    setTimeout(function () {
                        alert('Womp Womp')
                    }, 200)
                }
                changePlayer()
            }
        } else {
            alert('Sucks to Suck')
        }
    }
})

// for winners
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function checkWinner() {
    let winner = false

    winningCombos.forEach(function (element) {

        if (boxes[element[0]].innerHTML == player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player) {
            winner = true
        }
    })
    return winner
}

// check draw
function checkDraw() {
    let draw = true
    boxes.forEach(function (box) {
        if (box.innerHTML == '') {
            draw = false
        }
    })
    return draw
}

// reset game
let button = document.getElementById('reset')

button.onclick = function resetBoard() {
    boxes.forEach(function (element) {
        element.innerHTML = ""
    })
}



//let turn = 0
// if(turn % 2 == 0){
        //     event.target.innerHTML = 'X'
        // } else {
        //     event.target.innerHTML = 'O'
        // }
        // turn++;
