// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the name of your repository?',
    name: 'title',
    //response: 'string',
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
},
{
    type: 'input',
    name: 'description',
    message: 'Please type a short description of you project.',

},
{
    typut: 'input',
    name: 'installation',
    message: 'Please enter the installation instuctions for you project.',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please enter instructions on how to use your project.',
}, 
{
    type: 'input',
    name: 'contributing',
    message: 'Please enter your guidelines for how to contribute to your project.',
},
{
    type: 'input',
    name: 'test',
    message: 'Please enter the tests for your project and test instructions.',
},
{
    type: 'list',
    name: 'license',
    choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
    message: 'Please pick the license you will be using for your project.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
},
{
    type: 'input',
    name: 'contactinfo',
    message: 'Please enter instructions on how to reach you for additional questions.',
}
]


// TODO: Create a function to write README file
inquirer.prompt (questions)
.then((response) => {
    //console.log(response);
    generateMarkdown("READMES.md", response);
    fs.writeFile('READMES.md', generateMarkdown(response), function(error) {
        error ? console.log("error") : console.log("success!");
        });
        //renderLicenseLink()
}
);

function renderLicenseLink(license) {
if (questions){
    const licenseLink = `[${data.license}]`;
     console.log(licenseLink);
   } else {
     console.log("didnt work");
}
}

// TODO: Create a function to initialize app
function init() {
    
   // renderLicenseLink();
}

// Function call to initialize app
init();
