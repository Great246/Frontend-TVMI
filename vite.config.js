import { defineConfig } from "vite"
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "Aboutus.html"),
                aboutwho: resolve(__dirname, "AboutWho.html"),
                contact: resolve(__dirname, "contact.html"),
                events: resolve(__dirname, "events.html"),
                gallery: resolve(__dirname, "gallery.html"),
                give: resolve(__dirname, "give.html"),
                ministry: resolve(__dirname, "ministry.html"),
                admindashboard: resolve(__dirname, 'Admindashboard/dashbord.html'),
                adminevents: resolve(__dirname, 'Admindashboard/events.html'),
                adminImages: resolve(__dirname, 'Admindashboard/images.html'),
                adminmembers: resolve(__dirname, 'Admindashboard/members.html'),
                adminmessages: resolve(__dirname, 'Admindashboard/messages.html'),
                adminprayer: resolve(__dirname, 'Admindashboard/prayerreq.html'),

                login: resolve(__dirname, 'auth/login.html'),
                register: resolve(__dirname, 'auth/register.html'),
                forgotpassword: resolve(__dirname, 'auth/forgotpassword.html'),
                resetPassword: resolve(__dirname, 'auth/resetpassword.html'),
                verifyEmail: resolve(__dirname, 'auth/verifyemail.html'),
            }
        }
    }
})
