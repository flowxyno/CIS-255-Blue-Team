<!DOCTYPE html>
<html>
<head>
    <title>American Pizzas - Your Order</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="base.css" rel="stylesheet" />
    <link href="yourOrder.css" rel="stylesheet" />
    <script src="base.js"></script>
    <!-- 
        CIS 155 Team Project - Spring 2021
            
        Site Name: American Pizza
        Team Name: Developer Dudes
        Authors: Adam Rodriguez, Tracy Harvey, James Coolidge
    -->

<!-- remove the inline style!! It just here to show how the page would look. (remove this comment before publishing)-->
<body>
    <!-- The navigation menu list. -->
    <nav id="nav_menu">
    	<ul>
            <!-- Move the 'current' class to whichever page this is. It will make that button stand out to show the user which page they're on. (remove this comment before publishing) -->
            <li><a href="#"><img src="site_images/logo.jpg" alt="American Pizza"/></a></li>
    		<li><a href="#">Home</a></li>
    		<li><a href="#">Menu</a></li>
            <li><a href="#">Locations</a></li>
    		<li><a href="#">Contact</a></li>
    	</ul>
        <!-- lines under links -->
        <div id="line_under_link1"></div>
        <div id="line_under_link2"></div>
    </nav>
	<main>
        <h1>Thank you for your order! Here it is.</h1>
        <table>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        <?php
        $subtotal = 0.0;
        $tax = 0.0;
        $total = 0.0;
        $addedPrc = 0.0;

        // Function to take the price and quantity of a given item, multiply them, and add the amount to the subtotal. It also multiplies them to show the price for the item times the quantity. It also uses number_format() to force the added price to have two decimal places.
        function addPrices($price, $qty, &$subtotal, &$addedPrc) {
            $subtotal += $price * $qty;
            $addedPrc = $price * $qty;
            $addedPrc = number_format($addedPrc, 2);
        };

        // Function to write a row of the table depending on if an item was selected
        function writeRows($item, $qty, &$addedPrc) {
            echo "<tr><td>$item</td><td>$qty</td><td class='price'>&dollar;$addedPrc</td></tr>";
        };

        // The below menu items are separated by item, then by size. Each item and size calls the two functions above if the user selected it in the menu page. I have separated by item below.

        // Chattanooga Cheese
        if(isset($_GET['chatanoogaCheesePersonal'])) {
            addPrices($_GET['chatanoogaCheesePersonalPrice'], $_GET['chatanoogaCheesePersonalQty'], $subtotal, $addedPrc);
            writeRows($_GET['chatanoogaCheesePersonal'], $_GET['chatanoogaCheesePersonalQty'], $addedPrc);
        }
        if(isset($_GET['chatanoogaCheeseMedium'])) {
            addPrices($_GET['chatanoogaCheeseMediumPrice'], $_GET['chatanoogaCheeseMediumQty'], $subtotal, $addedPrc);
            writeRows($_GET['chatanoogaCheeseMedium'], $_GET['chatanoogaCheeseMediumQty'], $addedPrc);
        }
        if(isset($_GET['chatanoogaCheeseLarge'])) {
            addPrices($_GET['chatanoogaCheeseLargePrice'], $_GET['chatanoogaCheeseLargeQty'], $subtotal, $addedPrc);
            writeRows($_GET['chatanoogaCheeseLarge'], $_GET['chatanoogaCheeseLargeQty'], $addedPrc);
        }
        if(isset($_GET['chatanoogaCheeseFamily'])) {
            addPrices($_GET['chatanoogaCheeseFamilyPrice'], $_GET['chatanoogaCheeseFamilyQty'], $subtotal, $addedPrc);
            writeRows($_GET['chatanoogaCheeseFamily'], $_GET['chatanoogaCheeseFamilyQty'], $addedPrc);
        }

        // Spokane Spice-Bomb
        if(isset($_GET['spokaneSpiceBombPersonal'])) {
            addPrices($_GET['spokaneSpiceBombPersonalPrice'], $_GET['spokaneSpiceBombPersonalQty'], $subtotal, $addedPrc);
            writeRows($_GET['spokaneSpiceBombPersonal'], $_GET['spokaneSpiceBombPersonalQty'], $addedPrc);
        }
        if(isset($_GET['spokaneSpiceBombMedium'])) {
            addPrices($_GET['spokaneSpiceBombMediumPrice'], $_GET['spokaneSpiceBombMediumQty'], $subtotal, $addedPrc);
            writeRows($_GET['spokaneSpiceBombMedium'], $_GET['spokaneSpiceBombMediumQty'], $addedPrc);
        }
        if(isset($_GET['spokaneSpiceBombLarge'])) {
            addPrices($_GET['spokaneSpiceBombLargePrice'], $_GET['spokaneSpiceBombLargeQty'], $subtotal, $addedPrc);
            writeRows($_GET['spokaneSpiceBombLarge'], $_GET['spokaneSpiceBombLargeQty'], $addedPrc);
        }
        if(isset($_GET['spokaneSpiceBombFamily'])) {
            addPrices($_GET['spokaneSpiceBombFamilyPrice'], $_GET['spokaneSpiceBombFamilyQty'], $subtotal, $addedPrc);
            writeRows($_GET['spokaneSpiceBombFamily'], $_GET['spokaneSpiceBombFamilyQty'], $addedPrc);
        }

        // Mount Vernon Meat
        if(isset($_GET['mountVernonMeatPersonal'])) {
            addPrices($_GET['mountVernonMeatPersonalPrice'], $_GET['mountVernonMeatPersonalQty'], $subtotal, $addedPrc);
            writeRows($_GET['mountVernonMeatPersonal'], $_GET['mountVernonMeatPersonalQty'], $addedPrc);
        }
        if(isset($_GET['mountVernonMeatMedium'])) {
            addPrices($_GET['mountVernonMeatMediumPrice'], $_GET['mountVernonMeatMediumQty'], $subtotal, $addedPrc);
            writeRows($_GET['mountVernonMeatMedium'], $_GET['mountVernonMeatMediumQty'], $addedPrc);
        }
        if(isset($_GET['mountVernonMeatLarge'])) {
            addPrices($_GET['mountVernonMeatLargePrice'], $_GET['mountVernonMeatLargeQty'], $subtotal, $addedPrc);
            writeRows($_GET['mountVernonMeatLarge'], $_GET['mountVernonMeatLargeQty'], $addedPrc);
        }
        if(isset($_GET['mountVernonMeatFamily'])) {
            addPrices($_GET['mountVernonMeatFamilyPrice'], $_GET['mountVernonMeatFamilyQty'], $subtotal, $addedPrc);
            writeRows($_GET['mountVernonMeatFamily'], $_GET['mountVernonMeatFamilyQty'], $addedPrc);
        }

        // Calculate the amounts
        $subtotal = number_format($subtotal, 2); // Forces the subtotal to have two decimal places
        $tax = $subtotal * 0.086;
        $tax = number_format($tax, 2); // Forces the tax to have two decimal places
        $total = $subtotal + $tax;
        $total = number_format($total, 2); // Forces the total to have two decimal places
        ?>
            <tr class="sub-row">
                <td></td>
                <td class="right">Subtotal</td>
                <td class="price"><?php echo "&dollar;$subtotal" ?></td>
            </tr>
            <tr>
                <td></td>
                <td class="right">Tax</td>
                <td class="price"><?php echo "&dollar;$tax" ?></td>
            </tr>
            <tr class="total-row">
                <td></td>
                <td class="right">Total</td>
                <td class="price"><?php echo "&dollar;$total" ?></td>
            </tr>
        </table>
    </main>
    <footer>
        <ul id="footer">
    		<li><a href="#">Home</a></li>
    		<li><a href="#">Menu</a></li>
            <li><a href="#">Locations</a></li>
    		<li><a href="#">Contact</a></li>
            <li><a href="#"><img src="site_images/facebook_icon.svg" alt="facebook" /></a></li>
    	</ul>
    </footer>
    <div id="loading">
        <div></div>
        <div></div>
        <div></div>
    </div>
</body>
</html>