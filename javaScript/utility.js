function hideElementById(id) {
    const findElement = document.getElementById(id);
    findElement.classList.add("hidden");
}
function showElementById(id) {
    const findElement = document.getElementById(id);
    findElement.classList.remove("hidden")
}
function generateBackground(id) {
    const findElement = document.getElementById(id);
    findElement.classList.add("bg-orange-400");
}
function removeBackground(id) {
    const findElement = document.getElementById(id);
    findElement.classList.remove("bg-orange-400");
}

function generateAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");
    const random = Math.round(Math.random() * 25);
    return alphabets[random];
}
