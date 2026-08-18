import api from "./api/axios.js"

const postVisitors = async () => {
    try {
       const res = await api.post('/api/visit/')
    } catch (error) {
        console.log(error)
    }
    
}
postVisitors()