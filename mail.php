<?php 

require_once "Mail.php";

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$headers = array(
    'From' => $name,
    'To' => 'jatin13csu057@ncuindia.edu',
    'Subject' => 'Enquiry'
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'jatin13csu057@ncuindia.edu',
        'password' => 'itmuniv27'
    ));

$mail = $smtp->send($to, $headers, $message);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}

?>