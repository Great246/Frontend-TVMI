import api from "./api/axios.js";
const totalvisitors = document.getElementById("totalvisitors")

const getmontlyvisitors = async () => {
    const res = await api.get('/api/visit/get')
    totalvisitors.textContent = res.data
}
getmontlyvisitors()