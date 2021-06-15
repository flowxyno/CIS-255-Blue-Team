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

    changeNav(hide)
        Hides the nav bar up and shows the nav bar when the page is scrolled.
        param: "hide" if hide is string "pos" then the nav bar is hidden. Any of
        string will make the nav bar show.  

    checkHeight()
        This function checks to see if the page has been scrolled more the 200px 
        from the top and is currently displayed.
*/

window.onload = function() {
    // remove loading page element
    document.getElementById("loading").style.display = "none";
    // body animation when it loads
    document.body.style.animationName = "load";
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
    
    // style navigation bar
    nav.style.position = "fixed";
    nav.style.top = "0px";
    nav.style.left = "0px";
    nav.style.width = "100%";

    // variable is true if navigation bar is in view
    var here = true;
    
    // check if nar bar should be hidden
    checkHeight();

    // when page is scrolled
    document.onscroll = checkHeight;
    function checkHeight() {
        // get how far the page has scrolled from the top in pixels
        var scrollHeight = window.pageYOffset;
        // if the page is scrolled more than 200 px from the top and nav bar it is not hidden
        if (scrollHeight >= 200 && here) {
            // call function to hide nav bar
            changeNav("neg"); 
            // set "here" to false to indicate that nav bar is hidden 
            here = false;
        // if the page is scrolled less than 200 px from the top and nav bar it is  hidden
        } else if (scrollHeight < 200 && !(here)) {
            // call function to show nav bar
            changeNav("pos");
            // set "here" to true to indicate that nav bar is shown
            here = true;
        }
    }

    // interval to hide and show nav bar
    var backgroundInterval;
    // hide or show nav bar
    function changeNav(hide) {
        // the Interval if it is currently running
        clearInterval(backgroundInterval);
        // is nav bar to be hidden
        if (hide === "neg") {
            // height from top of page
            var navHeight = 0;
            // how many pixals to move each time the Interal is call the function
            var i = -2;
        } else {
            // height from top of page
            var navHeight = -90;
            // how many pixals to move each time the Interal is call the function
            var i = 2;
        }
        
        // call by Interval untill nar bar is 
        // fully hidden or fully shown
        function navBackground() {
            // height from top of page
            navHeight += i;
            nav.style.top = navHeight + "px";
            // if nav bar is either fully hidden or
            // fully shown
            if (navHeight === 0 || navHeight <= -90) {
                // stop Interval
                clearInterval(backgroundInterval);
            } 
        }
        // call funtion to show or hide nav bar every millisecond
        backgroundInterval = setInterval(navBackground, 1);
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
