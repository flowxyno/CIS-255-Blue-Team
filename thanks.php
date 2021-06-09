<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Thank you!!</title>

<!--

S17 Tracy Harvey U08B

What objectives are you demonstrating?

- Usage of variables to store incoming form data
- Usage of isset to check to see if there is any data to be stored
- Useage of print to input the HTML code for the displaying the processed results of the incoming form data

-->

<style>


</style>

</head>
<body>
<?php

// Show errors, but not all...
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Get data from a GET or POST (change GET to POST for post)
if(isset($_POST['cname'])) { $cust = $_POST['cname']; } else { $cust = ""; }
if(isset($_POST['cmail'])) { $mail = $_POST['cmail']; } else { $mail = ""; }



// Printing out the HTML tags and data needed to produce a readable receipt for the order
print "
        <p>Hello $cust</p><br />
        <p>Your E-mail Address is: $mail</p>
    ";

//     // logic for printing items out on the receipt
//     if ($size == "sm") {
//         print "<pre>Size: Small                $5.00</pre>";
//         $tot = $tot + 5; // adding the price of the item if it is selected to the running total of the bill
//     }
//     if ($size == "md") {
//         print "<pre>Size: Medium              $10.00</pre>";
//         $tot = $tot + 10; // adding the price of the item if it is selected to the running total of the bill
//     }
//     if ($size == "lg") {
//         print "<pre>Size: Large               $15.00</pre>";
//         $tot = $tot + 15; // adding the price of the item if it is selected to the running total of the bill
//     }
//     if ($pep) {
//         print "<pre>Item: Pepperoni            $1.00</pre>";
//         $tot = $tot + 1; // adding the price of the item if it is selected to the running total of the bill
//     }
//     if ($bcn) {
//         print "<pre>Item: Bacon                $3.00</pre>";
//         $tot = $tot + 3; // adding the price of the item if it is selected to the running total of the bill
//     }
//     if ($mush) {
//         print "<pre>Item: Mushroom             $1.00</pre>";
//         $tot = $tot + 1; // adding the price of the item if it is selected to the running total of the bill
//     }
//     if ($gp) {
//         print "<pre>Item: Green Pepper         $1.00</pre>";
//         $tot = $tot + 1; // adding the price of the item if it is selected to the running total of the bill
//     }

//     $ftot = number_format($tot, 2); // formatting the running total of the bill to 2 decimal place value for a clean visual for the total at the bottom of the receipt

// print "<br />
//        <pre>Total:                     $$ftot</pre><br />
//        </p>
//        </div>";
?>
</body>
</html>