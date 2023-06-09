function register(){

    const JsEmail =  document.querySelector('.js-email')
    let jsE = JsEmail.value
 
    const jsFirstName = document.querySelector('.js-firstName')
    let jsFN = jsFirstName.value
 
    const jsSecondName = document.querySelector('.js-secondName')
    let jsSN = jsFirstName.value
 
    const JsPassword = document.querySelector('.js-password')
    let jsP = JsPassword.value
     
    document.querySelector('.submit').innerHTML = `Submitted!`
 
    const inputs = document.querySelectorAll('.js-email,.js-firstName,.js-secondName,.js-password')
 
    inputs.forEach(input => {input.value = ''})
 
    }