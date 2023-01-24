// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

---

${getBadge('LicenseType', data.license, data.licenseColor)}
 
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
This project is licensed under the terms of the ${data.license} license.

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
Visit my GitHub profile: [${data.githubID}](${data.githubURL})

If you have any questions or feedback for this app, please click [here](${data.email}) to contact me.

---

© 2023 ${data.githubID}. All rights reserved.
`;
}

function getBadge(badgeType, message, color) {
  return `![${badgeType}](https://img.shields.io/static/v1?label=${badgeType}&message=${encodeURIComponent(message)}&color=${color})`
};

module.exports = generateMarkdown;
