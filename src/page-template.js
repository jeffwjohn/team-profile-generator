// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const engineers = [];
// let engineer = {};

// Destructure team members
// const generateTeam = team => {
//     if(!team) {
//         return '';
//     }

//     return `
//     <section class="my-3" id="about">
//     <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
//     <p>${team}</p>
//   </section>
// `;
// };

const generateMembers = membersArray => {
    
    if (!membersArray) {
        return '';
    }
const memberHtmlArr = membersArray.map(({name, id, email}) => {

return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              ID:
              ${id}
            </h5>
            <p>Email: ${email}</p>
            <a href="${email}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
    });

  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${memberHtmlArr.join('')}
      </div>
    </section>
  `;
};

module.exports = templateData => {
    console.log('Template: ', templateData);

    // destructure projects and about data from templateData based on their property key names
    const [manager, ...members] = templateData;
    console.log(manager);
    console.log(members);

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${manager.name}'s Team</h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
              manager.email
            }">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
            ${generateMembers(members)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Jeff Johnston</h3>
      </footer>
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