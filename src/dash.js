const box = document.getElementById("box")
const closes = document.getElementById("close")
const textTv = document.querySelectorAll(".textTv")
const clossebtn = document.getElementById("clossebtn")
const sideebar = document.getElementById("sideebar")
const hambtn = document.getElementById("hambtn")
const textss = document.querySelectorAll(".textss")
const textlong = document.getElementById("textlong")


closes.addEventListener("click", ()=> {
    box.classList.toggle("w-55")
    box.classList.toggle("w-20")
    
            if (box.classList.contains("w-20")) {
        closes.classList.toggle("ri-arrow-left-line")
        closes.classList.toggle("ri-arrow-right-line")
        textTv.forEach(text =>{text.classList.add("opacity-0");
        text.classList.add("hidden")
    })  
    } else if(box.classList.contains("w-55")) {
        closes.classList.remove("ri-arrow-right-line")
        closes.classList.add("ri-arrow-left-line")
        textTv.forEach(text =>{text.classList.remove("opacity-0");
            text.classList.remove("hidden")
        })
    }
})

hambtn.addEventListener("click", ()=> {
    sideebar.classList.toggle("invisible")
    sideebar.classList.toggle("w-55")
    textss.forEach(textT => textT.style.transform = "scale(1)")
})
clossebtn.addEventListener("click", ()=> {
    sideebar.classList.toggle("invisible")
    sideebar.classList.toggle("w-55")
    textss.forEach(textT => textT.style.transform = "scale(0)")
})

updateBar()