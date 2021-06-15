<!DOCTYPE html>
<html>
<head>
    <title>American Pizzas - Contact Request Receipt</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="base.css" rel="stylesheet" />
    <link href="contact.css" rel="stylesheet" />
    <script src="base.js"></script>
    <!-- 
        CIS 155 Team Project - Spring 2021
            
        Site Name: American Pizza
        Team Name: Developer Dudes
        Authors: Adam Rodriguez, Tracy Harvey, James Coolidge
    -->
</head>
<body>
    <!-- The navigation menu list. -->
    <nav id="nav_menu">
    	<ul>
            <!-- Move the 'current' class to whichever page this is. It will make that button stand out to show the user which page they're on. (remove this comment before publishing) -->
            <li><a href="home.html"><img src="site_images/logo.jpg" alt="American Pizza"/></a></li>
    		<li><a href="home.html">Home</a></li>
    		<li><a href="menu.htm">Menu</a></li>
            <li><a href="locations.htm">Locations</a></li>
    		<li><a href="contact.htm">Contact</a></li>
    	</ul>
        <!-- lines under links -->
        <div id="line_under_link1"></div>
        <div id="line_under_link2"></div>
    </nav>
	<main>
       
        <?php
        
        // Gathering passed in form data into their respective variables
        if(isset($_POST['cname'])) { $cust = $_POST['cname']; } else { $cust = ""; } 
        if(isset($_POST['cmail'])) { $mail = $_POST['cmail']; } else { $mail = ""; }
        if(isset($_POST['mess'])) { $mes = $_POST['mess']; } else { $mes = "";}
            
        // Construction of the customer feedback receipt
        print "
            <div id='receipt'>
                <h1>Thank you for your feed back it is very valuable to us.</h1>
                <div id='inner'>
                    <fieldset>
                        <legend>Synopsis of Customer Feedback: </legend>
                        <p><b>Customer Name: </b>$cust</p> 
                        <p><b>Customer Email: </b>$mail</p>
                        <p><b>Customer Input: </b><br /> $mes </p>
                    </fieldset>
                </div
            </div>
        ";

        ?>
    <div id="loading">
        <div></div>
        <div></div>
        <div></div>
    </div>
</body>
</html>