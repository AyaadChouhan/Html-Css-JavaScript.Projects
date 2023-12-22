const tabs = document.querySelector(".tabs");
const contents = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".button");

tabs.addEventListener("click", (event)=>{
    const id = event.target.dataset.id;
   console.log(id);
    if (id) {
        btns.forEach(btn=>{
            btn.classList.remove("live");
        });
        event.target.classList.add("live");
        
        contents.forEach(content =>{
            content.classList.remove("live");
        });
        const contElm = document.getElementById(id);
            contElm.classList.add("live");
            console.log(contElm)
    };

});

