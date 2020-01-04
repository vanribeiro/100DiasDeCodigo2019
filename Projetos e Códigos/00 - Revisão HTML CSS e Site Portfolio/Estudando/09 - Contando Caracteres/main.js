var input = document.querySelector('#text-to-be-count');


input.addEventListener("keydown", countingChars);

var counter = document.querySelector('#counter');
var result = document.createElement('span');
var btn = document.querySelector('#btn-change');
function countingChars() {
    let max = 10;
    let count = 0;
    let textLength = input.value.length;
    count = max - textLength;
    if(count <= 0){
        result.style.color = "red";
        btn.disabled = true;
    } else{
        result.style.color = "#404040";
        btn.disabled = false;
    }
    
    result.textContent = count + "/10";
    
    counter.appendChild(result);

    
}