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

    var plusMinus = document.createElement("img");
    plusMinus.setAttribute("src", "site_images/zoomBar.svg");

    var plus = document.createElement("img");
    plus.setAttribute("src", "site_images/plus.svg");

    var minus = document.createElement("img");
    minus.setAttribute("src", "site_images/minus.svg");

    hqmap.appendChild(plus);
    hqmap.appendChild(minus);
    hqmap.appendChild(plusMinus);

    var image = document.querySelectorAll("#hqmap img")[0];
    plus.onclick = function() {
        image.style.animationName = "increaseScale";
        setTimeout(function() {
            image.style.transform = "scale(2)";
        }, 500);
        //aElement.style.visibility = "hidden";
    }

    minus.onclick = function() {
        image.style.animationName = "decreaseScale";
        setTimeout(function() {
            image.style.transform = "scale(1)";
            //aElement.style.visibility = "";
        }, 500);

    }
}