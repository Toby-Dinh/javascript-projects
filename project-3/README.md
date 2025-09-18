## Joke Generator

<img width="748" height="713" alt="image" src="https://github.com/user-attachments/assets/ac31119f-dff1-4613-a5b6-6adca16e27e4" />

## HTML - Creating the structure of our website

What we will need to add:
- The heading
- The joke display
- The "Generate Joke" Button

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joke Generator</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="container">
        <h1 class="heading">Joke Generator</h1>
        <p id="jokeDisplay" class="jokeDisplay"></p>
        <button id="generateJokeBtn" class="generateJokeBtn">Generate Joke</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

We can add some styling in our CSS file

Here is a sample: 
```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: lightblue;
}

.container {
    text-align: center;
    background-color: white;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    padding: 40px;
    border-radius: 15px;
    width: 400px; 
    height: 300px;
}

.generateJokeBtn {
    width: auto;
    align-self: center; 
    border: none;
    background-color: #89CFF0;
    padding: 10px;
    border-radius: 15px;
    margin-top: 10px;
}

button:hover {
    opacity: 0.8;
}
```

---

## Writing functionality for our code

### Initiate the variables

```js
const jokeDisplay = document.getElementById("jokeDisplay");
const generateJokeBtn = document.getElementById("generateJokeBtn");
```

Then make an array for our jokes

```js
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
```

Start with the first joke by letting the index be 0

```js
let index = 0
```

We then make a function for when we click on the generate joke button

```js
generateJokeBtn.onclick = () => {
    ...
};
```

Display the joke from the array at the current index
```js
jokeDisplay.innerText = jokeArray[index];
```

We then need to increment the index by 1 to move on to the next joke in the array

```js
index++;
```

Reset once we've reached the end of the array
```js
if (index >= jokeArray.length) {
    index = 0;
}
```
