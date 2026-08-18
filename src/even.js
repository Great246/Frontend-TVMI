import api from "./api/axios.js";

const eventsboxess = document.getElementById("eventsboxess")


const get4Events = async () => {
    const res = await api.get("/api/events/latest")
    const fourevent = res.data

    fourevent.forEach(event => {
        eventsboxess.innerHTML += `
        <div class="flex justify-between w-full gap-9 item-center border-b p-2 border-gray-200">
                <div class="flex gap-4 justify-center items-center">
                  <div class="border-2 hidden sm:flex flex-col p-1 justify-center items-center">
                    <p class="text-sm">${event.month}</p>
                    <p class="text-xl font-bold">${event.day}</p>
                    <p class="text-sm">${event.year}</p>
                </div>
                 <div>
               <p class="text-[17px]">${event.occation}</p>
               <p class="text-[17px]">${event.time}</p>
               <p class="text-[17px]">${event.location}</p>
                 </div>
                </div>

                <div class="flex justify-center items-center gap-3">
             <button class="bg-white border text-sm rounded-sm text-blue-500 border-blue-500 py-0.5 px-2">Edit</button>
             <button onclick="deleteevents('${event._id}')" class="bg-white border text-sm rounded-sm text-red-500 border-red-500 py-0.5 px-2">Delete</button>
                </div>
             </div>
        `
    });
}
get4Events()
