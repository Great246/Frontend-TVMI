import api from "./api/axios.js"
import dayjs from 'dayjs'
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const modal = document.getElementById("modal")
const name = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")
const closemodal = document.getElementById("closemodal")
const messages = document.getElementById("messages")

const getAllprayers = async () => {
    const res = await api.get('/api/contact/getcontact')
    messages.innerHTML = ''
        res.data.contacts.forEach(contact => {
            const timeAgo = dayjs(contact.createdAt).fromNow()
            messages.innerHTML += `
            <div class="flex gap-3 justify-between items-center p-2 md:w-130 lg:w-300">
            
                    <div class="flex justify-center items-center gap-1">
                  <p class="text-[12px] sm:text-md bg-purple-700 px-3 py-2 sm:py-1.5 font-bold text-white rounded-full">${contact.name.charAt(0).toUpperCase()}</p>
                    <div class="mr-6 sm:mr-10">
                    <h2 class="text-sm sm:text-md font-extrabold">${contact.name}</h2>
                    <p class="text-[10px] sm:text-[13px]">${contact.message.split(" ").slice(0, 10).join(" ")}...</p>
                    </div>
                    </div>
                    
                    <div class="flex flex-col justify-center items-center">
                    <p class="text-gray-500 text-[9px] sm:text-[11px]">${timeAgo}</p>
                    <div class="flex gap-2 justify-center items-center">
                       <button onclick="readmessage('${contact._id}')" class="bg-blue-500 text-[12px] md:text-md py-1 px-2 rounded-sm text-white">Read</button>
                    <button onclick="deletemessage('${contact._id}')" class="bg-red-500 text-[12px] md:text-md py-1 px-2 rounded-sm text-white">Delete</button>
                    </div>
                     </div>
                </div>
            `
        });
}
getAllprayers()

window.readmessage = async (id) => {
    try {
      const response = await api.get(`/api/contact/get/${id}`)
      console.log(response.data)

      name.textContent = response.data.name
      email.textContent = response.data.email
      subject.textContent = response.data.subject
      message.textContent = response.data.message

      modal.classList.remove("hidden")
    } catch (error) {
        console.log(error)
    }
}
closemodal.addEventListener('click', ()=> {
   modal.classList.add("hidden") 
})

window.deletemessage = async (id) => {
    try {
        const response = await api.delete(`/api/contact/${id}`)
        if (response.data.success) {
            Toastify({
    text: response.data.message,
    duration: 3000,
    gravity: "top",
   position: "center",
   backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
     }).showToast();
     getAllprayers()
        }
    } catch (error) {
        console.log(error)
    }
}