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

/* Mudar cor da numeração */
// counter.addEventListener("click", function() {

//     if (currentNumber < 0) {
//         this.style.color = "red";
//     }

//     else 
//         this.style.color = "blue";
// });


var botaoSub = document.querySelector(".btn_subtrair");
var botaoAdd = document.querySelector(".btn_adicionar");

botaoSub.addEventListener("click", function() {
        
    if (currentNumber < 0 ){
        botaoSub.disabled = true;
        alert("Valor menor que zero não permitido!")
        document.getElementById("currentNumber").innerHTML = 0;
    }
    
});

botaoAdd.addEventListener("click", function() {
  
    if (currentNumber > 0){
        botaoSub.disabled = false;
    }    
});