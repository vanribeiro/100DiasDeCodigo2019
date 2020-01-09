let menu = document.querySelector('.menu');
let hamIcon = document.querySelector('.ham-icon');
let close = document.querySelector('.close');

let openMenu = function () {
    menu.style.display = "block";
    hamIcon.style.display = "none";
    close.style.display = "block";
}

let closeMenu = function(){
    menu.style.display = "none";
    hamIcon.style.display = "block";
    close.style.display = "none";
}

hamIcon.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

