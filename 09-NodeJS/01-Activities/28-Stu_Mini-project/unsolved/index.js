const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
` <!DOCTYPE>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <title>${answers.name}</title>
        </head>
        <body>
            <div style='color: white; background: #06b393d7' class="jumbotron d-flex justify-content-center">
            <header class="display-2"> Hello! may name is ${answers.name}!
            <p class="display-4"> I live in ${answers.location}.</p>

            </div>
                <div style='color:#06b393d7'>
                <div class=" d-flex align-items-center flex-column">
                <h2 class="display-4 font-weight-bolder border-bottom-2"> My favorite hobby is </h2>
                <h3 class="display-5"> ${answers.hobby}</h3>
                
                <h2 class="display-4 font-weight-bolder border-bottom-2"> My favorite food is </h2>
                <h3 class="display-5"> ${answers.food}</h3>
                </div>
                <ul>
                <li> Github: <a target='_blank' href="https://github.com/${answers.github}" style="text-decoration: none; color:#06b393d7 "> ${answers.github}</a></li>

                <li>LinkedIn: <a target='_blank' href="${answers.linkedIn}" style="text-decoration: none; color: #06b393d7"> ${answers.linkedIn}</a></li>
                </ul>
            </div>
        </body>
    </html>`

inquirer
    .prompt( [
        {
            message: "What is your name?",
            name: "name",
            type: 'input'
        },
        {
            message: "Where do you live?",
            name: "location",
            type: 'input'
        },
        {
            message: "What's your favorite hobby?",
            name: "hobby",
            type: 'input'
        },
        {
            message: "Whats your favorite food?",
            name: "food",
            type: 'input'
        },
        {
            message: "What's your GitHub username?",
            name: "github",
            type: 'input'
        },
        {
            message: "What's your LinkedIn URL",
            name: "linkedIn",
            type: 'input',
        },
    ])

    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
        fs.writeFile('index.html', htmlPageContent, (err) => err ? console.log(err) : console.log('Succesfully created index.html!'));
    })