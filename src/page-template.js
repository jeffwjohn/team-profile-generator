// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const engineers = [];
// let engineer = {};

// const generateTeam = data => {
//     return `
//     <section id='team'>
//     <h2 class="text-dark bg-primary p-2 display-inline-block">Team</h2>
//         <div class="flex-row justify-space-between">
//         ${data
//         .filter(({Engineers}) => Engineers)
//     .map(({name, id, email, github}) => {
//         return ` <
//         div class = "col-12 mb-2 bg-dark text-light p-3" >
//         <
//         h3 class = "portfolio-item-title text-light" > $ {
//             name
//         } < /h3>
//     `
//     })}
//     </section>
//     `
// };



const generateHTML = teamArr => {
    // console.log('HTML:', teamArr);
    // console.log('Role', data.getRole().role);
    // const engineers = data.map((role) => `${role.getRole().role}`);
    // data.forEach(function(item, index) {
    //     console.log(item, index);
    // })

    // const manager = data[0];
    // console.log('Manager:', manager);


    // const [manager, ...team] = data
    // data.forEach(function (item, index) {
    //     console.log(item, index);
    // })
    // console.log('Team:', team);

    // const engineers = team.filter(team => team.getRole().role === 'Engineer');

    // const interns = team.filter(team => team.getRole().role === 'Intern');

    // console.log('Engs:', engineers);
    // console.log('Interns:', interns);


    // for (i = 0; i < engineers.length; i++) {
    //     engineer = new Engineer(engineer[i].name, engineer[i].id, engineer[i].email, engineer[i].github);

    // }
return `
<section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${teamArr
            .map(({ name, id, email }) => {
            return ` 
            <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}${id}${email}</h3>
            </div>
            `;
        })
        .join('')}
    </div>
  </section>
 `;
};


    module.exports = templateData => {

        const {name, } = templateData;
        return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team-Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
          <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="../dist/style.css">
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <main>
        <div>
            </div>
        </section>
    ${generateHTML(team)}
        </main>
    </body>
    </html>
        `;
    };



// module.exports = generateHTML;

// <h2>${manager.name}</h2>
// <h3>${manager.getRole().role}</h3>
// <h4>${manager.id}</h4>
// <h4>${manager.email}</h4>
// <h4>${manager.officeNumber}</h4>
// </div>

// <section id='team'  class='team'>
//     <div>
//     <h2>${engineer.name}</h2>
//     <h3>${engineer.getRole().role}</h3>
//     <h4>${engineer.id}</h4>
//     <h4>${engineer.email}</h4>
//     <h4>${engineer.github}</h4>