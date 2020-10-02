const Manager = require("../lib/Manager");

const generateHTML = (data) => {
    // console.log(data);
    // const [manager] = data;
    
    const team = data;
    // console.log('Team:', team);
    const manager = new Manager(data[0].name, data[0].id, data[0].email, data[0].officeNumber);
    // console.log(manager.getRole());
    // console.log('Manager:', manager);
    

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
    <h2>${manager.name}</h2>
    <h3>${manager.getRole().role}</h3>
    <h4>${manager.id}</h4>
    <h4>${manager.email}</h4>
    <h4>${manager.officeNumber}</h4>
    </div>

    <div>
 
    </div>
    </main>
</body>
</html>
    `;
};




module.exports = generateHTML;