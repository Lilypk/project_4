let leftTopPanel = document.querySelector('.left-top-panel')
let rightTopPanel = document.querySelector('.right-top-panel')
let leftBottomPanel = document.querySelector('.left-bottom-panel')
let rightBottomPanel = document.querySelector('.right-bottom-panel')
// let sequence = ['rightBottomPanel', 'leftTopPanel', 'rightTopPanel', 'leftBottomPanel']

function getRandomPanel() {
    let panels = ['rightBottomPanel', 'leftTopPanel', 'rightTopPanel', 'leftBottomPanel']
    return panels[parseInt(Math.random() * panels.length)]
}
getRandomPanel()

let sequence = [getRandomPanel(), getRandomPanel(), getRandomPanel(), getRandomPanel()]

function flash(panel) {
    let flashPanel = document.createElement('.flashPanel')
    flashPanel.style.backgroundColor = 'white'
    

}

