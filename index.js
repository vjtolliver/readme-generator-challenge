// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the name of your repository?'
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username',
},
{
    type: 'input',
    name: 'description',
    message: 'Please type a short description of you project.',

},
{
    typut: 'input',
    name: 'installation',
    message:
}
];

// TODO: Create a function to write README file
inquirer.prompt (questions)
.then((response) => {
    console.log(response);
    writeToFile("READMES.md", response)
})

function writeToFile(fileName, data) {
    const finalPage = `# ${data.title}
    ## Description
    ${data.description}
    
    ##Table of Content
    
    ##Installation
    
    ##Usage
    
    ##Contributing
    
    ##Tests
    
    ##License
    
    ##Questions
    GitHub: ${data-username}
   ${data-contactinfo} `
}

fs.writeFile(fileName, finalPage, function(error) {

})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
