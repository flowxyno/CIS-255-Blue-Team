"use strict";
/*
    CIS 155 Team Project - Spring 2021
    
    Site Name: American Pizza
    Team Name: Developer Dudes
    Authors: Adam Rodriguez, Tracy Harvey, James Coolidge

    This contains animations for the menu page

    itemHover()
        Changes which cart images shown when the mouse is over a
        menu item and when mouse leaves
        item. 
        param: "divObject" The current menu item the mouse is over
        param: "add" To tell if the item has been added to the cart. "true" means
            it was added to the cart while false means it was removed. 
*/

// get each menu item 
var itemsElements = document.querySelectorAll("div.itemSizes div");
// get the menu form
var orderForm = document.forms.menu.elements;

// loop through each menu item
for (var i = 0; i < itemsElements.length; i++) {

    // create div to hold the quantity elements (plus and minus symbol and quantity displayed) 
    var itemQuantity = document.createElement("div");
    
    // set initial quanity to 1, add class attribute, and plus and minus symbols, and input.
    // The element's display is set to "none"
    itemQuantity.innerText = "1";
    itemQuantity.setAttribute("class", "quantity");
    itemQuantity.setAttribute("style", "display:none;");
    itemQuantity.innerHTML = "<div><img src='site_images/minus-without-background.svg'/></div>\
                              <input type='text' value='1'/>\
                              <div><img src='site_images/plus.svg'/></div>";
    
    // add div to every menu item
    itemsElements[i].appendChild(itemQuantity);
    
    // add the tree cart svg images to each menu item
    var remove = document.createElement("img");
    remove.setAttribute("src", "site_images/remove_shopping.svg");
    remove.setAttribute("id", "remove");
    itemsElements[i].insertAdjacentElement("afterbegin", remove);

    var cart = document.createElement("img");
    cart.setAttribute("src", "site_images/shopping_cart.svg");
    cart.setAttribute("id", "cart");
    itemsElements[i].insertAdjacentElement("afterbegin", cart);
    
    var add = document.createElement("img");
    add.setAttribute("src", "site_images/add_shopping.svg");
    add.setAttribute("id", "add");
    itemsElements[i].insertAdjacentElement("afterbegin", add);

    // when menu item clicked
    itemsElements[i].addEventListener("click", function() {

        // get the input type number for the current item 
        var x = document.getElementsByClassName(orderForm[this.children[4].id].id)[0];
        // if the current item is not selected
        if (!(orderForm[this.children[4].id].checked)) {

            // add a red border
            this.style.borderColor = "#ac5959";
            // display the quantity div
            this.lastChild.setAttribute("style", "");
            // set the number input to "checked"
            orderForm[this.children[4].id].checked = true;
            // set displayed input value to 1
            this.lastChild.children[1].value = "1";
            // set value of hidden number input to 1
            x.value = 1;
            // call function to change cart images the show on screen 
            itemHover(this, true);
        } else {
            // remove border color
            this.style.borderColor = "";
            // hide quantity div
            this.lastChild.setAttribute("style", "display:none;");
            // set the number input to "unchecked"
            orderForm[this.children[4].id].checked = false;
            // set value of hidden number input to 0
            x.value = 0;
            // call function to change cart images the show on screen 
            itemHover(this, false);
        }

        // when mouse is over the quantity div (plus and minus symbol and text input element) 
        this.lastChild.onmouseover = function(e) {
            // stop bubbling. Prevent the program from checking the
            // parent elements if they have a mouseover event
            e.stopPropagation();
            // hide cart image "remove"
            this.parentNode.children[2].style.display = "none";
            // display the in cart image (black cart svg)
            this.parentNode.children[1].style.display = "block";
        }

        // when mouse is over the quantity minus symbol 
        this.lastChild.firstChild.onmouseover = function() {
            // add a shadow
            this.firstChild.style.filter = "drop-shadow(rgba(0,0,0,0.9) 2px 2px 2px)";
            // when minus symbol clicked
            this.onclick = function(e) {
                // do not check parent elements for the click event
                e.stopPropagation();
                // if the currrent quantity is greater than 1
                if (Number(this.parentNode.children[1].value) > 1) {
                    // reduce the displayed quantity by 1
                    this.parentNode.children[1].value = parseInt(this.parentNode.children[1].value) - 1;
                    // reduce the hidden number input value by 1
                    x.value = Number(x.value) - 1;
                }
            }
        }

        // when mouse is over the quantity plus symbol 
        this.lastChild.lastChild.onmouseover = function() {
            // add a shadow
            this.firstChild.style.filter = "drop-shadow(rgba(0,0,0,0.9) 2px 2px 2px)";
            // when plus symbol clicked
            this.onclick = function(e) {
                // do not check parent elements for the click event
                e.stopPropagation();
                // if the currrent quantity is less than 10
                if (Number(this.parentNode.children[1].value) < 10) {
                    // increase the displayed quantity by 1
                    this.parentNode.children[1].value = parseInt(this.parentNode.children[1].value) + 1;
                    // increase the hidden number input value by 1
                    x.value = Number(x.value) + 1;
                }
            }
        }

        // when mouse leaves the minus symbol
        this.lastChild.firstChild.onmouseleave = function() {
            // remove the shadow
            this.firstChild.style.filter = "";
        }

        // when mouse leaves the plus symbol
        this.lastChild.lastChild.onmouseleave = function() {
            // remove the shadow
            this.firstChild.style.filter = "";
        }
        
        // when the displayed quantity input is clicked 
        this.lastChild.children[1].onclick = function(e) {
            // do not check parent elements for the click event
            e.stopPropagation();
            // but backgroung color to white
            this.style.backgroundColor = "rgba(0,0,0,0)";
            // change border color
            this.style.border = "2px solid rgba(0,0,0,0.2)";
            // when user enters values
            this.oninput = function() {
                // if input is not a number and input is not empty
                if(!(Number(this.value)) && this.value !== "") {
                    // variable to hold numbers
                    var aString = "";
                    // loop through the input value
                    for (var i = 0; i < this.value.length; i++) {
                        // if it is a number
                        if (Number(this.value[i])) {
                            // add the value ti the string
                            aString += this.value[i];
                        }
                    }
                    // if the string is greater the 10
                    if (Number(aString) > 10) {
                        aString = 10;
                    // if srting is smaller than one
                    } else if (Number(aString) < 1) {
                        aString = 1;
                    }
                    // set input value to aString value
                    this.value = aString;

                } else if (Number(this.value) > 10) {
                   this.value = "10";
                } else if (Number(this.value) < 0) {
                    this.value = "1";
                }
            }

            // when input looses focus
            this.onblur = function() {
                // if input is empty
                if (this.value === "") {
                    // set input value to 1
                    this.value = "1";
                }
                // set value of hidden number input to value of displayed text input
                x.value = Number(this.value);
            }
        }
    });
}

