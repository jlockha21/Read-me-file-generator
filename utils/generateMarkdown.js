// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    }
    if (license == "GNU GPLv3") {
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      }
      if (license == "Apache") {
        return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        }
        if (license == "Boost") {
          return "![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
          }
          if (license == "None") {
            return "";
          }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "https://opensource.org/licenses/MIT";
    }
    if (license == "GNU GPLv3") {
      return "https://www.gnu.org/licenses/gpl-3.0";
      }
      if (license == "Apache") {
        return "https://opensource.org/licenses/Apache-2.0";
        }
        if (license == "Boost") {
          return "https://www.boost.org/LICENSE_1_0.txt";
          }
          if (license == "None") {
            return "";
          }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT") {
    return "This project is covered under the MIT license.";
    }
    if (license == "GNU GPLv3") {
      return "This project is covered under the GNU GPLv3 license.";
      }
      if (license == "Apache") {
        return "This project is covered under the Apache license.";
        }
        if (license == "Boost") {
          return "This project is covered under the Boost license.";
          }
          if (license == "None") {
            return "";
            }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
 
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Testing Process](#tests)
  * [Contributing Parties](#contributing-parties)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Testing Process
  ${data.tests}

  ## Contributing Parties
  ${data.contributing}
  
  ## License
  ${renderLicenseLink(data.license)}
  

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at (https://github.com/${data.githubUN}).
  `;
}


module.exports = generateMarkdown;
