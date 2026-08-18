
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import api from "./api/axios.js"
dayjs.extend(relativeTime)
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const allcontainer = document.getElementById("prayallcontainer")
const modal = document.getElementById("modal")
const modalbox = document.getElementById("modalbox")
const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const subject = document.getElementById("subject")
const closemodal = document.getElementById("closemodal")

const getallprayers = async () => {
    try {
        const prayers = await api.get("/api/pray/getallprayer")

        const prayer = prayers.data
        
       allcontainer.innerHTML = '';
        prayer.allprayers.forEach(pray => {
            const timeAgo = dayjs(pray.createdAt).fromNow()
            allcontainer.innerHTML += `
             <div class="flex gap-3 justify-between w-full">
                    <div class="flex justify-center items-center gap-1">
                  <p class="text-[12px] sm:text-md bg-purple-700 px-3 py-2 sm:py-1.5 font-bold text-white rounded-full">${pray.name.charAt(0).toUpperCase()}</p>
                    <div class="mr-6 sm:mr-10">
                    <h2 class="text-sm sm:text-md font-extrabold">${pray.name}</h2>
                    <p class="text-[10px] sm:text-[13px]">${pray.messag.split(" ").slice(0, 10).join(" ")}...</p>
                    </div>
                    </div>
                    
                    <div class="flex flex-col justify-center items-center">
                    <p class="text-gray-500 text-[9px] sm:text-[11px]">${timeAgo}</p>
                    <div class="flex gap-2 justify-center items-center">
                       <button onclick="readprayer('${pray._id}')" class="bg-blue-500 text-[12px] md:text-md py-1 px-2 rounded-sm text-white">Read</button>
                    <button onclick="deleteprayer('${pray._id}')" class="bg-red-500 text-[12px] md:text-md py-1 px-2 rounded-sm text-white">Delete</button>
                    </div>
                     </div>
                </div>
            `
        });
    } catch (error) {
        console.log(error)
    }
}
getallprayers()

window.deleteprayer = async (id) => {
    try {
         const deleted = await api.delete(`/api/pray/${id}`)

    if (deleted.data.success) {
    Toastify({
                            text: deleted.data.message,
                            duration: 3000,
                            gravity: "top",
                            position: "right",
                            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                        }).showToast();
                          getallprayers()
        }
    } catch (error) {
        console.log(error)
    }
   
}
window.readprayer = async (id) => {
    try {
        const readduser = await api.get(`/api/pray/each/${id}`)
        const prayer = readduser.data

        
            name.textContent = prayer.name
            email.textContent = prayer.email
            subject.textContent = prayer.subject
            message.textContent = prayer.messag
        modal.classList.remove("hidden")
    } catch (error) {
        console.log(error)
    }
}
closemodal.addEventListener('click', ()=> {
    modal.classList.add("hidden")
})