// change carts iamges displayed
function itemHover(divObject, add) {
    // The following if block changes the images 
    // that appear when the mouse is over a menu item.
    // Note: This if block is here so that when the user clicks a menu item,
    //       the cart image is instantly changed. The mouse over and leave events 
    //       will only fire off when the mouse first leaves the menu item 
    //       after it has been selected. 

    // if menu item is selected (added to the cart)
    if (add) {
        // hide the "add to cart" image
        divObject.children[0].style.display = "none";
        // display the "remove from cart" image
        divObject.children[2].style.display = "block";
    } else {
        // display the "add to cart" image
        divObject.children[0].style.display = "";  
        // hide the "hide remove from cart" image
        divObject.children[2].style.display = ""; 
    }

    // when mouse is over the menu item
    divObject.onmouseover = function() {
        // if menu item is selected (added to the cart)
        if (add) {
            // hide the "in cart" image
            this.children[1].style.display = "";
            // display the "remove from cart" image
            this.children[2].style.display = "block"; 
        } 
    }

    // when mouse is leaves the menu item
    divObject.onmouseleave = function() {
        // if menu item is selected (added to the cart)
        if (add) {
            // display the "in cart" image
            this.children[1].style.display = "block";
            // hide the "remove from cart" image
            this.children[2].style.display = "";  
        } 
    }
}