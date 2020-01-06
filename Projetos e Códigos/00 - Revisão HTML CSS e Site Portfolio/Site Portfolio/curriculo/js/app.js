/**
 * Solução adaptada do StackOverFlow
 * Link: https://stackoverflow.com/questions/5131379/how-to-change-the-color-of-the-links-with-javascript
 */

function changeModeTheme() {
    var body = document.getElementById('body');
    var anchor = document.getElementsByTagName('a');
    var mainText = document.querySelector('main');
    var headerName = document.querySelector('.bio-title');
    var currentClassBody = body.className;

    if(currentClassBody == 'dark-mode'){
        mainText.style.borderLeft = '#404040 3px solid';
        headerName.style.borderBottom = '#404040 3px solid';
        body.className = 'light-mode';
        for(var i = 0; i < anchor.length; i++){
            anchor[i].style.color = '#404040';
        }
    } else{
        body.className = 'dark-mode';
        mainText.style.borderLeft = '#ebebed 3px solid';
        headerName.style.borderBottom = '#ebebeb 3px solid';
        for(var i = 0; i < anchor.length; i++){
            anchor[i].style.color = '#ebebeb';
        }
    }
    
}

