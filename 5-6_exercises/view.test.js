/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('should add a new paragraph to the document', () => {
    const view = new View();
    view.addParagraph();
    const paragraphs = document.querySelectorAll('p');
    expect(paragraphs.length).toBe(3);
  });

  it('should clear all paragraphs from the document', () => {
    const view = new View();
    view.clearParagraphs();
    const paragraphs = document.querySelectorAll('p');
    expect(paragraphs.length).toBe(0);
  });
});