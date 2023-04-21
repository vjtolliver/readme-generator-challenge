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
        

function renderLicenseLink(license) {
if (response.license === "Apache License 2.0"){
    const licenseLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
     console.log(licenseLink);

     fs.appendFile('READMES.md', licenseLink, (err) =>
err ? console.error(err) : console.log('License logged!'));
     
} else if (response.license === "GNU General Public License v3.0") {
    const licenseLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "MIT License") {
    const licenseLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "BSD 2-Clause 'Simplified' License") {
    const licenseLink = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "BSD 3-Clause 'New' or 'Revised' License") {
    const licenseLink = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "Boost Software License 1.0") {
    const licenseLink = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "Creative Commons Zero v1.0 Universal") {
    const licenseLink = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "Eclipse Public License 2.0") {
    const licenseLink = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "GNU Affero General Public License v3.0") {
    const licenseLink = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "GNU General Public License v2.0") {
    const licenseLink = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "GNU Lesser General Public License v2.1") {
    const licenseLink = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "Mozilla Public License 2.0") {
    const licenseLink = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else if (response.license === "The Unlicense") {
    const licenseLink = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    console.log(licenseLink);

    fs.appendFile('READMES.md', licenseLink, (err) =>
    err ? console.error(err) : console.log('License logged!'));

} else {
     console.log("didn't work");
     
}
}
renderLicenseLink();
});

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
