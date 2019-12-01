<?php

$frm_name  = "Клиент";
$recepient = "freelancerbest@yandex.ru";
$sitename  = "Уроки танцев";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["Name"]);
$email = trim($_POST["Mail"]);
$phone = trim($_POST["Phone"]);

$message = "
E-mail: $email <br>
Имя: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
