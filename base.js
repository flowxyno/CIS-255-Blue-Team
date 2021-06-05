"use strict";
/*
    CIS 155 Team Project - Spring 2021
    
    Site Name: American Pizza
    Team Name: Developer Dudes
    Authors: Adam Rodriguez, Tracy Harvey, James Coolidge

    This the animations for the global navigation bar

    Functions:

    currentLocation()
        Find the current page and return the position for the line to go under it.

    changePositions() 
        Moves the red line under links from current location to the link the mouse is over. 

    move()
        Moves the position of the red line under links left or right by small perscentage.
        This function is called until the red line is under the link the mouse is over. 
*/

window.onload = function() {
    // remove loading page element
    document.getElementById("loading").style.display = "none";
    // get all the a tags in nav bar
    var nav_menu = document.querySelectorAll("#nav_menu ul li a");
    // get the nav bar
    var nav = document.querySelector("#nav_menu");
    // the four positions for the red line 
    var positions = [637, 510 , 385, 10];
    // get the current page link
    var home = currentLocation(nav_menu, positions);
    // creat variable to store the current loction of the red line
    var currentPosition = home;
    // get the red line and the back line
    var line_under_link1 = document.getElementById("line_under_link1");
    var line_under_link2 = document.getElementById("line_under_link2");
    // place both the red line and back line under the current page link
    line_under_link1.style.right = currentPosition / 10 + "%";
    line_under_link2.style.right = currentPosition / 10 + "%";
    // loop through the page nav bar links
    for (var i = 1; i < nav_menu.length; i++) {
        // add data-position attribute 
        // (attribute value corresponds with the a index value in var positions array)
        nav_menu[i].setAttribute("data-position", i - 1);
        // add event listener for when mouse is over element
        nav_menu[i].addEventListener("mouseover", function() {
            // get the elements data-position value
            var linePosition = positions[this.getAttribute("data-position")];
            // if the red line is not under link the mouse is over 
            if (currentPosition !== linePosition) changePositions(linePosition);
        }); 
    }

    // when mouse leaves nav bar
    nav.addEventListener("mouseleave", function() {
            // position red line under current page link
            changePositions(home);
        });
    
    // when mouse is over logo (the first li tag)
    nav_menu[0].addEventListener("mouseenter", function() {
            // position red line under current page link
            changePositions(home);
        });
    
    // variable to equal the setInterval() function.
    var moveLine;

    function changePositions(linePosition) {
        // amount red line moves each time move() function called
        var i = 0.0;
        // if red is to the right of the link the mouse is over
        if (currentPosition < linePosition) {
            // increase the position of red line 
            i = 1;
        } else {
            // decrease the position of red line 
            i = -1;
        }

        function move() {
            // set position of red line
            line_under_link1.style.right = currentPosition / 10 + "%";
            // check if red line under link yet
            if (currentPosition === linePosition) {
                // stop the Interval
                clearInterval(moveLine);
            // red line if more than 1% away from the link it is moving to
            } else if ((currentPosition - 10 > linePosition || currentPosition + 10 < linePosition)){
                // red line if more than 7% away from the link it is moving to
                if (currentPosition - 70 > linePosition || currentPosition + 70 < linePosition) {
                    // increase distance moved
                    currentPosition += (i * 20) ;
                } else {
                    // increase distance moved
                    currentPosition += (i * 7) ;
                }
            } else {
                // put distance moved at 1
                currentPosition += i ; 
            }
        }

        // stop interval if it is running
        clearInterval(moveLine);

        // run interval every millisecond 
        moveLine = setInterval(move, 1);
    }
}

function currentLocation(nav_list, position) {
    // array to hold positions for the two lines under nav bar links  
    var positions = position;
    // loop through the nav bar links
    for (var i = 1 ; i < nav_list.length; i++) {
        // find links with id "current" and return the number from array 
        // to position lines under the current page link.
        if (nav_list[i].hasAttribute("id")) return positions[i - 1];
    }
}
