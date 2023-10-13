//select all button
const messageElement = document.querySelector(".message");
const inputElement = document.getElementById("input");
const btnDevinete = document.getElementById("Devinete");

let random = Math.floor(Math.random() * 99);

btnDevinete.addEventListener('click', ()=>{
    if (inputElement.value > random) {
        messageElement.style.backgroundColor = "rgba(197, 30, 64, 0.664)";
        messageElement.style.display = 'block';
        messageElement.innerHTML = 'votre chiffre est trop grand';
        inputElement.value = inputElement.value
        messageElement.setAttribute("class","message");
    }
    else if(inputElement.value < random){
        messageElement.style.backgroundColor = "rgba(197, 30, 64, 0.664)";
        messageElement.style.display = 'block';
        messageElement.innerHTML = 'votre chiffre est trop petit';
        inputElement.value = inputElement.value;
        messageElement.setAttribute("class","message");
    }else{
        messageElement.style.backgroundColor = "rgba(30, 160, 30, 0.575)";
        messageElement.style.display = 'block';
        messageElement.innerHTML = 'Bravo vous avez deviné le bon chiffre';
        inputElement.value = inputElement.value;
        messageElement.setAttribute("class","message");
    }
})