<?php 
    if(isset($_POST['submit'] )){
        $name= $_POST['firstname'];
        $lastname= $_POST['lasttname'];
        $mail= $_POST['email'];

        $mailTo = "info@gitloops.com";
        $headers = "From : ".$mail ;

        mail($mailTo, $name, $lastname,$mail,$headers);
        header("Location: index.html?mailsend");
    }