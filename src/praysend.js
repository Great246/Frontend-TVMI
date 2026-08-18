import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import api from "./api/axios.js"

const prayerform = document.getElementById("prayerform")

prayerform.addEventListener('submit', async (e)=> {
    try {
         e.preventDefault()
   const email = document.getElementById("email").value
const name = document.getElementById("name").value
const subject = document.getElementById("subject").value
const messag = document.getElementById("message").value


   const res = await api.post('/api/pray/creatprayer', {email, name, subject, messag})
   if (res.data.success) {
    Toastify({
                text: res.data.message,
                duration: 5000,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            }).showToast();
   } 
    } catch (error) {
       console.log(error) 
    }
})