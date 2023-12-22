const containorEl = document.querySelector(".containor");
const btnEl = document.querySelector(".btn");

const popupContainorEl = document.querySelector(".popup-containor");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", ()=>{
    containorEl.classList.add("active");
    popupContainorEl.classList.remove("active");
})

closeIconEl.addEventListener("click", ()=>{
    popupContainorEl.classList.add("active");
    containorEl.classList.remove("active");
})

