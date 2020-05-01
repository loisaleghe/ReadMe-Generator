// Dependencies
const license = require('./license.js')

// Markdown Generator function
const generateMarkdown = (data, gitData) => {

  // Link to license based on user input
  const licenseLink = license(data.license)

  // // Badges creation
  // let openIssues = `![GitHub issues](https://img.shields.io/github/issues-raw/${data.username}/${data.title})`
  // let contributors = `![Contributors](https://img.shields.io/github/contributors/${data.username}/${data.title})`
  // let lastCommit = `![Last Commit](https://img.shields.io/github/last-commit/${data.username}/${data.title})`
  // let codeSize = `![Code-size](https://img.shields.io/github/languages/code-size/${data.username}/${data.title})`

  // Make the avatar image smaller
  // let avatar = `<p style="margin-left:3rem">
  // <img alt="Repo Owner" src="./me (2).jpg">
  // </p>`
  let avatarURL = gitData.data.avatar_url
  let name = gitData.data.name




  //****************
  // README TEMPLATE
  //****************
  const markdown = `
# ${data.title}
 ${licenseLink[1]}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
## Installation
${data.usage} 
## Contributing
${data.contributing}
## Tests
${data.test}
## Questions

![Profile Image](${avatarURL})
* Contact: ${name}
* FAQ: ${data.questions}
## License
Licensed under the [${data.license}](${licenseLink[0]}) license.
`
  return markdown
}

module.exports = generateMarkdown
