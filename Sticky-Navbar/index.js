const navbarEl = document.getElementById("navbar");
const textEl = document.getElementById("text");

console.log(textEl.offsetTop);
console.log(navbarEl.offsetHeight);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > textEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
})