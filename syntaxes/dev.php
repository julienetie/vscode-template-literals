<?php
// This is a PHP block. You can add PHP logic here if needed.
$greeting = "Hello from PHP!";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Example with JavaScript Template Literals</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #container {
            margin: 20px;
        }
    </style>
</head>
<body>
    <div id="container">
        <h1><?php echo $greeting; ?></h1> <!-- PHP variable used in HTML -->
        <button id="showMessage">Show Message</button>
        <div id="output"></div>
    </div>

    <script>
        // JavaScript with a template literal containing HTML markup
        const message = `
            <div style="background-color: lightblue; padding: 10px; border-radius: 5px;">
                <h2>Hello from Template Literal!</h2>
                <p>This content is inside a JavaScript template literal.</p>
            </div>`;

        document.getElementById('showMessage').addEventListener('click', function() {
            // Insert the template literal content into the output div
            document.getElementById('output').innerHTML = message;
        });
    </script>
</body>
</html>

