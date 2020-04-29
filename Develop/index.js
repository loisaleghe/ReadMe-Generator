let inquirer = require('inquirer');
let fs = require("fs");
let axios = require("axios");
let generateMarkdown = require('./utils/generateMarkdown.js')


//Questions needed for the readMe file
const questions = [
    {
        type: 'input',
        message: 'Enter Github Username',
        name: 'username'
    },

    {
        type: 'input',
        message: 'Enter Github repository title (a.k.a project title)',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Enter project description',
        name: 'description'
    },

    {
        type: 'input',
        message: 'Enter installation process/instructions',
        name: 'usage'
    },

    {
        type: 'list',
        message: 'Select a license for this project',
        name: 'license',
        choices: ["MIT", "Apache", "The_Unlicense", "Mozilla_PL_2", "GNU_3"]
    },

    {
        type: 'input',
        message: 'Enter ways to test the project',
        name: 'test'
    },

    {
        type: 'input',
        message: 'Enter methods users can use to contribute',
        name: 'contributing'
    },

    {
        type: 'input',
        message: 'Enter frequently asked questions',
        name: 'questions'
    }
]



const writeToFile = async (filename, data) =>{
    let fileIdentifier
    try {
        fileIdentifier = await fs.open(filename, 'w')
        await fileIdentifier.writeFile(data)
        console.log('Successfully wrote to ReadME.md')
    } catch (err) {
        console.error('Failure writing to ReadME.md', err)
    } finally {
        if (fileIdentifier !== undefined) await fileIdentifier.close()
    }
}

    const main = async () => {
        try {
            const result = await inquirer.prompt(questions);
    
            const githubUser = await axios.get(`https://api.github.com/users/${result.username}`);
    
            const markdown = generateMarkdown(result, githubUser)
            fs.writeFile('New-README.md', markdown, function (err) {
                if (err) {
                  return console.log(err)
                }
              
                console.log('Success!')
              })
        } catch (err) {
            console.log(err)
        }
    }
    


main()
