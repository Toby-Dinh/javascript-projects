const jokeDisplay = document.getElementById("jokeDisplay");
const generateJokeBtn = document.getElementById("generateJokeBtn");

const jokeArray = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why can't your nose be 12 inches long? Because then it would be a foot!",
    "Why did the computer go to the doctor? Because it caught a virus!",
    "Why do bees have sticky hair? Because they use honeycombs!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the cookie go to the hospital? Because he felt crummy!"
]

index = 0

generateJokeBtn.onclick = () => {
    jokeDisplay.innerText = jokeArray[index];

    index++;

    if (index >= jokeArray.length) {
        index = 0;
    }
};