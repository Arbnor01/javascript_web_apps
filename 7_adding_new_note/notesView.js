// notesView.js

class NotesView {
    constructor(model) {
      this.model = model;
      this.mainContainerEl = document.querySelector('#main-container');
    }
    
    displayNotes(notes) {
      this.mainContainerEl.innerHTML = '';
  
      // For each note, create and append a new element on the main container
      notes.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.textContent = note;
        noteEl.className = 'note';
        this.mainContainerEl.append(noteEl);
      })
    }
  }
  
  module.exports = NotesView;
  