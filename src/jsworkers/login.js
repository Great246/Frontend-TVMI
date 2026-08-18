import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import api from "../api/axios.js";
const loginform = document.getElementById("loginform")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const logoutBox = document.querySelectorAll(".logoutBox")

if (loginform) {
    loginform.addEventListener("submit", async (e)=> {
    e.preventDefault()
     
   try { 
    const Email = document.getElementById("Email").value
    const password = document.getElementById("password").value
    if (!Email || !password) {
        Toastify({
            text: "All fields are required",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ef4444",
        }).showToast()
        
    }
    if (!emailRegex.test(Email)) {
        Toastify({
            text: "email is not correct",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ef4444",
        }).showToast()
        return
    }
    if (password.length < 8) {
        Toastify({
            text: "password must be at least 8 characters",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ef4444",
        }).showToast()
        return
    }
    const res = await api.post('/api/auth/login',{Email, password}, {withCredentials: true})

    if (res.data.success) {
        Toastify({
            text: res.data.message,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
      
        setTimeout(()=> {
          if (res.data.user.role === "admin") {
            window.location.href = "/Admindashboard/dashbord.html"
        }  else {
            window.location.href = "/index.html"
        }  
        }, 2000)
        
    } else{
        Toastify({
        text: res.data.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#ef4444",
    }).showToast()
    }
   } catch (error) {
    console.log(error.res?.data)
   }      
})

}



