<?php
$to      = 'biuro@idealweb.pl';
$first_name = $_POST['visitor_name'];
$subject = "Form submission";
$email = $_POST['visitor_email'];
$message = $first_name . "  wrote the following:" . "\n\n" . $_POST['visitor_msg'];
$headers = array(
    'From' => 'biuro@idealweb.pl',
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion()
);

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo("$email is a valid email address");
    mail($to, $subject, $message, $headers);
  } else {
    echo("$email is not a valid email address");
  }

?>