import api from "./api/axios.js";

const totalregister = document.getElementById("totalregister")

const totalUsers = async () => {
    const total = await api.get("/api/user/count", {
      withCredentials: true,
    })
    const tot = total.data
    totalregister.innerHTML = tot
}
totalUsers()