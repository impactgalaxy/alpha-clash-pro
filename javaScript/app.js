// const intro = document.getElementById("intro");
// const playground = document.getElementById("play-ground");
const finalScore = document.getElementById("final-score");
const output = document.getElementById("output");
const yourScore = document.getElementById("your-score");
let score = 0;
let life = 5;
function gamingLoop() {
    const alphabet = generateAlphabet();
    output.innerText = alphabet;
    generateBackground(alphabet);
    console.log(alphabet);

    window.addEventListener("keyup", function (event) {
        if (alphabet === event.key) {
            score += 1;
            yourScore.innerText = score;
        }
        else {
            showElementById("final-section");
            hideElementById("play-ground");
            finalScore.innerText = score;
            life -= 1;
            if (life === 0) {
                showElementById("final-section");
            }
        }
    })
}

function play() {
    hideElementById("intro");
    showElementById("play-ground");
    gamingLoop();
}
function againPlay() {
    showElementById("play-ground");
    hideElementById("final-score");
    score = 0;
    yourScore.innerText = score;
}