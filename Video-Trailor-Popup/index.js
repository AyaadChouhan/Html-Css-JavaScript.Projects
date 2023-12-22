const btnEl = document.querySelector(".btn");
const trailorContainorEl = document.querySelector(".trailor-containor")

const closeEl = document.querySelector(".close-icon");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    trailorContainorEl.classList.remove("active");
});

closeEl.addEventListener("click",()=>{
    trailorContainorEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})