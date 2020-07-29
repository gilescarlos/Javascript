// set initial count to 0
let count = 0; 

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// .forEach() executes a function once for each array element,
// in this case on every btn
btns.forEach(function (btn) {
    // every time a btn is clicked the callback function is executed
    // a callback funciton is a function passed into another function
    // as an argument
    btn.addEventListener("click", function(e) {
        // the CSS styles of the btn are stored in the styles variable
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) { 
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count < 0) {
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "blue";
        } else {
            value.style.color = "black";
        }
        value.textContent = count; 
        console.log(count)
    })
});
