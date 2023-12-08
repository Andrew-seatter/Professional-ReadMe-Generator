// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

import generateMarkdown from './generateMarkdown';
// TODO: Create an array of questions for user input
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Tell us a little about your project',
    },
    ,{
      type: 'input',
      name: 'Usage',
      message: 'Provide a short description about the usage',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Type any information about the credits',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Which License does your repository use?',
    }
  ])
  .then((answers) => {
    const newMarkdown = generateMarkdown(answers);

    fs.writeFile('exampleREADME.md', newMarkdown, (err) =>
    err ? console.log(err) : console.log('Succesfully created new README!'));
  })


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();