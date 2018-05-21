<?php 
$errors = '';
$myemail = 'cdevconsulting@protonmail.com';
if(empty($_POST['name'])  || 
   empty($_POST['company']) || 
   empty($_POST['email']) || 
   empty($_POST['phone']) ||    
   empty($_POST['project']) || 
   empty($_POST['specs']) || 
   empty($_POST['time']) || 
   empty($_POST['budget']) || 
   empty($_POST['more']) || 
   empty($_POST['goals']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$company = $_POST['company']; 
$email_address = $_POST['email']; 
$phone = $_POST['phone'];
$project = $_POST['project'];
$specs = $_POST['specs'];
$time = $_POST['time'];
$budget = $_POST['budget'];
$more = $_POST['more'];
$goals = $_POST['goals']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "cdev.co | Web Development Request";
	$email_body = "You have a new Freelance Dev Request. ".
	" Here are their details:\n Name: $name \n Company: $company \n Phone: $phone \nEmail: $email_address \n Project: $project \n Specs: $specs \n Time: $time \n Budget: $budget \n More: $more \n Goals: $goals"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: /notes/thanks');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>

</body>
</html>