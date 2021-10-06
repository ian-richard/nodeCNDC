
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('Removing a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        console.log('listing notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    handler: function(){
        console.log('read notes')
    }
})
yargs.parse()
// console.log(yargs.argv)