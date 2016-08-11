import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

var MenuBar = React.createClass({

    createNote: function (title) {
        this.props.createNote(title);
    },


    render: function () {
        return (
            <div id="menu-bar">
                <button className="btn btn-lg btn-success glyphicon glyphicon-plus pull-right"
                    onClick={this.createNote.bind(null, 'Empty title') } ></button>
            </div>
        );
    },
});

var NoteBoard = React.createClass({

    getInitialState: function () {
        return {
            notes: [
                {
                    title: 'Shopping list',
                    text: 'Apple',
                },
                {
                    title: 'Lerning plan',
                    text: 'React',
                },
                {
                    title: 'Exercises list',
                    text: 'Running',
                },
                {
                    title: 'Other things',
                    text: 'Nap',
                },
                {
                    title: 'Trip list',
                    text: 'Lake',
                },
            ],
        };
    },

    createNote: function (titleText) {
        var arrNotes = this.state.notes;
        arrNotes.push({ title: titleText, text: 'test' });
        this.setState({ notes: arrNotes });
    },

    removeNote: function (noteID) {
        var arrNotes = this.state.notes;
        // arrNotes.splice(noteID,1); 
        delete arrNotes[noteID];
        this.setState({ notes: arrNotes });
        console.log(this.state.notes);
    },

    updateNoteText: function (noteID, newText) {
        var arrNotes = this.state.notes;
        arrNotes[noteID].text = newText;
        this.setState({ notes: arrNotes });
    },

    eachNotes: function (note, i) {
        return (<StickyNotes key={i} noteID={i} title={note.title} text={note.text}
            removeNotefromBoard={this.removeNote} updateNoteText={this.updateNoteText} doneNote={this.doneNote} />);
    },

    render: function () {
        return (
            <div>
                <MenuBar createNote={this.createNote} />
                <div className="board">
                    {this.state.notes.map(this.eachNotes) }
                </div>
            </div>
        );
    },
});

var StickyNotes = React.createClass({

    getInitialState: function () {
        return {
            texDecorationNote: this.normalNoteStyle,
        };
    },

    noteStyleAnimation: function (rowID) {
        var type = 'note noteAnimation_nth-child_5n';

        if (!(rowID % 3)) {
            type = 'note noteAnimation_nth-child_3n';
        } else if (!(rowID % 2)) {
            type = 'note noteAnimation_nth-even';
        }

        return type;
    },

    removeButtonStyle: {
        'float': 'right',
    },

    doneNoteStyle: {
        'text-decoration': 'line-through',
    },

    normalNoteStyle: {
        'text-decoration': 'none',
    },

    remove: function () {
        this.props.removeNotefromBoard(this.props.noteID);
    },

    updateText: function () {
        var newAreaTextValue = this.refs.noteTextArea.value;
        this.props.updateNoteText(this.props.noteID, newAreaTextValue);
    },

    doneNote: function (statusCheckBox) {
        if (statusCheckBox) {
            this.setState({ texDecorationNote: this.doneNoteStyle });
        } else {
            this.setState({ texDecorationNote: this.normalNoteStyle });
        }
    },

    render: function () {
        return (
            <div className={this.noteStyleAnimation(this.props.noteID) }>
                <ul>
                    <li>
                        <a href="#">

                            <button onClick={this.remove} className="btn btn-xs btn-danger glyphicon glyphicon-trash"
                                style={this.removeButtonStyle}> </button>
                            <h4 style={this.state.texDecorationNote}>{this.props.title}</h4>
                            <textarea defaultValue={this.props.text} onBlur={this.updateText} ref="noteTextArea"
                                style={this.state.texDecorationNote}></textarea>

                            <div id="note">
                                <NoteCheckBox doneNote={this.doneNote}/>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    },
});

var NoteCheckBox = React.createClass({

    getInitialState: function () {
        return {
            checked: false,
        };
    },

    handleChecked: function () {
        this.setState({ checked: !this.state.checked });
        console.log(!this.state.checked);
        this.props.doneNote(!this.state.checked);
    },

    render: function () {
        return (
            <p className="checkbox">
                <label><input className="pull-right" type="checkbox" defaultChecked={this.state.checked}
                    onChange={this.handleChecked}/> Done </label>
            </p>
        );
    },
});

var Footer = React.createClass({

    render: function () {
        return (
            <footer>
                footer
            </footer>
        );
    },
});

ReactDOM.render(
    <div className="board-container">
        <NoteBoard/>
        <Footer/>
    </div>
    , document.getElementById('app-container'));






