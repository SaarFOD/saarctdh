
var dataParsed;

var myRequest = new XMLHttpRequest();

var method = "GET";
var query = "Dutch heritage";
var url = "http://www.europeana.eu/api/v2/search.json?wskey=7zcbWedH8&query=europeana_collectionName%3A2021657*&start=1&rows=96&profile=standard" + query;

myRequest.open(method, url);
myRequest.send();

var images = [];

//test om later weg te halen
console.log(document);


myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4) {
        var data = myRequest.responseText;
        dataParsed = JSON.parse(data);
        console.log(dataParsed.items.length);
        for (var i = 0; i < dataParsed.items.length; i++) {
            var URL = (dataParsed.items[i].edmPreview[0]);
            images.push(URL);
        }
        console.log(images);
    }

}







// Beschrijving: Functie om de image1 te laten roteren +90
var degrees = 0;

function rotateImage() {
    console.log("click registered");

    if (degrees < 270) {
        degrees = degrees + 90;
    } else {
        degrees = 0;
    }

    document.getElementById("image1").style.transform = "rotate(" + degrees + "deg)";
}


//Beschrijving: Functie voor de dia show



var nextImage = 0;

function next() {
    console.log(dataParsed.items.length);

    document.getElementById("image1").src = images[nextImage];

    if (nextImage < (dataParsed.items.length)) {
        nextImage = nextImage + 1;
    } else {
        nextImage = 0;
    }
    document.getElementById("image1");
}



//Beschrijving: Functie om de gok functie in werking te brengen
var guess = function() {
    if (degrees % 360 === 0) {
        alert("Perfect guess!")
    } else {
        alert("Sorry, guess again!")
    }

}