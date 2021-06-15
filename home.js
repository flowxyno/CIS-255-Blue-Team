"use strict";
/*
    CIS 155 Team Project - Spring 2021
    
    Site Name: American Pizza
    Team Name: Developer Dudes
    Authors: Adam Rodriguez, Tracy Harvey, James Coolidge

    This contains animations for the home page

*/

// when window fully loads
this.addEventListener("load", function() {
    // add animation to the sites name over pizza
    document.querySelector("body section > section:first-of-type").
                                style.animationName = "siteName";
    // add animation to letter "s" in site name over pizza
    document.querySelector("img[src$=\"/s.svg\"]").
                                style.animationName = "sLetter"; 
});

// get the svg of the letters over the pizza 
var imagesName = document.querySelectorAll("section section:first-of-type img");

// loop through the img elements
for (var i = 0; i < imagesName.length; i++) {

    // fire off event when mouse is over img element
    imagesName[i].addEventListener("mouseover", function() {

        // add animation to img element
        this.style.animation = "moveUpAndDown 1s";
        // store current img in variable
        var now = this;
        // wait one second
        setTimeout(function() {
            // remove animation
            now.style.animation = "";
        }, 1000);
    }); 
} 