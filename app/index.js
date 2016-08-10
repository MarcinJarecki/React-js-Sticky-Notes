import React from "react";
import ReactDOM from 'react-dom';

var SimpleComponent = React.createClass({

    render: function () {
        return (<h3>This is  reacj.js component</h3>)
    }
});

ReactDOM.render(
    <SimpleComponent />
    , document.getElementById('app')
);






