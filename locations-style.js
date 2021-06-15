"use strict";
/*
    CIS 155 Team Project - Spring 2021
    
    Site Name: American Pizza
    Team Name: Developer Dudes
    Authors: Adam Rodriguez, Tracy Harvey, James Coolidge

    This contains animations for the locations page

    
*/

// when this window loads
this.addEventListener("load", function() {
    // get the main element
    var main = document.getElementsByTagName("main")[0];
    // create a div element
    var div = document.createElement("div");
    // add a p tag and svg image inside of it
    div.innerHTML = "<p>X</p><img src='site_images/drop_down.svg' alt='drop down arrow' />";
    // set the id to "location"
    div.setAttribute("id", "location");
    // add div element to page
    main.append(div);

    // get the selection input
    var selection = document.getElementsByTagName("select")[0];

    // set the text of the div's p tag to current value of the select element
    div.firstChild.innerText = selection.value;
    // when the selection input changes
    selection.oninput = function() {
        // set the text of the div's p tag to current value of the select element
        div.firstChild.innerText = this.value;
        // unfocus the select input element
        this.blur();
    }
})