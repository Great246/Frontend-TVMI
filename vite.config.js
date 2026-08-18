import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "public/Aboutus.html"),
                aboutwho: resolve(__dirname, "public/AboutWho.html"),
                contact: resolve(__dirname, "public/contact.html"),
                events: resolve(__dirname, "public/events.html"),
                gallery: resolve(__dirname, "public/gallery.html"),
                give: resolve(__dirname, "public/give.html"),
                ministry: resolve(__dirname, "public/ministry.html"),
                admindashboard: resolve(__dirname, 'my-project/Admindashboard/dashbord.html'),
                adminevents: resolve(__dirname, 'my-project/Admindashboard/events.html'),
                adminImages: resolve(__dirname, 'my-project/Admindashboard/images.html'),
                adminmembers: resolve(__dirname, 'my-project/Admindashboard/members.html'),
                adminmessages: resolve(__dirname, 'my-project/Admindashboard/messages.html'),
                adminprayer: resolve(__dirname, 'my-project/Admindashboard/prayerreq.html'),

                login: resolve(__dirname, 'my-project/auth/login.html'),
                register: resolve(__dirname, 'my-project/auth/register.html'),
                forgotpassword: resolve(__dirname, 'my-project/auth/forgotpassword.html'),
                resetPassword: resolve(__dirname, 'my-project/auth/resetpassword.html'),
                verifyEmail: resolve(__dirname, 'my-project/auth/verifyemail.html'),
            }
        }
    }
})
