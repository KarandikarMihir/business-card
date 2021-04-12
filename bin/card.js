#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  dimBorder: true,
  borderColor: 'magenta'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Mihir Karandikar /'),
  handle: chalk.cyan('KarandikarMihir'),
  work: chalk.white('Frontend Engineer at Aera Technology'),
  twitter: chalk.cyan('https://twitter.com/KarandikarMihir'),
  github: chalk.cyan('https://github.com/KarandikarMihir'),
  linkedin: chalk.cyan('https://linkedin.com/in/karandikarmihir/'),
  web: chalk.cyan('https://mihir.life'),
  npx: chalk.white('npx mihirk ¯\\_(ツ)_/¯'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const strings = [
    `${data.name} ${data.handle}`,
    `${data.labelWork}  ${data.work}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    `${data.labelCard}  ${data.npx}`
]

console.log(chalk.green(boxen(strings.join('\n'), options)))