//variables
let playerSeq = []
let simonSeq = ['rightBottomPanel', 'leftTopPanel', 'rightTopPanel', 'leftBottomPanel']
let leftTopPanel = document.querySelector('.left-top-panel')
let rightTopPanel = document.querySelector('.right-top-panel')
let leftBottomPanel = document.querySelector('.left-bottom-panel')
let rightBottomPanel = document.querySelector('.right-bottom-panel')
let level = document.querySelector('.level')
let panel = document.querySelector('.panel')

//start board sequence
function startGame() {
    let i=0
    let start = document.querySelector('.start')
    start.addEventListener('click', function () {
       level.innerText = (i+=1)
    })
}
startGame()

// simon seq 
function startSequence() {
    console.log(level)
    
    setInterval(function() {
        let flash = document.querySelectorAll('.panel')
        
        // flash[0].classList.toggle('flashPanel')
        
    }, 1000)

    getRandomPanel()

}
startSequence()

// generate random panel
function getRandomPanel() {
    let randomPanel = Math.floor(Math.random() * 4)
    console.log(simonSeq[randomPanel])
    
 }
 getRandomPanel()


// user replicates sequence




