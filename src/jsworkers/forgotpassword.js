import api from "../api/axios.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const forgotform = document.getElementById("forgotform")

forgotform.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const Email = document.getElementById("email").value
   const res = await api.post('/api/auth/forgotpassword', { Email })
   if (res.data.success) {
     Toastify({
     text: res.data.message,
      duration: 3000,
     gravity: "top",
     position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
         }).showToast();
   } else {
    Toastify({
     text: res.data.message,
      duration: 3000,
     gravity: "top",
     position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
         }).showToast();
   }
})