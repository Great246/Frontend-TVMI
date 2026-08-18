import api from "./api/axios.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const Deskopregistedusers = document.getElementById("Deskopregistedusers")
const mobileusersown = document.getElementById("mobileusersown")


const getLatestUsers = async () => {
  try {
    const user = await api.get("/api/user/", {withCredentials: true,})
        const users = user.data

        Deskopregistedusers.innerHTML = '';
        mobileusersown.innerHTML = '';
        users.forEach((user, index) => {
          const date = new Date(user.createdAt)
          const formattedDate = date.toLocaleDateString("en-GB", {
            day: "numeric", month: "long", year: "numeric"
          })
          Deskopregistedusers.innerHTML += `
          <tr class="border-b hover:bg-gray-50">
         <td class="px-5 py-4">${index + 1}</td>
         <td class="px-5 py-4">${user.fullname}</td>
         <td class="px-5 py-4">${user.Email}</td>
         <td class="px-5 py-4"><span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">${user.role}</span></td>
         <td class="px-5 py-4">${formattedDate}</td>
         <td class="px-5 py-4">
            <button onclick="deleteUser('${user._id}')" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">Delete</button>
         </td>
     </tr>
          `
          mobileusersown.innerHTML += `
          <div class="gap-3 flex flex-col shadow-lg w-70 sm:w-100 p-3">
            <div>
           <p>Name: ${user.fullname}</p>
           <p>Email: ${user.Email}</p>
           <p><span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">${user.role}</span></p>
            </div>
            <div>
          <div class="flex gap-1 justify-center items-center"><i class="ri-calendar-event-line"></i><p class="font-bold text-sm">Joined: ${formattedDate}</p></div>
            </div>
            <div class="flex gap-4 justify-center items-center">
           <button onclick="deleteUser('${user._id}')" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">Delete</button>
            </div>
        </div>  
          `
        });
  } catch (error) {
    console.log(error)
  }
}
getLatestUsers()

window.deleteUser = async (id) => {
  try {
  const deletee = await api.delete(`/api/user/${id}`, {withCredentials: true})

  const deleted = deletee.data
  if (deleted) {
    Toastify({
                text: deleted.message,
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            }).showToast();
     getLatestUsers()
  }
  } catch (error) {
    console.log(error)
  }

}