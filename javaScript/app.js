// const intro = document.getElementById("intro");
// const playground = document.getElementById("play-ground");
const finalScore = document.getElementById("final-score");
const output = document.getElementById("output");
const yourScore = document.getElementById("your-score");
const YourLife = document.getElementById("your-life");
let score = 0;
let life = 5;

function handleKeyUp(event) {
    const userKey = event.key;
    const displayKey = document.getElementById("output").innerText.toLowerCase();

    if (userKey === displayKey) {
        console.log("You got a point");
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

document.addEventListener("keyup", handleKeyUp);


function gameOver(r) {
    showElementById("final-section");
    hideElementById("play-ground");
    removeBackground(r);

}

//setInterval(gamingLoop, 2000);
//setInterval(gamingLoop, 1000);
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
}
function againPlay() {
    play();
    //showElementById("play-ground");
    //hideElementById("final-score");
    score = 0;
    yourScore.innerText = score;
    life = 5;
    YourLife.innerText = life;
    //console.log(location.reload())
}
function home() {
    location.reload();
}
