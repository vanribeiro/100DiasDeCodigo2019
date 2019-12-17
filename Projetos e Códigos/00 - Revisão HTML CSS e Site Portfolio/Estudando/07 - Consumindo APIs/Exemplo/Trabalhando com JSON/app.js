//Pega os elementos da página
var header = document.querySelector('header');
var section = document.querySelector('section');

//Local de onde recuperaremos o JSON
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

//Instância para criar a solicitação ao servidor
var request = new XMLHttpRequest();

/**
 * Abrindo uma solicitação - método do objeto XMLHttpRequest open()
 * Passa-se 2 argumentos:
 * 1º - método HTTP a ser utilizado
 * 2º - local de onde recuperaremos os dados
 */
request.open('GET', requestURL);

//Definimos o tipo de resposta
request.responseType = 'json';

//Enviamos com o método send() também do objeto
request.send();

/**
 * Aqui armazenamos a resposta, disponível na propriedade response.
 * superHeroes conterá o objeto javascript com base no json
 * populateHeader irá preencher o header da página
 * showHeroes irá preencher o section da página
 */
request.onload = function(){
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

//Irá popular o cabeçalho
/**
 * cria o elemento, busca pelo objeto obdecendo o parametro e anexa ao header como filho
 */
function populateHeader(jsonObj){
    var myH1 = document.createElement('h1');
    var addressLink = "https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/JSON";
    var myLink = document.createElement('a');
    myLink.href = addressLink;
    myLink.target = "_blank";
    myLink.text = "Tutorial Mozilla - Trabalhando com JSON";
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
    header.appendChild(myLink);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + '// Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

//Irá popular o Section

function showHeroes(jsonObj){
    var heroes = jsonObj ['members'];
    
    for(var i = 0; i < heroes.length; i++){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for(var j = 0; j < superPowers.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);

    }
}
