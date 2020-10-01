const generateHTML = data => {
    console.log(data);

    // const team = templateData;

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team-Profile</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>
    <div>
    <h2>${data.name}</h2>
    <h3>${data.role}</h3>
    <h4>${data.id}</h4>
    <h4>${data.email}</h4>
    <h4>${data.officeNumber}</h4>
    </div>
    </main>
</body>
</html>
    `;
};




module.exports = generateHTML;