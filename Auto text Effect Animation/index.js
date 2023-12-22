const containerEl = document.querySelector(".container");

let career = ["Ayaad" ,"Web Developer" ,"Learner"]

let careerIndex = 0;
let characterIndex = 0;

updateText();
function updateText(){
    characterIndex++;
    containerEl.innerHTML = `<h1>I ${career[careerIndex].slice(0,1) === "A" ? "am" : "am a"} ${career[careerIndex].slice(0,characterIndex)}</h1>`;
   
   
    if(characterIndex === career[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if (career.length === careerIndex) {
        careerIndex=0;
    }

    setTimeout(updateText,400);
}