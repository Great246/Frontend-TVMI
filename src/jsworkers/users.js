import axios from 'axios'
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import api from "../api/axios.js";

const loginform = document.getElementById("loginform")
const signupform = document.getElementById("signupform")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


signupform.addEventListener("submit", async (e)=> {
   e.preventDefault()

   try {
    const fullname = document.getElementById("fullname").value
const Username = document.getElementById("Username").value
const Email = document.getElementById("Email").value
const phonenumber = document.getElementById("phonenumber").value
const password = document.getElementById("Password").value
const confirmPassword = document.getElementById("confirmPassword").value

   
    if (!fullname || !Username || !Email || !phonenumber || !password || !confirmPassword) {
        Toastify({
            text: "fill the details",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ef4444",
        }).showToast()
        return
    }
    if (!emailRegex.test(Email)) {
        Toastify({
            text: "Email is not correct",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ef4444",
        }).showToast()
        return
    }
    if (password !== confirmPassword) {
        Toastify({
            text: "Password does not match",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ef4444",
        }).showToast()
        return
    }
    if (password.length < 8) {
        Toastify({
            text: "password must be 8 characters",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ef4444",
        }).showToast()
    }
    
    const res = await api.post('/api/auth/register',
        {fullname, Username, Email, phonenumber,password, confirmPassword})

    if (res.data.success) {
        Toastify({
            text: res.data.message,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff0000, #ff4d4d)",
        }).showToast()
    } else {
        Toastify({
        text: res.data.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#ef4444",
    }).showToast()
    }
    setTimeout(() => {
window.location.href = "login.html"
    }, 2000)
   } catch (error) {
    
   }

 
    
})