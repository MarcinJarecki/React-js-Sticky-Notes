import React from 'react';
import StickyMenuBar from './StickyMenuBar';
import StickyNotes from './StickyNotes';

var NoteBoard = React.createClass({

  getInitialState: function() {
    return {
      notes: [
        {
          title: 'Shopping list',
          text: 'Apple'
        },
        {
          title: 'Lerning plan',
          text: 'React'
        },
        {
          title: 'Exercises list',
          text: 'Running'
        },
        {
          title: 'Other things',
          text: 'Nap'
        },
        {
          title: 'Trip list',
          text: 'Lake'
        }
      ]
    };
  },

  createNote: function(titleText) {
    var arrNotes = this.state.notes;
    arrNotes.push({ title: titleText, text: 'test' });
    this.setState({ notes: arrNotes });
  },

  removeNote: function(noteID) {
    var arrNotes = this.state.notes;
    // arrNotes.splice(noteID,1); 
    delete arrNotes[noteID];
    this.setState({ notes: arrNotes });
    console.log(this.state.notes);
  },

  updateNoteText: function(noteID, newText) {
    var arrNotes = this.state.notes;
    arrNotes[noteID].text = newText;
    this.setState({ notes: arrNotes });
  },

  eachNotes: function(note, i) {
    return (<StickyNotes key={i} noteID={i} title={note.title} text={note.text}
      removeNotefromBoard={this.removeNote} updateNoteText={this.updateNoteText} doneNote={this.doneNote} />);
  },

  render: function() {
    return (
      <div>
        <StickyMenuBar createNote={this.createNote} />
        <div className="board">
          {this.state.notes.map(this.eachNotes) }
        </div>
      </div>
    );
  }
});

module.exports = NoteBoard;