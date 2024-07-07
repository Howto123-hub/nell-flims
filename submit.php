<?php
// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	
	// Get form data
	$title = $_POST['title'];
	$text = $_POST['text'];
	$image_name = $_FILES['image']['name'];
	$image_tmp_name = $_FILES['image']['tmp_name'];
	
	// Generate unique file name
	$date = date('Y-m-d-H-i-s');
	$file_name = $date . '.html';
	
	// Create HTML file
	$file_content = '<!DOCTYPE html>
<html>
<head>
	<title>' . $title . '</title>
</head>
<body>

	<h1>' . $title . '</h1>
	
	<p>' . $text . '</p>
	
	<img src="' . $image_name . '">
	
</body>
</html>';
	
	// Save HTML file
	$file_path = 'pages/' . $file_name;
	move_uploaded_file($image_tmp_name, 'images/' . $image_name);
	file_put_contents($file_path, $file_content);
	
	// Show success message with link to new page
	echo 'Your content has been submitted. <a href="' . $file_path . '">View your new page</a>.';
	
}
?>
