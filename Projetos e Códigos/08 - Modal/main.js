const body = document.querySelector('body');
const modal = document.querySelector('#modal-window');
const span = document.querySelector('#close-modal');
const button = document.querySelector('#open-modal');

button.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}

body.onload = () => {
    console.log('Oi!');
}