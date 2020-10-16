//variables
let leftTopPanel = document.querySelector('.left-top-panel')
let rightTopPanel = document.querySelector('.right-top-panel')
let leftBottomPanel = document.querySelector('.left-bottom-panel')
let rightBottomPanel = document.querySelector('.right-bottom-panel')
let level = document.querySelector('.level')
let panel = document.querySelector('.panel')
let sound = {
    leftTopPanel: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'), 
    rightTopPanel: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'), 
    leftBottomPanel: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'), 
    rightBottomPanel: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  }
  
//start the game sequence
function startGame() {
    let i=0
    let start = document.querySelector('.start')
    start.addEventListener('click', function () {
       level.innerText = (i+=1)
       startFlashing()
       start.style.display = 'none'
    })
}
startGame()

//function to get a random panel
function getRandomPanel() {
    const panels = [leftTopPanel, rightTopPanel, rightBottomPanel, leftBottomPanel]
    return panels[parseInt(Math.random() * panels.length)]
}

//starts off the sequence with a random panel
//have an array that keeps track of what is guessed 
const sequence = [getRandomPanel()]
let sequenceToGuess = [...sequence]
//loops through the sequence & has each panel on a timer
//Add the class active then remove it
function flash(panel) {
    return new Promise((resolve, reject) => {
        panel.className += ' active'
       setTimeout(() => {
            panel.className = panel.className.replace(
                ' active',
                ''
           
            )
            setTimeout(() => {
    resolve()
}, 250)
        }, 1000)
    })
}

let canClick = false
//function to check if the panel clicked was correct then remove it from the sequence
//check if you're done with the current round
function panelClicked(panelClicked) {
    if (!canClick) return
    const expectedPanel = sequenceToGuess.shift()
    if (expectedPanel === panelClicked) {
        if (sequenceToGuess.length === 0) {
            // start new round
            sequence.push(getRandomPanel())
            sequenceToGuess = [...sequence]
            startFlashing()
        }
    } else {
        // end game
        alert('game over')
    }
}

//loops through the current sequence, flashes each panel one by one. 
const startFlashing = async () => {
    canClick = false
    for (const panel of sequence) {
        await flash(panel)
    }
    canClick = true
}












