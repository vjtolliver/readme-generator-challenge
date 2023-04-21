// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}
  // let choices = ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"];
  // if (choices) {
  //   const licenseLink = `[${data.license}]`;
  //   console.log(licenseLink);
  // } else {
  //   console.log("didnt work");
  // }
 // "https://img.shields.io/static/github/license/:user/:repo"
//   inquirer.prompt (questions)
// .then((response) => {
//  let ${data.license} = 
 //  let choices = ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"];
//   for (let response of choices)
//   if (` ${data.license} ` === response) {
//     let firstPart = `[[![${data.license}]]`
//     console.log(firstPart);
//   } else {
//     return "";
//   }

//}
//[${data.license}]("https://img.shields.io/static/github/license/${data.username}/:${data.title}")

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   //renderLicenseLink();
   return ` # ${data.title}
   ## Description
   ${data.description}
       
   ## Table of Content
   [Installation](#Installation)
   
   [Usage](#Usage)
   
   [Contibuting](#Contributing)
   
   [Tests](#Contributing)
   
   [License](#License)
   
   [Questions](#Questions)
   
   ## Installation
   ${data.installation}
   
   ## Usage
   ${data.usage}
   
        
   ## Contributing
       
   ${data.contributing}
   
   ## Tests
   ${data.test}
   
   ## License
   ${data.license}
   
       
   ## Questions
   GitHub Profile: [${data.username}](https://github.com/${data.username})
   Email: ${data.email}
   ${data.contactinfo} `
 };

module.exports = generateMarkdown;
