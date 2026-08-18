import api from "./api/axios.js"
const notifyno = document.querySelectorAll(".notifyno")

const getno = async () => {
    try {
        const response = await api.get('/api/contact/fivehours')
    notifyno.forEach(notif => {
        notif.textContent = response.data
        notif.addEventListener('click', ()=> window.location.href = '/Admindashboard/messages.html')
    })
    } catch (error) {
        console.log(error)
    }
}
getno()