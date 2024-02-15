const finalScore = document.getElementById("final-score");
const output = document.getElementById("output");
const yourScore = document.getElementById("your-score");
const YourLife = document.getElementById("your-life");
let score = 0;
let life = 5;

// KeyboardEvent
// function handleKeyUp(event) {
//     const userKey = event.key;
//     console.log(userKey, "by keyboard");
//     const displayKey = document.getElementById("output").innerText.toLowerCase();

//     if (userKey === displayKey) {
//         console.log("You got a point");
//         gamingLoop();
//         removeBackground(displayKey);
//         score += 1;
//         yourScore.innerText = score;
//         finalScore.innerText = score;
//     }
//     else {
//         life -= 1;
//         if (life === 0) {
//             gameOver(displayKey);
//         }
//         YourLife.innerText = life;
//     }
//     if (userKey === "Escape") {
//         gameOver();
//     }
// }

function mobileView(event) {
    const userKey = event.target.value.toLowerCase();
    console.log(userKey, "by input");
    const displayKey = document.getElementById("output").innerText.toLowerCase();

    if (userKey === displayKey) {
        //console.log("You got a point");
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
//window.addEventListener("keyup", handleKeyUp);
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

}
function againPlay() {
    play();
}
function home() {
    location.reload();
}