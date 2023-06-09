function OnOff(){
    const gameButton = document.querySelector('.js-button')
        if(!gameButton.classList.contains('gameButton'))
        gameButton.classList.add('gameButton')
        else{
            gameButton.classList.remove('gameButton') 
        }
}
function music(){
    const gameButton = document.querySelector('.js-music')
    if(!gameButton.classList.contains('gameButton')){
    gameButton.classList.add('gameButton')
        }
        else{
            gameButton.classList.remove('gameButton')
        }
}
function tech(){
    const gameButton = document.querySelector('.js-tech')
    if(!gameButton.classList.contains('gameButton')){
            gameButton.classList.add('gameButton')
        }
        else{
            gameButton.classList.remove('gameButton')
        }
}

function toggleButton(selector){
const button = document.querySelector(selector)
if(!button.classList.classList('gameButton')){
    ON()
    button.classList.add('gameButton')
}else{
    button.classList.remove('gameButton')
}
}

function ON(){
const prevButton = document.querySelector('.gameButton')
if(prevButton){
    prevButton.classList.remove('gameButton')
}}