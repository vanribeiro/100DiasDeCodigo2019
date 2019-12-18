var header = document.querySelector('header'),
    section = document.querySelector('section'),
    userId = 17841400942845134,
    token = "EAAMOIwbQQ60BAEgiPaZBDPlZBCWL4XDryrEz412uZB17q4RZBeiwlP27XRqko8mg9cvgL2hb0kpjZAVNtSFiJDlp8dO6TYxpVroVbHiSjHc7FCAPGbTIiZCAVNbOieqMDy5X5GBpNHU9qvk9sdp1U7YHAZBRLoPC04K3Et3ZAOldkXLQZAzJKguWNPf4ftV5Dl2RI28lpfReTsQZDZD";
    
var bioIg = "https://graph.facebook.com/v5.0/" + userId +
        "/?fields=" +
        "name"+ "," + "username" + "," + "biography" + "," + "profile_picture_url"
        + "&access_token=" + token;
var mediaAcessFb = "https://graph.facebook.com/v5.0/" + userId + "media" +
        "/?fields=" +
        "media_url"+ "," + "caption" + "," + "children{media_url}" + "," + "profile_picture_url"
        + "&limit=5" + "&access_token=" + token;

var request = new XMLHttpRequest();
request.open('GET', bioIg);
request.responseType = 'json';
request.send();

var requestMedia = new XMLHttpRequest();
requestMedia.open('GET', mediaAcessFb);
requestMedia.responseType = 'json';
requestMedia.send();

request.onload = function(){
    var igProfile = request.response;
    var igMediaFb = requestMedia.response
    getBio(igProfile);
    // getFeedPics(igMediaFb);
}

function getBio(objectJSON){
    var myArticleBio = document.createElement('article');
    var name = document.createElement('h3');
    var userName = document.createElement('p');
    var bio = document.createElement('p');
    var figure_element = document.createElement('figure');
    var profile_picture = document.createElement('img');
    var txtBio = document.createElement('section');

    profile_picture.src = objectJSON['profile_picture_url'];
    name.textContent = objectJSON['name'];
    userName.textContent = objectJSON['username'];
    bio.textContent = objectJSON['biography'];
    
    profile_picture.alt = "Van Ribeiro";
    profile_picture.classList.add("img-fluid");
    figure_element.appendChild(profile_picture);

    figure_element.classList.add("pic-bio");
    userName.classList.add('username');
    txtBio.classList.add('txtBio');

    txtBio.appendChild(name);
    txtBio.appendChild(userName);
    txtBio.appendChild(bio);

    myArticleBio.classList.add("biography");
    myArticleBio.appendChild(figure_element);
    myArticleBio.appendChild(txtBio);
    
    header.appendChild(myArticleBio);
}

// function getFeedPics(objectJSON){
//     var img = document.createElement('img');
//     img.src = objectJSON['media_url'];
//     img.classList.add('img-fluid');
//     section.appendChild(img);
// }

