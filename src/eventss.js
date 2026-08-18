import axios from "axios";
import api from "./api/axios.js";
const eventplace = document.getElementById("eventplace")
const getUsers = async () => {
    const res = await api.get("/api/events/")

    const mainevents = res.data
  console.log(mainevents)
    mainevents.forEach(event => {
        console.log(event)
        eventplace.innerHTML += `
        <div class="max-w-90 rounded-lg flex flex-col gap-2">
    <div class="relative">
        <img src="${event.image}" alt="" class="rounded-lg w-80 md:w-100">
        <div class="flex absolute top-3 left-3 flex-col justify-center w-15 text-white rounded-lg bg-white/10 backdrop-blur-lg items-center border-2 border-[#D4AF37] text-center">
            <p class="font-bold">${event.month}</p>
            <p class="text-3xl font-extrabold">${event.day}</p>
            <p class="font-bold">${event.year}</p>
        </div>
    </div>
    <div class="p-1 flex text-sm gap-1 justify-between items-center">
        <p>${event.description}</p>
        <div class="bg-[#D4AF37] p-1 text-white font-bold rounded-sm"><p>${event.time}</p></div>
        
    </div>
    <div>
    <p class="text-2xl font-extrabold">${event.occation}</p>
    <p class="p-1 text-sm text-red-500">${event.location}</p>
    </div>
</div>
        `
    });
    
}
getUsers()