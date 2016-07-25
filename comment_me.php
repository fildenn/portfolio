<?php

$cmess = $_POST['contactMessage'];
	
$to = 'jdmanuel242@gmail.com'; 
$email_subject = "My Portfolio Feedback Form:";
$email_body = "You have received a feedback from your portfolio.\n\n"."$cmess";
$headers = "From: jandeybmanuel.esy.es\n"; 
$headers = "";	
mail($to,$email_subject,$email_body,$headers);	
header("location:index.php?signal=sentfeedback");		
?>