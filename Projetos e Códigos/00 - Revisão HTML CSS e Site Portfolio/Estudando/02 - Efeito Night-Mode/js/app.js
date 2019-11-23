function changeModes() {
    /**
     * Aprendi no blog Ramblings of a Squirrel
     * Link do post: harlemsquirrel.github.io/css/javascript/2017/01/31/dark-light-mode-switcher.html
     */
    
    var body = document.getElementById('body');
    var currentClass = body.className;
    
    if(currentClass == 'dark-mode'){
        body.className = 'light-mode';
    } else{
        body.className = 'dark-mode';
    }
}