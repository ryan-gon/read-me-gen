// function to generate markdown for README
function generateMarkdown(data) {
  return `#TITLE: ${data.title}
  Table of Contents: 
    ## Description: 
    ...
    ${data.description}
    ...
    ## Installation: 
    ...
    ${data.install}
    ...
    ## Usage: 
    ...
    ${data.usage}
    ...
    ## Contributing: 
    ...
    ${data.contribution}
    ...
    ## Tests: 
    ...
    ${data.test}
    ...
    ## License: 
    ...
    The MIT License (MIT)
    ...
    ## Questions: 
    ...
      Github Link: https://github.com/${data.github}/
    ...
      Please reach me at ${data.email} or the Github link listed above with any questions`

;
}

module.exports = generateMarkdown;