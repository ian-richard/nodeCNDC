const fs = require('fs')

const getNotes = function (){
    return 'Your notes'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log('note saved')
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return [];
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};

