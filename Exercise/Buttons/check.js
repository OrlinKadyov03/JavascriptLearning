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
    if(!gameButton.classList.contains('musicButton')){
    gameButton.classList.add('musicButton')
        }
        else{
            gameButton.classList.remove('musicButton')
        }
}
function tech(){
    const gameButton = document.querySelector('.js-tech')
    if(!gameButton.classList.contains('techButton')){
            gameButton.classList.add('techButton')
        }
        else{
            gameButton.classList.remove('techButton')
        }
}