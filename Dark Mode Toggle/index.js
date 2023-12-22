const bodyEl = document.querySelector("body");
const inputEl = document.querySelector(".input");
// const labelEl = document.querySelector(".label");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBackgroud();

bodyEl.addEventListener("input", ()=>{
    updateBackgroud();
    UpdateLocalStorage();
})

function updateBackgroud(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }
    else{
        bodyEl.style.background = "white";
    }
}

function UpdateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}