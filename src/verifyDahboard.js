import axios from "axios";
import api from "./api/axios.js";

const checkAdmin = async () => {
  console.log("getuser is running");
  try {
    const det = await api.get("/api/auth/me", {
      withCredentials: true,})

      if (det.data.user.role !== "admin") {
        window.location.href = "/"
        return
      }
       document.body.classList.remove("hidden")
    } catch (error) {
    window.location.href = "/index.html"
    }}

    checkAdmin()