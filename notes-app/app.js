
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'add a new note'
})