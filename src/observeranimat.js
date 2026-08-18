const header = document.querySelector('.Head')
const MainSec = document.querySelectorAll('.MainSec')

const headerinterOptions = {
   threshold: 0
};

const headerinter = new IntersectionObserver(function (entries, headerinter) {
   entries.forEach(entry => {
      if (!entry.isIntersecting) {
         header.classList.add("bg-black")
      } else {
         header.classList.remove("bg-black")
      }
   });
}, headerinterOptions);

MainSec.forEach(element => {
   headerinter.observe(element)
});




const about = document.querySelectorAll(".about")

const about1Options = {
   threshold: 0.1
};

const aotherObserver = new IntersectionObserver (function (entries, aotherObserver) {
   entries.forEach(entry => {
     if(entry.isIntersecting) {
      entry.target.classList.remove( "opacity-0", "translate-y-7")
      entry.target.classList.add( "opacity-100", "translate-y-0")
     } else {
      return;
     } aotherObserver.unobserve(entry.target)
   });
}, about1Options)

about.forEach(element => {
   aotherObserver.observe(element)
});



const aboutpic = document.querySelectorAll(".aboute")

const about1Options2 = {
   threshold: 0.5
};

const aotherObserver2 = new IntersectionObserver (function (entries, aotherObserver2) {
   entries.forEach(entry => {
     if(entry.isIntersecting) {
      entry.target.classList.remove( "opacity-0", "-translate-x-5")
      entry.target.classList.add( "opacity-100", "-translate-x-0")
     } else {
      return;
     } aotherObserver2.unobserve(entry.target)
   }); 
}, about1Options2)

aboutpic.forEach(element => {
   aotherObserver2.observe(element)
});



const aboutpicri = document.querySelectorAll(".aboutee")

const about1Options3 = {
   threshold: 0.5
};

const aotherObserver3 = new IntersectionObserver (function (entries, aotherObserver3) {
   entries.forEach(entry => {
     if(entry.isIntersecting) {
      entry.target.classList.remove( "opacity-0", "translate-x-5")
      entry.target.classList.add( "opacity-100", "translate-x-0")
     } else {
      return;
     } aotherObserver3.unobserve(entry.target)
   }); 
}, about1Options3)

aboutpicri.forEach(element => {
   aotherObserver3.observe(element)
});

