/*
=== Function List ===

writeSelectionList()
-- Writes the options to the 'location' selection list on locations.htm.

displayThreeCities()
-- Displays the three cities associated with the selected state. Triggered when the user selects a state in the "locations" selection list.

writeEmbeddedMap()
-- Embeds the correct map depending on the selected state.

=== Map Embeds ===

Washington:
https://www.google.com/maps/d/u/0/embed?mid=1NjJaLWqlE7OiRTdJDFTW9lLbSsjTVtS7

Tennessee:
https://www.google.com/maps/d/u/0/embed?mid=1utNgGQo2XC_IZBaL-TY9r0bf8QH3nwSb

Texas:
https://www.google.com/maps/d/u/0/embed?mid=1cT7uO5bA47m3eDU0aQnsBw8rbg7hNvit

*/

// The JSON containing the states and cities
var locs = {
    "states" : [
        { 
            "state" : "Washington",
            "cities" : [
                { "city" : "Bremerton", "address" : "1600 Chester Ave<br>Bremerton, WA 98337" },
                { "city" : "Mount Vernon", "address" : "2108 Riverside Dr<br>Mount Vernon, WA 98273" },
                { "city" : "Spokane", "address" : "1313 N Maple St<br>Spokane, WA 99201" }
            ]
        },
        { 
            "state" : "Tennessee",
            "cities" : [
                { "city" : "Nashville", "address" : "151 6th Ave N<br>Nashville, TN 37203" },
                { "city" : "Chattanooga", "address" : "3903 Volunteer Dr<br>Chattanooga, TN 37416" },
                { "city" : "Memphis", "address" : "1784 E Brooks Rd<br>Memphis, TN 38116" }
            ]
        },
        { 
            "state" : "Texas",
            "cities" : [
                { "city" : "Houston", "address" : "3100 Cleburne St<br>Houston, TX 77004" },
                { "city" : "Dallas", "address" : "3102 Oak Lawn Ave Ste 144<br>Dallas, TX 75219" },
                { "city" : "Fort Worth", "address" : "415 Throckmorton St<br>Fort Worth, TX 76107" }
            ]
        }
    ]
};

// Writes the options to the selection list "locations" on "locations.htm"
writeSelectionList();

// Function to write the options with the states to the selection list, inputting the 'states' from the JSON payload.
function writeSelectionList() {
    var dropdown = "";

    // Writes the top option of 'Choose a State'
    dropdown += "<option =''>Choose a State</option>"

    // Loops through the JSON array and creates options containing the state names
    for(i in locs.states) {
        dropdown += "<option value='" + locs.states[i].state + "'>" + locs.states[i].state + "</option>";
    }

    // Writes the options to the "locations" selection list
    document.getElementById("locations").innerHTML = dropdown;
}

// Function to display the three cities associated with the selected state
function displayThreeCities() {
    var cities = "";

    for(i in locs.states) {
        // Gets the value from the selected option
        var val = document.getElementById("locations").value;

        // Loops through the array to find the selected state
        if(val == locs.states[i].state) {

            // If the state is found, puts the cities and the addressses into the "cities" variable
            for(j in locs.states[i].cities) {
                cities += "<p><strong>" + locs.states[i].cities[j].city + "</strong></p>";
                cities += "<address>" + locs.states[i].cities[j].address + "</address>";
            }
            writeEmbeddedMap();
        }
    }

    // Writes the cities to the "cities" div element
    document.getElementById("cities").innerHTML = cities;
}
function writeEmbeddedMap() {
    var map = ""

    // Array containing the embedded maps
    var mapsArr = ['https://www.google.com/maps/d/u/0/embed?mid=1NjJaLWqlE7OiRTdJDFTW9lLbSsjTVtS7', 'https://www.google.com/maps/d/u/0/embed?mid=1utNgGQo2XC_IZBaL-TY9r0bf8QH3nwSb', 'https://www.google.com/maps/d/u/0/embed?mid=1cT7uO5bA47m3eDU0aQnsBw8rbg7hNvit'];

    for(i in locs.states) {
        // Gets the value from the selected option
        var val = document.getElementById("locations").value;

        // Loops through the array to find the selected state
        if(val == locs.states[i].state) {

            // If the state is found, finds the corresponding map URL and puts it in the 'maps' variable with an <iframe>. The mapsArr code is in the same order as the states in the options list and the JSON array. See top comment for which map corresponds to which state.
            map = "<iframe src='" + mapsArr[i] + "'></iframe>";
        }
    }

    // Writes the map to the "map" div element
    document.getElementById("map").innerHTML = map;
}