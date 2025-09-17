const userInput = document.getElementById("userInput");
const enterBtn = document.getElementById("enterBtn");
const wordDisplay = document.getElementById("wordDisplay");
enterBtn.onclick = function() {
    wordDisplay.innerText = userInput.value;
}
