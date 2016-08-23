import React from 'react';
import NoteBoard from './stickyBoard/NoteBoard';
import '../main.css';

var StickyBoard = React.createClass({
  render: function() {
    return (
      <div>
        <NoteBoard/>       
      </div>
    );
  }
});

module.exports = StickyBoard;

