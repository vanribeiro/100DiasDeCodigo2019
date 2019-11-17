/**
 * Aprendi esse efeito no canal Origamid
 * Link do Vídeo: https://www.youtube.com/watch?v=zx2axQoY_YM
 */

const title = document.querySelector("#first-page-title");

function typeWriter(el){
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    console.log(textArray);
    textArray.forEach((letra, i) => {
        setTimeout(() => el.innerHTML += letra, 300*i)
    });
}

typeWriter(title);