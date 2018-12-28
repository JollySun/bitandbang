#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.cyan.bold('                Jolly Sun'),
  work: chalk.white('Full Stack Developer'),
  location: chalk.white('ShangHai, China'),
  twitter: chalk.cyan.bold('https://twitter.com/JsunMr'),
  github: chalk.cyan.bold('https://github.com/JollySun'),
  web: chalk.cyan.bold('https://sunlx.me'),
  npx: chalk.green.bold('npx jollysun'),
  labelWork: chalk.white.bold('       Work:'),
  labelLocation: chalk.white.bold('   Location:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const location = `${data.labelLocation}  ${data.location}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
  newline + newline + // Add one whole blank line
  working + newline + // data.labelWork + data.work
  location + newline + newline + // data.labelOpenSource + data.opensource
  twittering + newline + // data.labelTwitter + data.twitter
  githubing + newline + // data.labelGitHub + data.github
  webing + newline + newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

console.log(chalk.green(boxen(output, options)))
