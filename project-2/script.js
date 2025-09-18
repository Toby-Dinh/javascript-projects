const complimentBtn = document.getElementById("complimentBtn");
const displayMessage = document.getElementById("displayMessage");

const compliments = [
    "You are awesome!",
    "You make people smile!",
    "You are amazing!"
];

const insults = [
    "You smell",
    "I hate you",
    "I don't want to be your friend"
]

let clickCount = 0;

complimentBtn.onclick = () => {
    for (let i = clickCount; i < clickCount + 1; i++) {
        displayMessage.innerText = compliments[i % compliments.length];
    }
    faceImg.src = "images/smile.png";
    clickCount++;
};

let insultClickCount = 0;

insultBtn.onclick = () => {
    for (let i = insultClickCount; i < insultClickCount + 1; i++) {
        displayMessage.innerText = insults[i % insults.length]; // show current insult
    }
    faceImg.src = "images/sad.png"; // change face back to meh
    insultClickCount++;
};