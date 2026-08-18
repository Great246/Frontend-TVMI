import api from "../api/axios.js";
const resetform = document.getElementById("resetform")

resetform.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (!password || !confirmPassword) {
        return console.log("All fields are required")
    } else if (password !== confirmPassword) {
        return console.log("Password doesn't match")
    }
    const res = await api.post(`/api/auth/resetPassword/${token}`, { password })
   
    if (res.data.success) {
        window.location.href = "/auth/login.html"
        resetform.reset()
    } else {
        console.log(res.data.message)
    }
})