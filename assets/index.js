// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


//Creates an array of questions for user input
const questions =
   [
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
    {
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
      type: 'list',
      name: 'license',
      message: 'Which License does your repository use?',
      choices: [
        'Berkeley Software Distribution License (BSD)',
        'MIT license',
        'GNU General Public License',
        'Apache License 2.0',
        'Internet Systems Consortium (ISC) License'
      ]
    },
    {
      type: 'input',
      name: 'githubUser',
      message: 'What is your Github Username'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Email address'
    }
  ];
  
//writes inquirer prompt to the readme, with file name and the generated markdown as the two params
  function writeToFile(fileName, contentText){
    fs.writeFile(fileName, contentText, (err) => {
      err ? console.log(err) : console.log('Generated your Readme')
    });
  }

//starts an inquirer prompt with the questions array being used
//generates a markdown with the answers from the prompt
//writes a file with the new content being generated
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
     const newMarkdown = generateMarkdown(answers);
     const newFileName = 'exampleReadME.md';
    

      writeToFile(newFileName, newMarkdown);
  });
}

// Function call to initialize app
init();