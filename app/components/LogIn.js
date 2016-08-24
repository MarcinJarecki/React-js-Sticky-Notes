import React from 'react';
import {pFont} from '../styles';

export default class LogIn extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> Log in Stiky Notes  </h2>
        <div className="lead"></div>
        <div className="row-fluid" style={pFont}>
          <div className="span4">
            <p>Google</p>
            <p>Facebook</p>
            <p>------Or------</p>
          </div>
          <div className="span4">
            <p>Email Address</p>
          </div>
          <div className="span4">
            <p>Password</p>
          </div>
          <div className="span4">
            <p>Log in</p>
          </div>
        </div>
      </div>
    );
  }
}