// extra: change colors to photos and make those backgrounds 
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// .getElementById() returns an Element object representing the 
// element whose id propert matches the specified string
const btn = document.getElementById('btn');
// .querySelector() returns the first Element within the document 
// that matches the specified selector, or group of selectors.
// In this case it selects all elements with class="color"
const color = document.querySelector('.color');

// addEventListener() sets up a funciton that will be called 
// whenever the specified event is delivered to the target such as
// an element like the 'btn'
btn.addEventListener('click', function() {
    // get random number between 0 - 3, and index in colors[]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}

