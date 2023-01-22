// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

---

## Description
 ${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Licence
${data.license}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
Visit my profile: [${data.githubID}](${data.githubURL})

If you have any questions or feedback for this app, please click [here](${data.email}) to contact me.
`;
}

module.exports = generateMarkdown;
