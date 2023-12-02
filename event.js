//Event Listener
//For example element.addEventListener("click", function, bool)
//> For clicks
const button2 = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also Love JavaScript');
}

button2.addEventListener("click", alertBtn);

//>For Mouseover
const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);


/*LIST OF FUNCTIONS
-.addEventListener
-"click"
-"mouseover"



*/