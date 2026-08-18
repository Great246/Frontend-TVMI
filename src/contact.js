import api from "./api/axios.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const contactform = document.getElementById("contactform")


contactform.addEventListener('submit', async (e)=>{
   try {
      e.preventDefault()
      const email = document.getElementById("email").value
const name = document.getElementById("name").value
const subject = document.getElementById("subject").value
const message = document.getElementById("message").value
   
const response = await api.post('/api/contact/createcontact', {email, name, subject, message}, {
      withCredentials: true,
    })

if (response.data.success) {
    Toastify({
                text: response.data.message,
                duration: 3000,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            }).showToast();
   } 
   } catch (error) {
      console.log(error)
   }
   
})