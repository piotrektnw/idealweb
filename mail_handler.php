<?php
$to      = 'biuro@idealweb.pl';
$first_name = $_POST['visitor_name'];
$subject = "Form submission";
$message = $first_name . "  wrote the following:" . "\n\n" . $_POST['visitor_msg'];
$headers = array(
    'From' => 'biuro@idealweb.pl',
    'Reply-To' => $_POST['visitor_email'],
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message, $headers);
?>