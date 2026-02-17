<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form inputs
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $city = htmlspecialchars($_POST['city']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Use a verified email from your domain
    $fromEmail = "contact@waveshome.in"; // Replace with an actual email from your domain

    // Email details
    $to = "waveshomeinfo@gmail.com"; 
    $subject = "New Call Back Request from $name";
    
    // Email message
    $body = "
        <html>
        <head>
            <title>Call Back Request</title>
        </head>
        <body>
            <h2>Call Back Request Details</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>City:</strong> $city</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>
    ";

    // Headers
    $headers = "From: $fromEmail\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";


    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Invalid request";
}
?>
