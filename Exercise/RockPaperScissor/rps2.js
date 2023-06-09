let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    }
    updateScoreElement()

    let isAutoPlaying = false;
   
    let IdSet


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
    You <img src="/Exercise/${playerMove}-emoji.png" alt="" class="icon"><img src="/Exercise/${ComputerMove}-emoji.png" alt="" class="icon"> Computer`

    updateScoreElement()

    }

    function updateScoreElement(){
    document.querySelector('.js-score').
    innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`   
    }
          
    document.querySelector('.js-reset')
        . addEventListener('click', () =>{
    updateScoreElement()
    })
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

document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playGame('rock')
    }else if(event.key === 'p'){
        playGame('paper')
    }else if(event.key === 's'){
        playGame('scissors')
    }
})




