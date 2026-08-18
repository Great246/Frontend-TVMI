const submenu = document.getElementById("submenu")
const arrow = document.getElementById("arrow")



arrow.addEventListener('click', () => {
   submenu.classList.toggle("hidden")
   arrow.classList.toggle("ri-arrow-up-line")
   arrow.classList.toggle("ri-arrow-down-line")
})

const submen = document.getElementById("submen")
const arro = document.getElementById("arro")

arro.addEventListener('click', () => {
   submen.classList.toggle("hidden")

})

const hambMenu = document.getElementById('hamburger-toggle')
const hambtn = document.getElementById('hambtn')

hambtn.addEventListener('click', () => {
    hambMenu.classList.toggle("hidden")
})