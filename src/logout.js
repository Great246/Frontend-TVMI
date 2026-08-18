import api from "./api/axios.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const logoutBox = document.querySelectorAll(".logoutBox")


logoutBox.forEach(log => {
    log.addEventListener("click", async () => {
    const logout = await api.post("/api/auth/logout",{}, {withCredentials: true})
   
    if (logout.data.success) {
        
        Toastify({
            text: logout.data.message,
            duration: 3000,
            gravity: "top",
           position: "center",
           backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
             }).showToast();
    }

    setTimeout(() => {
      window.location.href("/")  
    }, 5000);
    
})
})