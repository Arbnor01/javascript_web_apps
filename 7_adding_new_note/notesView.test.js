// notesView.test.js

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = `
      <div id="main-container"></div>
    `;

    const model = new NotesModel();
    const view = new NotesView(model);

    const notes = ['Note 1', 'Note 2'];
    view.displayNotes(notes);

    const noteElements = document.querySelectorAll('.note');
    expect(noteElements.length).toBe(2);
    expect(noteElements[0].textContent).toBe('Note 1');
    expect(noteElements[1].textContent).toBe('Note 2');
  });
});

