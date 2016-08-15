import ReactDOM from 'react-dom';
import './main.css';

var routes = require('./config/routes');

ReactDOM.render(
    routes, 
    document.getElementById('app')
);

