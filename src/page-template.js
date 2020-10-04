const generateMembers = membersArray => {

    if (!membersArray) {
        return '';
    }

    const generateEngineers = membersArray.filter(member => {
        if (member.getRole().role === 'Engineer') {
            return true;
        } else {
            return false;
        }
    });

    const engineerHtmlArr = generateEngineers.map(
        ({ name, id, email, github }) => {
          return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="team-item-title text-light">${name}</h3>
              <h5 class="team-languages">
              Engineer<i class="fas fa-cog ml-2"></i>
            </h5>
            <p>ID: ${id}</p>
              <a href="mailto:${email}" class="btn mt-auto"><i class="fas fa-envelope-square mr-2"></i>Email: ${email}</a>
              <a href="https://github.com/${github}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>Visit My GitHub Page</a>
            </div>
          `;
        }
      );

    const generateInterns = membersArray.filter(member => {
        if (member.getRole().role === 'Intern') {
            return true;
        } else {
            return false;
        }
    });

    const internHtmlArr = generateInterns.map(
        ({ name, id, email, school }) => {
          return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="team-item-title text-light">${name}</h3>
              <h5 class="team-languages">
                Intern<i class="fas fa-graduation-cap ml-2"></i>
              </h5>
              <p>ID: ${id}</p>
              <p>School: ${school}</p>
              <a href="mailto:${email}" class="btn mt-auto"><i class="fas fa-envelope-square mr-2"></i>Email: ${email}</a>
            </div>
          `;
        }
      );

    return `
    <section class="my-3" id="team">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Team</h2>
      <div class="flex-row justify-space-between">
      ${managerHtmlArr}
      ${engineerHtmlArr.join('')}
      ${internHtmlArr.join('')}
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
      <title>Team-Profile-Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${manager.name}'s Team</h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/jeffwjohn/team-profile-generator">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
      
      
      <div class="pl-3 col-12 mb-2 bg-dark text-light p-3 flex-column">
      <h3 class="team-item-title text-light">${manager.name}</h3>
      <h5 class="team-languages">
        ${manager.getRole().role}<i class="fas fa-mug-hot mr-2 ml-2"></i>
      </h5>
      <p>ID: ${manager.id}</p> 
      <p>Office: ${manager.officeNumber}</p>
      <a href="mailto:${manager.email}" class="btn mt-auto"><i class="fas fa-envelope-square mr-2"></i>Email: ${manager.email}</a>
      </div>  
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

// [
//     Manager {
//       name: 'Jeff Johnston',
//       id: '1',
//       email: 'jeffwjohn@yahoo.com',
//       officeNumber: '321a'
//     },
//     Engineer {
//       name: 'Bill Weisman',
//       id: '2',
//       email: 'bill@email.com',
//       github: 'jeffwjohn'
//     },
//     Intern {
//       name: 'Jody Springer',
//       id: '3',
//       email: 'jody@email.com',
//       school: 'Harvard'
//     }
//   ]