const password = document.querySelectorAll(".password")

const togglePassword = document.querySelectorAll(".togglePassword")

togglePassword.forEach((button, index) => {
    button.addEventListener("click", ()=> {

        if (password[index].type === "password") {
         password[index].type = "text"


         togglePassword.classList.remove("ri-eye-line")
         togglePassword.classList.add("ri-eye-off-line")

        } else{
            password[index].type = "password"

            togglePassword.classList.remove("ri-eye-off-line")
            togglePassword.classList.add("ri-eye-line")
        }
    })
})

// togglePassword.addEventListener("click", ()=> {
    

//     if (password.type === "password") {
//         password.type = "text"

//         togglePassword.classList.remove("ri-eye-line")
//     togglePassword.classList.add("ri-eye-off-line")
//     } else {
//         password.type = "password"

//         togglePassword.classList.remove("ri-eye-off-line")
//     togglePassword.classList.add("ri-eye-line")
//     }
// })