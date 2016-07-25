<?php

if(empty($_POST['contactName'])  		||
   empty($_POST['contactEmail']) 		||
   empty($_POST['contactSubject']) 		||
   empty($_POST['contactMessage'])	   ||
   empty($_POST['contactNum'])         ||
   !filter_var($_POST['contactEmail'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
         header("location:index.php?signal=sent#header");
   }
	
    $cname = $_POST['contactName'];
    $cail = $_POST['contactEmail'];
    $csub = $_POST['contactSubject'];
    $cmess = $_POST['contactMessage'];
    $cnum = $_POST['contactNum'];
	

$to = 'jdmanuel242@gmail.com'; 
$email_subject = "My Portfolio Contact Form:  $cname";
$email_body = "You have received a new message from your portfolio contact form.\n\n"."Here are the details:\n\nName: $cname\n\nEmail: $cail\n\nPhone: $cnum\n\nSubject: $csub\n\nMessage:\n$cmess";
$headers = "From: jandeybmanuel.esy.es\n"; 
$headers = "Reply-To: $cail";	
mail($to,$email_subject,$email_body,$headers);	
header("location:index.php?signal=sent");		
?>