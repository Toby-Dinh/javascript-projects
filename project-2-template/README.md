This is the project that we will be making:

<img width="630" height="691" alt="image" src="https://github.com/user-attachments/assets/ab139d95-44ad-4646-a05f-1f65531e819b" />

We first need to create the structure of our website 
Navigate to index.html and we will add the text, buttons and images

## HTML Structure

```html
<div class="container">
    <h1>Make me happy</h1>
    <img id="faceImg" src="images/meh.png">
    <div id="displayMessage" class="displayMessage"></div>
    <div class="buttonContainer">
        <button id="complimentBtn" class="complimentBtn">Say something nice</button>
        <button id="insultBtn" class="insultBtn">Say something mean</button>
    </div>
</div>
```

## Styling 

<img width="648" height="413" alt="CSS-Selectors" src="https://github.com/user-attachments/assets/eab70a52-5ef2-4332-8377-2c729cdd1299" />

### Style the body
We can style all the content to be centered and we can add a new font for the text

```css
body {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    display: flex;
    justify-content: center; /* centers horizontally */
    align-items: center;     /* centers vertically */
    height: 100vh;           /* makes the body full viewport height */
}
```

To make the text centered in your container div
we use:

```css
text-align: center;
```

We can select the section we want to style by selecting the class

```css
.container {
    text-align: center;
}
```

Select our compliment and insult buttons where we will change the styling and 
by selecting the button element, we can make it so that there will be a hover effect.

```css
.complimentBtn {
    background-color: #92e692ff;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 15px;
}

.insultBtn {
    background-color: #ff8279ff;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 15px;
}

button:hover {
    opacity: 0.8;
}
```

Afterwards, you can add more styling to it by changing the spacing, sizes and others

## Adding interactivity to your website

### Initialising variables

```js
const complimentBtn = document.getElementById("complimentBtn");
const insultBtn = document.getElementById("insultBtn");
const displayMessage = document.getElementById("displayMessage");
const faceImg = document.getElementById("faceImg");
```


### Making an array of compliments and insults

```js
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
```

### Add functionality to make the buttons display our messages

```js
complimentBtn.onclick = () => {
    displayMessage.innerText = compliments[0];
};

insultBtn.onclick = () => {
    displayMessage.innerText = insults[0];
};
```

To display a different message, change the index in the array (0, 1, 2, etc.) 
Try changing the compliment text to "You make people smile" and the insult text to "I don't want to be your friend"

### Add functionality to make the buttons change the emotion of the face

By getting the variable for the face image, we can change the source for it be a different image:

```js
faceImg.src = "picture.png";
```

Write some code to make it so that when we press the insult button and the compliment button, it changes the emotion accordingly

