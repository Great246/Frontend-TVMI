import api from "../api/axios.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const resetform = document.getElementById("resetform")

resetform.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (!password || !confirmPassword) {
        Toastify({
                   text: "All fields are required",
                   duration: 3000,
                   gravity: "top",
                   position: "right",
                   backgroundColor: "linear-gradient(to right, #ff0000, #ff4d4d)",
                 }).showToast();
                 return
    } else if (password !== confirmPassword) {
       Toastify({
                   text: "Password doesn't match",
                   duration: 3000,
                   gravity: "top",
                   position: "right",
                   backgroundColor: "linear-gradient(to right, #ff0000, #ff4d4d)",
                 }).showToast(); return
    }
    const res = await api.post(`/api/auth/resetPassword/${token}`, { password }, {
      withCredentials: true,
    })
   
    if (res.data.success) {
        window.location.href = "/auth/login.html"
        resetform.reset()
    } else {
        console.log(res.data.message)
    }
})