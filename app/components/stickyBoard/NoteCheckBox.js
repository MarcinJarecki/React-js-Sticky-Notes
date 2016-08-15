import React from 'react';

var NoteCheckBox = React.createClass({

  getInitialState: function() {
    return {
      checked: false
    };
  },

  handleChecked: function() {
    this.setState({ checked: !this.state.checked });
    console.log(!this.state.checked);
    this.props.doneNote(!this.state.checked);
  },

  render: function() {
    return (
      <p className="checkbox">
        <label><input className="pull-right" type="checkbox" defaultChecked={this.state.checked}
          onChange={this.handleChecked}/> Done </label>
      </p>
    );
  }
});

module.exports = NoteCheckBox;