var menu = {
	
	"sections" : [
	{	"section" : "Pizza",
		"items" : [
			{ 
				"name" : "Chatanooga Cheese",
				"desc" : "Seven types of cheese!",
				"imag" : "notAvail.jpg",
				"sizes" : [
					{ "size" : "Personal", "price" : 6.99 },
					{ "size" : "Medium", "price" : 10.99 },
					{ "size" : "Large", "price" : 14.99 },
					{ "size" : "Family", "price" : 17.99 }
				]
			},
			{ 
				"name" : "Spokane Spice-Bomb",
				"desc" : "For spiceheads only!",
				"imag" : "coffee.jpg",
				"sizes" : [
					{ "size" : "Personal", "price" : 6.99 },
					{ "size" : "Medium", "price" : 10.99 },
					{ "size" : "Large", "price" : 14.99 },
					{ "size" : "Family", "price" : 17.99 }
				]
			}
		]},
	{	"section" : "Wings",
		"items" : [
			{ 
				"name" : "Chernobyl Chicken Wings",
				"desc" : "This will blow your mind and your taste buds!",
				"imag" : "notAvail.jpg",
				"sizes" : [
					{ "size" : "8pc", "price" : 6.99 },
					{ "size" : "16pc", "price" : 10.99 },
					{ "size" : "24pc", "price" : 14.99 },
					{ "size" : "32pc", "price" : 17.99 }
				]
			}
		]}
	]
};

// Scripts to build the menu
var output = "";

// Loop to create the individual sections
for(var i in menu.sections) {	

	// Creates the section headers
	output += "<h2>" + menu.sections[i].section + "</h2>";

	// Creates the header for each menu item
	for(var j in menu.sections[i].items) {
		output += "<h3>" + menu.sections[i].items[j].name + "</h3>";

		// Creates the item description
		output += "<p class='description'>" + menu.sections[i].items[j].desc + "</p>";
		
		output += "<div class='itemSizes'>";
		// Creates the sizes
		for(var k in menu.sections[i].items[j].sizes) {
			output += "<div>";

			// Image (the size of the image depends on the class, which depends on the size of the item)
			output += "<img src='" + menu.sections[i].items[j].imag + "' class='" + menu.sections[i].items[j].sizes[k].size + "'>";

			// Checkbox for the form
			output += "<input type='checkbox' id='" + menu.sections[i].items[j].name + " " + menu.sections[i].items[j].sizes[k].size + "' name='" + menu.sections[i].items[j].name + " " + menu.sections[i].items[j].sizes[k].size + "'>";

			// Label is styled like a button so the user clicks it, which selects the checkbox above
			output += "<label for='" + menu.sections[i].items[j].name + " " + menu.sections[i].items[j].sizes[k].size + "'>" + menu.sections[i].items[j].sizes[k].size + "</label>";

			// The price
			output += "<p>" + menu.sections[i].items[j].sizes[k].price + "</p>";

			// The quantity selector
			output += "<input type='number' class='" + menu.sections[i].items[j].name + " " + menu.sections[i].items[j].sizes[k].size + "'>"
			output += "</div>";
		}
		output += "</div>";
	}
}


window.onload = function() {
	// get all the input that are type "checkbox" 
	var inputs = document.querySelectorAll("input[type='checkbox']");
	// loop through the inputs
	for (var i = 0; i < inputs.length; i++) {
		// access each of the inputs there name attribute.
		// call function showQuantity every time the input value changes.
		document.forms.menu.elements[inputs[i].getAttribute("name")].onchange = showQuantity;
	}
}
	
function showQuantity() {
	// get the number input by its class name
	var x = document.getElementsByClassName(this.name);
	// check if the input has changed
	if(this.checked == true) {
		x[0].style.display = "block";
	} else {
		x[0].style.display = "none";
	}
}