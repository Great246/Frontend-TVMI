import api from "./api/axios.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


const showmodel = document.getElementById("showmodel")
const createeventmodal = document.getElementById("createeventmodal")
const closemodal = document.getElementById("closemodal")
const form = document.getElementById("eventForm")
const UpdateForm = document.getElementById("UpdateventForm")
const eventsboxes = document.getElementById("eventsboxes")
const upcreateeventmodal = document.getElementById("upcreateeventmodal")
const upclosemodal = document.getElementById("upclosemodal")

showmodel.addEventListener('click', ()=> {
    createeventmodal.classList.remove("hidden")
})
closemodal.addEventListener('click', ()=> {
    createeventmodal.classList.add("hidden")
})
upclosemodal.addEventListener('click', ()=> {
    upcreateeventmodal.classList.add("hidden")
})

form.addEventListener('submit', async (e)=> {
   e.preventDefault()

   const formData = new FormData(form)

   try {
    const res = await api.post("/api/events/create", formData,
        {headers: {"Content-Type": "multipart/form-data"}})

        const eventsitem = res.data

   } catch (error) {
    console.log(error)
   }
})

const getUsers = async () => {
    const res = await api.get("/api/events/allspecialeventes")

    const mainevents = res.data
     
    eventsboxes.innerHTML = '';

    mainevents.forEach(event => {
        eventsboxes.innerHTML += `
        <div class="flex justify-between lg:w-300 w-full sm:w-150 gap-9 item-center border-b p-2 border-gray-200">
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
             <button onclick="editEvents('${event._id}')" class="bg-white border text-sm rounded-sm text-blue-500 border-blue-500 py-0.5 px-2">Edit</button>
             <button onclick="deleteevents('${event._id}')" class="bg-white border text-sm rounded-sm text-red-500 border-red-500 py-0.5 px-2">Delete</button>
                </div>
             </div>
        `
    });
    
}
getUsers()

window.deleteevents = async (id) => {
    try {
     const deleted = await api.delete(`/api/events/${id}`)
     if(deleted.data.success) {
          Toastify({
                     text: deleted.data.message,
                     duration: 3000,
                     gravity: "top",
                     position: "right",
                     backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                 }).showToast();
                 getUsers()
     } else {
        console.log(deleted.res.message)
     }
    } catch (error) {
        console.log(error)
    }
    
}
let editedid;
window.editEvents = async (id) => {
    try {
     const res = await api.get(`/api/events/each/events/${id}`)
    if (res.data.success) {
        const event = res.data.event
         document.getElementById("month").value = event.month
         document.getElementById("day").value = event.day
         document.getElementById("year").value = event.year
         document.getElementById("description").value = event.description
         document.getElementById("time").value = event.time
         document.getElementById("occation").value = event.occation
         document.getElementById("location").value = event.location
         document.getElementById("image").src = event.image
         editedid = event._id

         upcreateeventmodal.classList.remove("hidden")
    }   
    } catch (error) {
        console.log(error)
    }
}

UpdateForm.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const formData = new FormData(UpdateForm)
   const res = await api.put(`/api/events/${editedid}`, formData, {headers: {"Content-Type": "multipart/form-data"}})
   if (res.data.success) {
    Toastify({
                     text: res.data.message,
                     duration: 3000,
                     gravity: "top",
                     position: "right",
                     backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                 }).showToast();

                 UpdateForm.reset()
                 upcreateeventmodal.classList.add("hidden")
                 getUsers()
   }
   const updatedevents = res.data.event

})