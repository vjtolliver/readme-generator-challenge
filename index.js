// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the name of your repository?',
    name: 'title',
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
    message: 'Please enter your usage information.',
}, 
{
    type: 'input',
    name: 'contributing',
    message: 'Please enter your contribution guidelines.',
},
{
    type: 'input',
    name: 'test',
    message: 'Please enter your test instructions.',
},
{
    type: 'input',
    name: 'contact',
    message: 'Please enter how to reach you and your contact information.',
}
]


// TODO: Create a function to write README file
inquirer.prompt (questions)
.then((response) => {
    //console.log(response);
    writeToFile("READMES.md", response)
}
)

function writeToFile(fileName, data) {
    const finalPage = ` # ${data.title}
     ## Description
     ${data.description}
    
     ##Table of Content
    [Installation](#Installation)
    [Usage](#Usage)
    [Contibuting](#Contributing)
    [Tests](#Contributing)
    [License](#License)
    [Questions](#Questions)

     ##Installation
     ${data.installation}

     ##Usage
    ${data.usage}

     ##Contributing
    ${data.contribution}

     ##Tests
    ${data.test}

     ##License
    
     ##Questions
     GitHub: ${data.username}
    ${data.contactinfo} `
// }

fs.writeFile(fileName, finalPage, function(error) {
error ? console.log("error") : console.log("success!");
})
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
