import axios from "axios"
import dayjs from 'dayjs'
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import relativeTime from 'dayjs/plugin/relativeTime'
import api from "./api/axios.js"
dayjs.extend(relativeTime)

const contaner = document.getElementById("prayercontainer")
const totalprayer = document.getElementById("totalprayer")

const getlatest = async () => {
    try {
        const latest = await api.get("/api/pray/getLatest", {withCredentials: true})
        const result = latest.data
        contaner.innerHTML = ""

        if (result.success && result.alllastest.length > 0) {
            result.alllastest.forEach(dat => {
                const timeAgo = dayjs(dat.createdAt).fromNow()
              const card =  ` <div class="flex gap-3 justify-between">
                    <div class="flex justify-center items-center gap-1">
                  <p class="text-[12px] sm:text-md bg-purple-700 px-3 py-2 sm:py-1.5 font-bold text-white
                  rounded-full">${dat.name.charAt(0).toUpperCase()}</p>
                    <div class="mr-6 sm:mr-10">
                    <h2 class="text-sm sm:text-md font-extrabold">${dat.name}</h2>
                    <p class="text-[10px] sm:text-[13px]">${dat.messag.split(" ").slice(0, 10).join(" ")}...</p>
                    </div>
                    </div>
                    
                    <div>
                    <p class="text-gray-500 text-[11px] sm:text-sm">${timeAgo}</p> 
                    </div>
                </div>`;
                contaner.innerHTML += card
            });
        } else {
            contaner.innerHTML = "<p>no prayers found</p>"
        }
    } catch (error) {
        console.log(error) 
    }
    
}
getlatest()

const totalprayers = async () => {
    try {
        const total = await api.get("/api/pray/totalprayer")
        
        totalprayer.textContent = total.data
    } catch (error) {
        console.log(error)
    }
}
totalprayers()