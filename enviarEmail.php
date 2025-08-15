<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'phpMailer/src/Exception.php';
    require 'phpMailer/src/PHPMailer.php';
    require 'phpMailer/src/SMTP.php';
    
    // Informações
    
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $email = $_POST["email"];
    $nome_empresa = $_POST["nome_empresa"];
    $instagram_empresa = $_POST["instagram_empresa"];
    $cenario = $_POST["cenario"];
    $experiencia = $_POST["experiencia"];
    $faturamento = $_POST["faturamento"];
    $urgencia = $_POST["urgencia"];
    $investimento = $_POST["investimento"];
    
    $descricao = "<b>Nome:</b> $nome<br><b>Telefone:</b> $telefone <br><b>Email:</b> $email <br><b>Nome da Empresa:</b> $nome_empresa<br><b>Instagram da Empresa:</b> $instagram_empresa<br><b>Cenário:</b> $cenario<br><b>Experiência:</b> $experiencia<br><b>Faturamento:</b> $faturamento<br><b>Urgência:</b> $urgencia<br><b>Investimento:</b> $investimento";
    
    $mail = new PHPMailer;
    $mail->isSMTP(); 
    $mail->SMTPDebug = 2; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
    $mail->Host = "smtp.gmail.com"; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
    $mail->Port = 587; // TLS only
    $mail->SMTPSecure = 'tls'; // ssl is depracated
    $mail->SMTPAuth = true;
    $mail->Username = "rowp.site@gmail.com";
    $mail->Password = "qnhu xqvk njph ddoy";
    $mail->setFrom("rowp.site@gmail.com", "Rowp");
    $mail->addAddress("ncardozo.rowp@gmail.com", "Natã Cardozo");
    $mail->CharSet = "UTF-8";
    $mail->Subject = 'Novo lead';
    $mail->isHTML(true);      
    $mail->Body = $descricao;
    $mail->AltBody = '';
    // $mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file
    
    if(!$mail->send()){
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
    else{
        echo "Message sent!";
    }