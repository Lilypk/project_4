//variables

let leftTopPanel = document.querySelector('.left-top-panel')
let rightTopPanel = document.querySelector('.right-top-panel')
let leftBottomPanel = document.querySelector('.left-bottom-panel')
let rightBottomPanel = document.querySelector('.right-bottom-panel')
// let level = document.querySelector('.level')
// let panel = document.querySelector('.panel')


const getRandomPanel = () => {

    const panels = [
        leftTopPanel,
        rightTopPanel,
        rightBottomPanel,
        leftBottomPanel
    ]
    return panels[parseInt(Math.random() * panels.length)]
}


const sequence = [
    getRandomPanel(),
    getRandomPanel(),
    getRandomPanel(),
    getRandomPanel()
]

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

const panelClicked = panel => {
    console.log(panel)
}

const main = async () => {
    for (const panel of sequence) {
        await flash(panel)
    }

}
main()







//start board sequence
// function startGame() {
//     let i=0
//     let start = document.querySelector('.start')
//     start.addEventListener('click', function () {
//        level.innerText = (i+=1)
//     })
// }
// startGame()



// // simon seq 
// function startSequence(sequence) {
//     console.log(level)

//     setInterval(function() {
//         let panels= document.querySelectorAll('.panel')
//         for (let i=0; i < panels.length; i++) {
//              panels[i].classList.toggle('flashPanel')
//         }


//     }, 1000)

// }

// startSequence()

// // generate random panel
// function getRandomPanel() {
//     let randomPanel = Math.floor(Math.random() * 4) 
//     console.log(simonSeq[randomPanel])
//     return simonSeq[randomPanel]
//  }
//  getRandomPanel()




// // user replicates sequence




