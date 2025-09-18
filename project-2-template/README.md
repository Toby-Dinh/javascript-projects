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

```diff
- When we want to select a class, we should always start it with a .
```

```css
.container {
    text-align: center;
}
```
