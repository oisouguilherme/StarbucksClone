function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
    event.preventDefault()
}

function changeCircleColor (color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}