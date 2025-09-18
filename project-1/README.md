## What's your favourite book?

<img width="334" height="156" alt="image" src="https://github.com/user-attachments/assets/637d2bac-4bf2-4d70-834b-deab77444083" />

## Create the structure of your website - HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mab Libs</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="container">
        <div>
            My favourite book is <span id="wordDisplay">______</span>
        </div>
        <div class="inputContainer">
            <input placeholder="Enter Book Title" id="userInput"/>
            <button id="enterBtn">Enter</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## Add Styling

Sample styling:

```css
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;              /* make body a flex container */
    justify-content: center;    /* center horizontally */
    align-items: center;        /* center vertically */
    height: 100vh;              /* full screen height */
}

.container {
    background-color: white;
}

.inputContainer {
    margin-top: 0.5rem;
}
```

## Adding functionality with javascript

We first need initiate our variables by getting the IDs of our:
- Word display
- Enter button
- User input

```js
const userInput = document.getElementById("userInput");
const enterBtn = document.getElementById("enterBtn");
const wordDisplay = document.getElementById("wordDisplay");
```

After, we can make a function that changes the word display to the user input

```js
enterBtn.onclick = () => {
    ...
}
```

Then we can write code which lets the text of word display change the user input 

```js
wordDisplay.innerText = userInput.value;
```
