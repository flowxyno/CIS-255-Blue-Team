"use strict";
directions();
function directions() {
    var hqmap = document.getElementById("hqmap");
    var directions = document.createElement("img");
    directions.setAttribute("src", "site_images/directions.svg");
    var aElement = document.createElement("a");
    aElement.setAttribute("href", "https://www.google.com/maps/dir//2561+6th+St,+Bremerton,+WA+98312/@47.5673705,-122.6541734,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5490376d55f12363:0x6f63eb5a400d7a0a!2m2!1d-122.6519847!2d47.5673669");
    aElement.appendChild(directions);
    hqmap.appendChild(aElement);

    // Creation of the + and - controls for zooming in and out for the HQ map
    var plusMinus = document.createElement("img");
    plusMinus.setAttribute("src", "site_images/zoomBar.svg");

    var plus = document.createElement("img");
    plus.setAttribute("src", "site_images/plus.svg");

    var minus = document.createElement("img");
    minus.setAttribute("src", "site_images/minus.svg");

    // Attachment of the + and - controlls to the map image
    hqmap.appendChild(plus);
    hqmap.appendChild(minus);
    hqmap.appendChild(plusMinus);

    var image = document.querySelectorAll("#hqmap img")[0];
    // Controls the zoom in feature of the + control on the HQ Map
    plus.onclick = function() {
        image.style.animationName = "increaseScale";
        setTimeout(function() {
            image.style.transform = "scale(2)";
        }, 500);
        //aElement.style.visibility = "hidden";
    }

    // Controls the zoom out feature of the - control on the HQ Map
    minus.onclick = function() {
        image.style.animationName = "decreaseScale";
        setTimeout(function() {
            image.style.transform = "scale(1)";
            //aElement.style.visibility = "";
        }, 500);

    }
}