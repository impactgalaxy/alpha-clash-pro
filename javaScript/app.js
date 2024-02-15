const finalScore = document.getElementById("final-score");
const output = document.getElementById("output");
const yourScore = document.getElementById("your-score");
const YourLife = document.getElementById("your-life");
let score = 0;
let life = 5;

if (window.innerWidth < 600) {
    function mobileView(event) {
        const userKey = event.target.value.toLowerCase();
        const displayKey = document.getElementById("output").innerText.toLowerCase();

        if (userKey === displayKey) {

            gamingLoop();
            removeBackground(displayKey);
            score += 1;
            yourScore.innerText = score;
            finalScore.innerText = score;
        }
        else {
            life -= 1;
            if (life === 0) {
                gameOver(displayKey);
            }
            YourLife.innerText = life;
        }
        if (userKey === "Escape") {
            gameOver();
        }

    }
} else {
    function handleKeyUp(event) {
        const userKey = event.key.toLowerCase();

        const displayKey = document.getElementById("output").innerText.toLowerCase();

        if (userKey === displayKey) {
            gamingLoop();
            removeBackground(displayKey);
            score += 1;
            yourScore.innerText = score;
            finalScore.innerText = score;
        }
        else {
            life -= 1;
            if (life === 0) {
                gameOver(displayKey);
            }
            YourLife.innerText = life;
        }
        if (userKey === "Escape") {
            gameOver();
        }
    }
}
window.addEventListener("keyup", handleKeyUp);
const inputForMobile = document.getElementById("inputForMobile");
inputForMobile.addEventListener("keyup", mobileView);
inputForMobile.addEventListener("keyup", function (event) {
    event.target.value = "";
});
function gameOver(r) {
    showElementById("final-section");
    hideElementById("play-ground");
    removeBackground(r);
}
function gamingLoop() {
    const alphabet = generateAlphabet();
    output.innerText = alphabet;
    generateBackground(alphabet);
}
function play() {
    hideElementById("intro");
    showElementById("play-ground");
    hideElementById("final-section");
    gamingLoop();
    score = 0;
    yourScore.innerText = score;
    life = 5;
    YourLife.innerText = life;
    inputForMobile.focus();


}
function againPlay() {
    play();
}
function home() {
    location.reload();
}

document.body.addEventListener("keypress", (event) => {
    const intro = document.getElementById("intro");
    const f_section = document.getElementById("final-section")
    if (event.key === "Enter" && !intro.classList.contains("hidden")) {
        play();
        life = 6;
    };
})
document.body.addEventListener("keypress", (event) => {
    const f_section = document.getElementById("final-section")
    if (event.key === "Enter" && !f_section.classList.contains("hidden")) {
        againPlay();
        life = 6;
    };
})