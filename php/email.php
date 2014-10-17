<?php
$subject    = $_REQUEST['subject'] . ' - Sent from Contact form'; // Subject of your email
$to         = 'contact@flightwatching.com'; //Recipient's E-mail
$headers    = 'MIME-Version: 1.0' . "\r\n" .
              'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$message    = 'Name: ' . $_REQUEST['name'] . ' <br/>' .
              'E-mail: ' . $_REQUEST['email'] . ' <br/>' .
              'Message: ' .$_REQUEST['message'];
if (@mail($to, $subject, $message, $headers))
{
 echo 'sent';
}
else
{
 echo 'failed';
}
?>