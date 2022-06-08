var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

var counter = document.querySelector("#counter");

counter.addEventListener("click", function() {

    if (currentNumber < 0) {
        this.style.color = "red";
    }

    else 
        this.style.color = "blue";

});