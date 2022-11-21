const player = ['X', 'O']
const marks = []
var turn = 0, moves = 0

for (let i = 0; i < 3; i++) {
    marks[i] = []
    for (let j = 0; j < 3; j++) {
        marks[i][j] = ''
    }
}

const showWinner = (winner) => {
    const showWinnerContainer = document.querySelector('.show_winner_container')
    const winnerContainer = document.querySelector('.winner')
    
    showWinnerContainer.style.display = 'block'
    winnerContainer.innerHTML = `Player ${winner} es el ganador`
}

const checkWinner = (id) => {
    var winner = document.getElementById(id).className.split(' ').filter(win => win != 'box')
    
    winner.map(win => {
        let winnerLine = document.querySelectorAll(`.${win}`)
        const line = []

        for (let i = 0; i < winnerLine.length; i++) {
            line.push(winnerLine[i].textContent)
        }
        line.every(tile => tile == player[turn]) ? showWinner(player[turn]) : null
    })
}

const game = () => {
    let tiles = document.querySelectorAll('.box')

    tiles.forEach(tile => {
        tile.addEventListener('click', event => {
            let index = event.target.id.split('')
            if (marks[index[0]][index[1]]) return 
            marks[index[0]][index[1]] = player[turn]
            event.target.innerHTML  = player[turn]
            checkWinner(event.target.id)
            turn ? turn = 0 : turn = 1
        })
    });
}

game()