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
    echo("Twoja wiadomość została wysłana. Dziękujemy. Za chwilę zostaniesz przeniesiony na stronę główną.");
    mail($to, $subject, $message, $headers);
    header('Location: /#kontakt');
  } else {
    echo("Sprawdź adres email wprowadzony do formularza. Za chwilę zostaniesz przeniesiony na stronę główną. ");
  
  }

?>