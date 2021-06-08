"use strict";
/*
    CIS 155 Team Project - Spring 2021
    
    Site Name: American Pizza
    Team Name: Developer Dudes
    Authors: Adam Rodriguez, Tracy Harvey, James Coolidge

    This contains animations for the home page

*/

var imagesName = document.querySelectorAll("section section:first-of-type img");
for (var i = 0; i < imagesName.length; i++) {
    imagesName[i].addEventListener("mouseover", function() {
        this.style.animation = "moveUpAndDown 1s";
        var now = this;
        setTimeout(function() {
            now.style.animation = "X";
        }, 1000);
    }); 
} 