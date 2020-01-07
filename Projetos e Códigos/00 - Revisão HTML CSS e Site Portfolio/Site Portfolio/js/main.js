var menu = document.querySelector('.menu');
var hamIcon = document.querySelector('.ham-icon');
var close = document.querySelector('.close');

var openMenu = function () {
    menu.style.display = "block";
    hamIcon.style.display = "none";
    close.style.display = "block";
}

var closeMenu = function(){
    menu.style.display = "none";
    hamIcon.style.display = "block";
    close.style.display = "none";
}


hamIcon.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
