
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    }
    updateScoreElement()

    let isAutoPlaying = false;

    let IdSet

function set(){
   const setTime = document.querySelector('.js-play')
   if(setTime.innerHTML !== 'Stop playing'){
    return setTime.innerHTML = 'Stop playing'
   }else{
    return setTime.innerHTML = 'Auto play'
   }
}
function autoPlay(){
    if(!isAutoPlaying){
    IdSet = setInterval( () => {
    const playerMove = pickComputerMove()
    playGame(playerMove)
    },1000)
    isAutoPlaying = true 
}  else{
    clearInterval(IdSet)
    isAutoPlaying = false
    }
    set()
}

function playGame(playerMove){
const ComputerMove = pickComputerMove();
let result = '';

if(playerMove === 'scissors'){
    if(ComputerMove === 'rock'){
        result = 'You lose'
    }else if(ComputerMove === 'paper'){
        result = 'You win'
    }else if(ComputerMove === 'scissors'){
        result = 'Tie'
    }
    }else if(playerMove === 'paper'){
    if(ComputerMove === 'rock'){
        result = 'You win'
    }else if(ComputerMove === 'paper'){
        result = 'Tie'
    }else if(ComputerMove === 'scissors'){
        result = 'You lose'
    }
    }else if(playerMove === 'rock'){
    if(ComputerMove === 'rock'){
        result = 'Tie'
    }else if(ComputerMove === 'paper'){
        result = 'You lose'
    }else if(ComputerMove === 'scissors'){
        result = 'You win'
    }
}
if(result === 'You win'){
    score.wins +=1
}else if(result === 'You lose'){
    score.losses +=1
}else if(result === 'Tie'){
    score.ties +=1
}

localStorage.setItem('score',JSON.stringify(score))

document.querySelector('.js-result').
innerHTML = result

document.querySelector('.js-moves').
innerHTML = `
You <img src="/FeaturesUnderstanding/Exercise/${playerMove}-emoji.png" alt="" class="icon"><img src="/FeaturesUnderstanding/Exercise/${ComputerMove}-emoji.png" alt="" class="icon"> Computer`

updateScoreElement()

}

function updateScoreElement(){
document.querySelector('.js-score').
innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`   
}
          
function pickComputerMove(){
    const randomNumber = Math.random();

    let ComputerMove ='';

if(randomNumber >= 0 && randomNumber < 1/3){
    ComputerMove = 'rock'
    }else if(randomNumber >= 1/3 && randomNumber <2/3){
    ComputerMove = 'paper'     
    }else if(randomNumber >= 2/3 && randomNumber <1){
    ComputerMove = 'scissors'
    }
    return ComputerMove
}  

function resetConfirmation(){
    document.querySelector('.js-confirm').innerHTML = `Are you sure you want to reset the score?
    <button class="js-yes-button">
    Yes
    </button> 
    <button class="js-no-button">
    No
    </button>`

    document.querySelector('.js-yes-button').addEventListener('click',()=>{
        resetScore()
        hide()
    })
    document.querySelector('.js-no-button').addEventListener('click',()=>{
        hide()
    })
}

function resetScore(){
    score.wins =0;
    score.losses = 0;
    score.ties = 0
    localStorage.removeItem('score')
    updateScoreElement()
}

function hide(){
    document.querySelector('.js-confirm').innerHTML = ''
}

document.querySelector('.js-rock-button')
. addEventListener('click', () =>{
playGame('rock')
})
document.querySelector('.js-paper-button')
. addEventListener('click', () =>{
playGame('paper')
})
document.querySelector('.js-scissors-button')
. addEventListener('click', () =>{
playGame('scissors')
})
const Auto = document.querySelector('.js-play')
Auto.addEventListener('click',() =>{
autoPlay()
})
document.querySelector('.js-reset').addEventListener('click',()=>{
    resetConfirmation()
})
document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playGame('rock')
    }else if(event.key === 'p'){
        playGame('paper')
    }else if(event.key === 's'){
        playGame('scissors')
    }else if(event.key === 'a'){
        autoPlay()
    }else if(event.key === 'Backspace' ){
        resetConfirmation()
    }
})




