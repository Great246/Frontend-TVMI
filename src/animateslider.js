const imagecont = document.querySelector(".images")
const totalimages = document.querySelectorAll(".images img");
const prevbtn = document.getElementById("prevBtn")
const nextbtn = document.getElementById("NextBtn")

console.log("animateslider is working", imagecont)


let index = 1;
const size = totalimages[0].clientWidth;
imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';

nextbtn.addEventListener('click', ()=> {
    if (index >= totalimages.length - 1) return;
    imagecont.style.transition = "transform 0.4s ease-in-out"
    index++;
   imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';
})

prevbtn.addEventListener('click', ()=> {
    if (index <=0) return;
    imagecont.style.transition = "transform 0.4s ease-in-out"
    index--;
   imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';
})

imagecont.addEventListener('transitionend', () => {
   if (totalimages[index].id === 'lastclone') {
    imagecont.style.transition = "none"
    index = totalimages.length - 2;
    imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';
   }

   if (totalimages[index].id === 'firstClone') {
    imagecont.style.transition = "none"
    index = totalimages.length - index;
    imagecont.style.transform =  'translateX(' + (-size * index) + 'px)';
   }
})
