const kits = ["crash", "drum", "flute", "snare"]

const containerEl = document.querySelector(".container");

kits.forEach((kit)=>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");

    btnEl.innerText = kit;
    containerEl.appendChild(btnEl);

    // btnEl.style.backgroundImage = URL(C:\Users\Owner\OneDrive\Desktop\Pro_tutorial.js\Drum kits\images)
    const audioEl = document.createElement("audio");

    containerEl.appendChild(audioEl);
    audioEl.src = "Drum kits\Sounds" + kit + ".mp3"
});