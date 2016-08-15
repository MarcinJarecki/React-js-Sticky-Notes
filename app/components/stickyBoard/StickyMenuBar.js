import React from 'react';

var StickyMenuBar = React.createClass({

  createNote: function(title) {
    this.props.createNote(title);
  },


  render: function() {
    return (
      <div id="menu-bar">
        <button className="btn btn-lg btn-success glyphicon glyphicon-plus pull-right"
          onClick={this.createNote.bind(null, 'Empty title') } ></button>
      </div>
    );
  }
});

module.exports = StickyMenuBar;

