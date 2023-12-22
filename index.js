const imgEl = document.querySelector(".bg-img");

const contEL = document.querySelector(".container");

window.addEventListener("scroll", ()=>{
    updateImg();
})

function updateImg(){
   imgEl.style.opacity = 1 - window.pageYOffset / 800;
   imgEl.style.backgroundSize = 140 - window.pageYOffset / 12 + "%";
}