
const formSubmit = document.getElementById('form')
const passwordInput = document.getElementById('password')
const passwordCheck = document.getElementById('password-check')
const passwordIncorrect = document.getElementById('not-match')




formSubmit.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log("pressed");
    ConfirmPassword()
})


// password confirm check
const ConfirmPassword = () =>{
   if (passwordInput.value !== passwordCheck.value) {
    passwordIncorrect.style.display = "block"
    passwordInput.style.outline = "none"
    passwordCheck.style.border = "1px solid red"
    passwordInput.style.border = "1px solid red"
   } else {
    passwordIncorrect.style.display = "none"
   }
}







