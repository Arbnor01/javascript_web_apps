const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

// Instantiate the model and view
const model = new NotesModel();
model.addNote('This is an example note');

// Setup an instance of NotesView with the model
const view = new NotesView(model);

// Start the application
view.displayNotes(model.getNotes());
