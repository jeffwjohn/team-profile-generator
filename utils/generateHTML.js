const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const engineers = [];
let engineer = {};

const generateHTML = (data) => {
    console.log('HTML:', data);
    // console.log('Role', data.getRole().role);
    // const engineers = data.map((role) => `${role.getRole().role}`);
    // data.forEach(function(item, index) {
    //     console.log(item, index);
    // })

    // const manager = data[0];
    // console.log('Manager:', manager);


    const [manager, ...team] = data
    data.forEach(function(item, index) {
        console.log(item, index);
    })
    console.log('Team:', team);

    const engineers = team.filter(team => team.getRole().role === 'Engineer');

    const interns = team.filter(team => team.getRole().role === 'Intern');

    console.log('Engs:', engineers);
    console.log('Interns:', interns);


    for (i = 0; i < engineers.length; i++) {
        engineer = new Engineer(engineer[i].name, engineer[i].id, engineer[i].email, engineer[i].github);

    }

    

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

    <section id='team'  class='team'>
        <div>
        <h2>${engineer.name}</h2>
        <h3>${engineer.getRole().role}</h3>
        <h4>${engineer.id}</h4>
        <h4>${engineer.email}</h4>
        <h4>${engineer.github}</h4>
        </div>
    </section>
    </main>
</body>
</html>
    `;
};




module.exports = generateHTML;