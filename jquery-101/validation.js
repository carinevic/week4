
let signUpForm = document.getElementById("signUpForm")

signUpForm.addEventListener('submit',(event) => {
 
    let isFormValid = signUpForm.checkValidity()

    console.log(isFormValid)

    // preventing to submit the form 
    event.preventDefault()

    console.log("about to submit the form...")
})