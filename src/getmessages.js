import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import api from "./api/axios.js"
dayjs.extend(relativeTime)
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const contactContainer = document.getElementById("contactContainer")
const allmessag = document.getElementById("allmessage")
const notifyno = document.getElementById("notifyno")

const allmessages = async () => {
    try {
     const response = await api.get('/api/contact/number')
    allmessag.textContent = response.data
    } catch (error) {
        console.log(error)
    }
}
allmessages()

const allfirstfourmess = async () => {
    try {
        const response = await api.get('/api/contact/latest')
        const ress = response.data
        contactContainer.innerHTML = '';
        ress.forEach(dat => {
            const timeAgo = dayjs(dat.createdAt).fromNow()
            contactContainer.innerHTML += `
             <div class="flex gap-3 justify-between w-full">
                    <div class="flex justify-center items-center gap-1">
                  <p class="text-[12px] sm:text-md bg-purple-700 px-3 py-2 sm:py-1.5 font-bold text-white rounded-full">${dat.name.charAt(0).toUpperCase()}</p>
                    <div class="mr-6 sm:mr-10">
                    <h2 class="text-sm sm:text-md font-extrabold">${dat.name}</h2>
                    <p class="text-[10px] sm:text-[13px]">${dat.message.split(" ").slice(0, 10).join(" ")}...</p>
                    </div>
                    </div>
                    
                    <div class="flex flex-col justify-center items-center">
                    <p class="text-gray-500 text-[9px] sm:text-[11px]">${timeAgo}</p>
                    <div class="flex gap-2 justify-center items-center">
                       <button onclick="readmessage('${dat._id}')" class="bg-blue-500 text-[12px] md:text-md py-1 px-2 rounded-sm text-white">Read</button>
                    <button onclick="deletemessage('${dat._id}')" class="bg-red-500 text-[12px] md:text-md py-1 px-2 rounded-sm text-white">Delete</button>
                    </div>
                     </div>
                </div>
            `
        });
    } catch (error) {
        console.log(error)
    }
}
allfirstfourmess()