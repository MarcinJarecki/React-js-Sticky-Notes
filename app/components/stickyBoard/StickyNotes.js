import React from 'react';
import NoteCheckBox from './NoteCheckBox';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var StickyNotes = React.createClass({

  getInitialState: function() {
    return {
      texDecorationNote: this.normalNoteStyle
    };
  },

  noteStyleAnimation: function(rowID) {
    var type = 'note noteAnimation_nth-child_5n';

    if (!(rowID % 3)) {
      type = 'note noteAnimation_nth-child_3n';
    } else if (!(rowID % 2)) {
      type = 'note noteAnimation_nth-even';
    }

    return type;
  },

  removeButtonStyle: {
    'float': 'right'
  },

  doneNoteStyle: {
    'text-decoration': 'line-through'
  },

  normalNoteStyle: {
    'text-decoration': 'none'
  },

  remove: function() {
    this.props.removeNotefromBoard(this.props.noteID);
  },

  updateText: function() {
    var newAreaTextValue = this.refs.noteTextArea.value;
    this.props.updateNoteText(this.props.noteID, newAreaTextValue);
  },

  doneNote: function(statusCheckBox) {
    if (statusCheckBox) {
      this.setState({ texDecorationNote: this.doneNoteStyle });
    } else {
      this.setState({ texDecorationNote: this.normalNoteStyle });
    }
  },

  render: function() {
    return (
      <div className={this.noteStyleAnimation(this.props.noteID) }>
        <ul>
          <li>
          <Link to="/board">
              <button onClick={this.remove} className="btn btn-xs btn-danger glyphicon glyphicon-trash"
                style={this.removeButtonStyle}> </button>
              <h4 style={this.state.texDecorationNote}>{this.props.title}</h4>
              <textarea defaultValue={this.props.text} onBlur={this.updateText} ref="noteTextArea"
                style={this.state.texDecorationNote}></textarea>

              <div id="note">
                <NoteCheckBox doneNote={this.doneNote}/>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = StickyNotes;