// throw new Error("GREATMAN MAIN JS TEST")
const preloader = document.getElementById("preloader")
console.log("GREATMAN 123456")
// const header = document.querySelectorAll('.Head')
// const MainSec = document.querySelectorAll('.MainSec')

// console.log("main js is running")
// window.addEventListener('load', () => {
//    // document.getElementById("preloader").style.display = "none"
//    console.log("PAGE LOADED FIRE")
//    const preloader = document.getElementById("preloader")
//    console.log("PRELOADER", preloader)
// })

console.log("MAIN HAS STARTED", preloader)
if (preloader) {
   preloader.style.display = "none"
}

// const imagecont = document.querySelector(".images")
// const totalimages = document.querySelectorAll(".images img");

// const prevbtn = document.getElementById("prevBtn")
// const nextbtn = document.getElementById("NextBtn")
// let index = 1;
// const size = totalimages[0].clientWidth;
// imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';

// nextbtn.addEventListener('click', ()=> {
//     if (index >= totalimages.length - 1) return;
//     imagecont.style.transition = "transform 0.4s ease-in-out"
//     index++;
//    imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';
// })

// prevbtn.addEventListener('click', ()=> {
//     if (index <=0) return;
//     imagecont.style.transition = "transform 0.4s ease-in-out"
//     index--;
//    imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';
// })

// imagecont.addEventListener('transitionend', () => {
//    if (totalimages[index].id === 'lastclone') {
//     imagecont.style.transition = "none"
//     index = totalimages.length - 2;
//     imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';
//    }

//    if (totalimages[index].id === 'firstClone') {
//     imagecont.style.transition = "none"
//     index = totalimages.length - index;
//     imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';
//    }
// })



// const headerinterOptions = {
//    threshold: 0
// };

// const headerinter = new IntersectionObserver(function (entries, headerinter) {
//    entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//          header.classList.add("bg-black")
//       } else {
//          header.classList.remove("bg-black")
//       }
//    });
// }, headerinterOptions);

// MainSec.forEach(element => {
//    headerinter.observe(element)
// });

// const about = document.querySelectorAll(".about")

// const about1Options = {
//    threshold: 0.5
// };

// const aotherObserver = new IntersectionObserver (function (entries, aotherObserver) {
//    entries.forEach(entry => {
//      if(entry.isIntersecting) {
//       entry.target.classList.remove( "opacity-0", "translate-y-7")
//       entry.target.classList.add( "opacity-100", "translate-y-0")
//      } else {
//       return;
//      } aotherObserver.unobserve(entry.target)
//    });
// }, about1Options)

// about.forEach(element => {
//    aotherObserver.observe(element)
// });



// const aboutpic = document.querySelectorAll(".aboute")

// const about1Options2 = {
//    threshold: 0.5
// };

// const aotherObserver2 = new IntersectionObserver (function (entries, aotherObserver2) {
//    entries.forEach(entry => {
//      if(entry.isIntersecting) {
//       entry.target.classList.remove( "opacity-0", "-translate-x-5")
//       entry.target.classList.add( "opacity-100", "-translate-x-0")
//      } else {
//       return;
//      } aotherObserver2.unobserve(entry.target)
//    }); 
// }, about1Options2)

// aboutpic.forEach(element => {
//    aotherObserver2.observe(element)
// });



// const aboutpicri = document.querySelectorAll(".aboutee")

// const about1Options3 = {
//    threshold: 0.5
// };

// const aotherObserver3 = new IntersectionObserver (function (entries, aotherObserver3) {
//    entries.forEach(entry => {
//      if(entry.isIntersecting) {
//       entry.target.classList.remove( "opacity-0", "translate-x-5")
//       entry.target.classList.add( "opacity-100", "translate-x-0")
//      } else {
//       return;
//      } aotherObserver3.unobserve(entry.target)
//    }); 
// }, about1Options3)

// aboutpicri.forEach(element => {
//    aotherObserver3.observe(element)
// });

