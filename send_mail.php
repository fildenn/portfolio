<?php

if(empty($_POST['contact-name'])  		||
   empty($_POST['contact-email']) 		||
   empty($_POST['contact-message'])	    ||
   empty($_POST['contact-mobile'])      ||
   !filter_var($_POST['contact-email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
         header("location:index.html");
   }
	
    $cname = $_POST['contact-name'];
    $cail = $_POST['contact-email'];
    $cmess = $_POST['contact-message'];
    $cnum = $_POST['contact-mobile'];
	

$to = 'jdmanuel242@gmail.com'; 
$email_subject = "My Portfolio Contact Form:  $cname";
$email_body = "You have received a new message from your portfolio contact form.\n\n"."Here are the details:\n\nName: $cname\n\nEmail: $cail\n\nPhone: $cnum\n\nMessage:\n$cmess";
$headers = "From: jandeybmanuel.esy.es\n"; 
$headers = "Reply-To: $cail";	
mail($to,$email_subject,$email_body,$headers);	
header("location:index.html");		
?>