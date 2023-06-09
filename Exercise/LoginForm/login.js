function Login(){
    const jsEmail =   document.querySelector('.js-email')
    let jsE = jsEmail.value

    const jsUsername = document.querySelector('.js-username')
    let jsU = jsUsername.value


    const jsPassword = document.querySelector('.js-password')
    let jsP = jsPassword.value


    document.querySelector('.jsemail').innerHTML = `Submitted!`

    const inputs = document.querySelectorAll('.js-email,.js-username,.js-password')

    inputs.forEach(input => {input.value = ''})

}