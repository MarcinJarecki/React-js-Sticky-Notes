import React from 'react';
import {Link} from 'react-router';

var NavBar = React.createClass({

  render: function() {
    return (
      <div className="board-container" id="menu-bar" >
        <div className="btn-group btn-group-lg" role="group" aria-label="...">
          <Link to="/home">
            <button type="button" className="btn btn-default pull-left navbar-btn">
              <span className=" glyphicon glyphicon-home" aria-hidden="true"></span> Home
            </button>
          </Link>
          <Link to="/board">
            <button type="button" className="btn btn-default pull-left navbar-btn">
              <span className=" glyphicon glyphicon-check" aria-hidden="true"></span>Board
            </button>
          </Link>
          <Link to="/config">
            <button type="button" className="btn btn-default pull-left navbar-btn">
              <span className=" glyphicon glyphicon-cog" aria-hidden="true"></span>Config
            </button>
          </Link>
          <Link to="/about">
            <button type="button" className="btn btn-default pull-left navbar-btn">
              <span className=" glyphicon glyphicon-plus" aria-hidden="true"></span>About
            </button>
          </Link>
          <Link to="/sign_in">
            <button type="button" className="btn btn-default pull-right navbar-btn">Sign in</button>
          </Link>
        </div>

      </div>
    );
  }
});

module.exports = NavBar;

