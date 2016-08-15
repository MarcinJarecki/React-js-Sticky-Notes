import React from 'react';

var MenuBar = React.createClass({

  createNote: function(title) {
    this.props.createNote(title);
  },


  render: function() {
    return (
      <div id="menu-bar">
        <p>Main menu bar</p>
      </div>
    );
  },
});

module.exports = MenuBar;

