const initialSpacing = document.querySelector('#initial-spacing');
const initialColor = document.querySelector('#initial-color');
const initialBlur = document.querySelector('#initial-blur')
const mainContainer = document.querySelector('#main-container');
const image = document.querySelector('#image');
const jsSpan = document.querySelector('span')


initialSpacing.addEventListener('input', changePadding)

initialColor.addEventListener('input', changeColor)

initialBlur.addEventListener('input', changeBlur)

function changePadding() {
  let initialSpacingValue = initialSpacing.value;
  mainContainer.style.padding = `${initialSpacingValue}px`;
  console.log(initialSpacingValue);  
}

function changeColor() {
  let initialColorValue = initialColor.value;
  // console.log(initialColorValue);
  mainContainer.style.setProperty('--base-color', initialColorValue)

  jsSpan.style.setProperty('--base-color', initialColorValue)
}

function changeBlur() {
  let initialBlurValue = initialBlur.value;
  console.log(image);
  image.style.setProperty('--blur', `${initialBlurValue}px`);
}

// initialSpacing.addEventListener('click', changeStyles())
