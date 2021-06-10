"use strict";
/*
    CIS 155 Team Project - Spring 2021
    
    Site Name: American Pizza
    Team Name: Developer Dudes
    Authors: Adam Rodriguez, Tracy Harvey, James Coolidge

    This contains animations for the menu page

*/

var itemsElements = document.querySelectorAll("div.itemSizes div");
var orderForm = document.forms.menu.elements;


for (var i = 0; i < itemsElements.length; i++) {
    var itemQuantity = document.createElement("div");
    itemQuantity.innerText = "1";
    itemQuantity.setAttribute("class", "quantity");
    itemQuantity.setAttribute("style", "display:none;");
    itemQuantity.innerHTML = "<div><img src='site_images/minus-without-background.svg'/></div>\
                              <p>1</p>\
                              <div><img src='site_images/plus.svg'/></div>";
    itemsElements[i].appendChild(itemQuantity);
    itemsElements[i].addEventListener("click", function() {
        var x = document.getElementsByClassName(orderForm[this.children[1].id].id)[0];
        if (!(orderForm[this.children[1].id].checked)) {
            this.style.borderColor = "#ac5959";
            this.lastChild.setAttribute("style", "");
            orderForm[this.children[1].id].checked = true;
            x.value = 1;
            this.lastChild.children[1].innerText = "1";
        } else {
            this.style.borderColor = "";
            this.lastChild.setAttribute("style", "display:none;");
            orderForm[this.children[1].id].checked = false;
            x.value = 0;
        }
        
        this.lastChild.firstChild.onmouseover = function() {
            this.firstChild.style.filter = "drop-shadow(rgba(0,0,0,0.9) 2px 2px 2px)";
            this.onclick = function(e) {
                e.stopPropagation();
                if (Number(x.value) > 1) {
                    x.value = parseInt(x.value) - 1; 
                }
                this.parentNode.children[1].innerText = x.value;
            }
        }
        this.lastChild.lastChild.onmouseover = function() {
            this.firstChild.style.filter = "drop-shadow(rgba(0,0,0,0.9) 2px 2px 2px)";
            this.firstChild.style.borderColor= "black";
            this.onclick = function(e) {
                e.stopPropagation();
                if (Number(x.value) < 10) {
                    x.value = parseInt(x.value) + 1;
                }
                this.parentNode.children[1].innerText = x.value; 
            }
        }
        this.lastChild.firstChild.onmouseleave = function() {
            this.firstChild.style.filter = "";
        }
        this.lastChild.lastChild.onmouseleave = function() {
            this.firstChild.style.filter = "";
        }
        
    });
}