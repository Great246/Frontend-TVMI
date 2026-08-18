import axios from 'axios'
const loader = document.getElementById("loading")

function showloading() {
    loader.classList.remove("hidden")
    loader.classList.add("flex")
}
function hideloading() {
    loader.classList.add("hidden")
    loader.classList.remove("flex")
}
const api = axios.create({
    baseURL: "https://backend-tvmi.onrender.com", withCredentials: true
})

api.interceptors.request.use((config) => {
    showloading();
    return config;
})
api.interceptors.response.use((response) => {
    hideloading()
    return response
}, async (error) => {
    hideloading()
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        try {
           await api.post('/api/auth/refresh')
           return api(originalRequest) 
        } catch (refreshError) {
            window.location.href = "/auth/login.html"
            return Promise.reject(refreshError)
        }
    }
    return Promise.reject(error)
}
)
export default api