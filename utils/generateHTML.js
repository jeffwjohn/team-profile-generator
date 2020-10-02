const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");

const generateHTML = (data) => {
    console.log('HTML:', data);
    // const [manager] = data;
    
    // const team = data;
    // console.log('Team:', team);
    // const manager = new Manager(data[0].name, data[0].id, data[0].email, data[0].officeNumber);
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
    // FUNCTION TO WRITE HTML
const writeHTML = (data) => {
        fs.writeFile("Team-Profile.html", generateHTML(data), (err) => {
            if (err) console.log(err);
                
            console.log('HTML created!');
    
    });
};
    </div>

    <div>
 
    </div>
    </main>
</body>
</html>
    `;
};




module.exports = generateHTML;