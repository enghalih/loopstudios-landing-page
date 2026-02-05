# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Live site](https://enghalih.github.io/loopstudios-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS/Sass (Custom Properties and Nesting)
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- Modern CSS functions

### What I learned

During this challenge, I focused heavily on writing clean, structured, and maintainable code. One of the key takeaways was using the `clamp()` function to create a truly fluid typography and spacing system that adapts without needing too many media queries.

```css
font-size: clamp(3.2rem, calc(2.643rem + 1.739vw), 4rem);
```

I also improved my skills in structuring SCSS files to keep the project organized.

Handling the mobile navigation toggle with Vanilla JavaScript was also a great exercise in DOM manipulation.

```js
const button = document.getElementById("menu-button");
const menu = document.getElementById("menu");

button?.addEventListener("click", () => {
  const isActive = menu.getAttribute("aria-expanded");
  if (isActive === "true") {
    menu.setAttribute("aria-expanded", false);
  } else {
    menu.setAttribute("aria-expanded", true);
  }
});
```

### Continued development

I want to continue refining my ability to handle complex, non-linear designs. I also plan to dive deeper into CSS Grid for more intricate gallery layouts and improve my workflow with SCSS architecture like the 7-1 pattern.

### Useful resources

- [MDN Web Docs - Clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) - This was essential for understanding how to create fluid layouts.

## Author

- Frontend Mentor - [@enghalih](https://www.frontendmentor.io/profile/enghalih)
- Github - [@enghalih](https://github.com/enghalih)
- Linkedin - [Wenning Ghalih](https://www.linkedin.com/in/enghalih/)
