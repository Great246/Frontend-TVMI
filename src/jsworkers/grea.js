import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import api from "../api/axios.js";
const loginBox = document.querySelectorAll(".loginBox");
const logintext = document.querySelectorAll(".logintext");
const logoutBox = document.querySelectorAll(".logoutBox");
const getUser = async () => {
  try {
    const response = await api.get("/api/auth/me", {
      withCredentials: true,
    });

    if (response.data.success) {
      loginBox.forEach(btn => btn.classList.add("hidden"))
      logoutBox.forEach(btn => btn.classList.remove("hidden"));
      logintext.forEach(text => text.textContent = `Hi ${response.data.user.Username}`)
    } else {
        Toastify({
            text: response.data.message,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff0000, #ff4d4d)",
          }).showToast();
          loginBox.forEach(btn => btn.classList.remove("hidden"))
      logoutBox.forEach(btn => btn.classList.add("hidden"));
    }
  } catch (error) {
    console.log(error)
  }
};

getUser();

const refreshToken = async () => {
  try {
    const response = await api.post("/api/auth/refresh")
    console.log("Refreshful successful:", response.data)
    return true
  } catch (error) {
    console.log("Refrsh failed:", error.response?.data)
    return false
  }
}
refreshToken()