const NotesModel = require('./NotesModel');


it('should create a new NotesModel', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });
  





// const model = new NotesModel();

// model.getNotes(); // should return []

// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []