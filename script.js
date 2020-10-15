//variables

let leftTopPanel = document.querySelector('.left-top-panel')
let rightTopPanel = document.querySelector('.right-top-panel')
let leftBottomPanel = document.querySelector('.left-bottom-panel')
let rightBottomPanel = document.querySelector('.right-bottom-panel')
// let level = document.querySelector('.level')
// let panel = document.querySelector('.panel')

//start board sequence
// function startGame() {
//     let i=0
//     let start = document.querySelector('.start')
//     start.addEventListener('click', function () {
//        level.innerText = (i+=1)
//     })
// }
// startGame()

const getRandomPanel = () => {

    const panels = [
        leftTopPanel,
        rightTopPanel,
        rightBottomPanel,
        leftBottomPanel
    ]
    return panels[parseInt(Math.random() * panels.length)]
}


const sequence = [getRandomPanel()]
let sequenceToGuess = [...sequence]

const flash = panel => {
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

const panelClicked = panelClicked => {
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

const startFlashing = async () => {
    canClick = false
    for (const panel of sequence) {
        await flash(panel)
    }
    canClick = true
}
startFlashing()











