import api from "../api/axios.js";
const forgotform = document.getElementById("forgotform")

forgotform.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const Email = document.getElementById("email").value
   const res = await api.post('/api/auth/forgotpassword', { Email })
   if (res.data.success) {
    console.log(res.data.message)
   } else {
    console.log(res.data.message)
   }
})