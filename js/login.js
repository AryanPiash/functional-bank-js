// Move to another website when button was clicked
const button = document.getElementById('button')
button.addEventListener('click',function(){
    const emailField = document.getElementById('email')
    const email = emailField.value
    const passwordField = document.getElementById('password')
    const password = passwordField.value
     if(email == 'something@example.com' && password == 'password'){
         
        window.location.href = 'banking.html'
            
     }else if(password !== 'password'){
        document.getElementById('log-error').style.display = 'block'
     }else{
        document.getElementById('log-error').style.display = 'none'
     }
})



