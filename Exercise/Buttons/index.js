function subs(){
    // constamta that selects only the button that is defined first
    const buttonElement = document.querySelector('.buttonOne')
    // if button.name === 'Subscribe', changed it to Subscribed,else return Subscribe.
    if(buttonElement.innerHTML === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed'
        buttonElement.classList.add
        ('is-subscribed');
    }else{
        buttonElement.innerHTML = 'Subscribe'
        buttonElement.classList.remove('is-subscribed')
    }}