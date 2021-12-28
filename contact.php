<?php 
    $name = $_Post['visitor_name';]
    $email = $_Post['visitor_email';]
    $phone = $_Post['visitor_phone';]
    $msg = $_Post['visitor_msg';]


    $email_from = "piotrpanek111@gmail.com"

    $email_subject = "New form submission"

    $email_body = "Username: $name.\n".
                    "User-email: $email.\n".
                    "Message: $msg.\n";

    $to = "piotrpanek111@gmail.com"


    $headers = "From: $email_from \r\n";

    $headers = "Reply-to: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);


    header("Location: index.html");

?>