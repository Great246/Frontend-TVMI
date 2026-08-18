import api from "./api/axios.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import lightGallery from "lightgallery";
const galleryForm = document.getElementById("galleryForm")
const creategallerymodal = document.getElementById("creategallerymodal")
const showmodel = document.getElementById("showmodel")
const closemodal = document.getElementById("closemodal")
const gallery = document.getElementById("gallery")

import 'lightgallery/css/lightgallery-bundle.css';
let lginstance = null

showmodel.addEventListener('click', ()=> {
    creategallerymodal.classList.remove("hidden")
})

closemodal.addEventListener('click', ()=> {
    creategallerymodal.classList.add("hidden")
})

galleryForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formdata = new FormData(galleryForm)
    const res = await api.post('/api/gallery/create', formdata, {headers: {"Content-Type": "multipart/form-data"}})

    if (res.data.success) {
         Toastify({
                             text: res.data.message,
                             duration: 3000,
                             gravity: "top",
                             position: "right",
                             backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                         }).showToast();
            galleryForm.reset()
            creategallerymodal.classList.add("hidden")
    }
})
async function getAllgallery() {
    const res = await api.get('/api/gallery/admGallery')
    gallery.innerHTML = ''
    res.data.forEach(image => {
        gallery.innerHTML += `
        <div class="flex flex-col justify-center items-center shadow p-3 rounded-md gap-2">
             <a href="${image.image}" class="flex w-full justify-center items-center" loading="lazy">
            <img src="${image.image}" class="w-60 max-h-60 bg-cover bg-center">
           </a>
           <button onclick="deleteimage('${image._id}')" class="bg-red-500 border text-sm rounded-sm text-white py-0.5 px-2">Delete</button>
           </div>
        `
         if (lginstance) {
            lginstance.destroy()
           }
         lginstance = lightGallery(gallery, {
    speed: 500,
    selector: 'a',
});
    });
}
getAllgallery()


window.deleteimage = async (id) => {
    const response = await api.delete(`/api/gallery/${id}`)
    if (response.data.success) {
        Toastify({
            text: response.data.message,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        getAllgallery()
    }
}