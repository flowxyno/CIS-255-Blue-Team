var menu = {

		"items" : [
			{ 
				"name" : "Chatanooga Cheese",
				"id" : "chatanoogaCheese",
				"desc" : "Seven types of cheese!",
				"imag" : "site_images/chataChs.jpg",
				"sizes" : [
					{ "size" : "Personal", "price" : 6.99 },
					{ "size" : "Medium", "price" : 10.99 },
					{ "size" : "Large", "price" : 14.99 },
					{ "size" : "Family", "price" : 17.99 }
				]
			},
			{ 
				"name" : "Spokane Spice-Bomb",
				"id" : "spokaneSpiceBomb",
				"desc" : "For spiceheads only!",
				"imag" : "site_images/spokSpic.jpg",
				"sizes" : [
					{ "size" : "Personal", "price" : 8.99 },
					{ "size" : "Medium", "price" : 12.99 },
					{ "size" : "Large", "price" : 15.99 },
					{ "size" : "Family", "price" : 19.99 }
				]
			},
			{ 
				"name" : "Mount Vernon Meat",
				"id" : "mountVernonMeat",
				"desc" : "All the meats, no vegetables!",
				"imag" : "site_images/mtVernMeat.jpg",
				"sizes" : [
					{ "size" : "Personal", "price" : 7.99 },
					{ "size" : "Medium", "price" : 11.99 },
					{ "size" : "Large", "price" : 15.99 },
					{ "size" : "Family", "price" : 18.99 }
				]
			}
	]
};

// Scripts to build the menu
var output = "";

output += '<input type="submit" value="Make-An-Order" name="submit">';

// Loop to create the items
for(var i in menu.items) {	

	// Creates the item name headers
	output += "<h2>" + menu.items[i].name + "</h2>";

		// Creates the item description
		output += "<p class='description'>" + menu.items[i].desc + "</p>";
		output += "<div class='itemSizes'>";

		// Loop to create a grid box for each size of each menu item
		for(var k in menu.items[i].sizes) {
			output += "<div>";

			// Image (the size of the image depends on the class, which depends on the size of the item)
			output += "<img src='" + menu.items[i].imag + "' class='" + menu.items[i].sizes[k].size + "'>";

			// Checkbox for the form. It is hidden for aesthetic purposes, but it will send which item the user selects to the PHP page.
			output += "<input type='checkbox' id='" + menu.items[i].id + menu.items[i].sizes[k].size + "' name='" + menu.items[i].id + menu.items[i].sizes[k].size + "' value='" + menu.items[i].name + ", " + menu.items[i].sizes[k].size + "'>";

			// Label is styled like a button so the user clicks it, which selects the checkbox above
			output += "<label for='" + menu.items[i].id + menu.items[i].sizes[k].size + "'>" + menu.items[i].sizes[k].size + "</label>";

			// The price
			output += "<p>&dollar;" + menu.items[i].sizes[k].price + "</p>";
			// A hidden input to send the price to the PHP page
			output += "<input type='hidden' name='" + menu.items[i].id + menu.items[i].sizes[k].size + "Price' value='"+ menu.items[i].sizes[k].price + "'>";

			// The quantity selector
			output += "<input type='number' class='" + menu.items[i].id + menu.items[i].sizes[k].size + "' name='" + menu.items[i].id + menu.items[i].sizes[k].size + "Qty' min='0' max='10'>";
			
			output += "</div>";
		}
		output += "</div>";
	}

// Command to output the menu
document.getElementById("menu").innerHTML = output;

// Get all the checkbox inputs 
var inputs = document.querySelectorAll("input[type='checkbox']");
// Loop through the checkbox inputs
for (var i = 0; i < inputs.length; i++) {
	// Access each checkbox's id attribute.
	// Call function 'showQuantity()' every time the input value changes.
	document.forms.menu.elements[inputs[i].getAttribute("id")].onchange = showQuantity;
}
	
function showQuantity() {
	// get the number input by its class name
	var x = document.getElementsByClassName(this.id);
	// check if the input has changed
	if(this.checked == true) {
		x[0].style.display = "block";
		x[0].value = 1;
	} else {
		x[0].style.display = "none";
		x[0].value = 0;
	}
}