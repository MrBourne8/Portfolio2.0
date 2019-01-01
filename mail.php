<?php

$frm_name  = "Клиент";
$recepient = "youmail@ya.ru";
$sitename  = "Заказ на верстку";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["Name"]);
$phone = trim($_POST["Phone"]);

$message = "
Имя: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
