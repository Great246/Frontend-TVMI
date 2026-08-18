import api from "./api/axios.js";
import lightGallery from "lightgallery";
import 'lightgallery/css/lightgallery-bundle.css';
const galleryweb = document.getElementById("galleryweb") 

let lginstance = null
async function getGallery() {
    try {
        const res = await api.get('/api/gallery/webGallery')
    galleryweb.innerHTML = ''
    res.data.forEach(image => {
        galleryweb.innerHTML += `
        <a href="${image.image}" class="flex w-full justify-center items-center" loading="lazy">
            <img src="${image.image}" class="w-80 max-h-80 bg-cover bg-center">
           </a>  `
           if (lginstance) {
            lginstance.destroy()
           }
         lginstance = lightGallery(galleryweb, {
    speed: 500,
    selector: 'a',
});
    }) 
    } catch (error) {
        console.log(error)
    }
}
getGallery()


