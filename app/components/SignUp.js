import React from 'react';
import {pFont} from '../styles';

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> Create your personal account </h2>
        <div className="lead"></div>
        <div className="row-fluid" style={pFont}>
          <div className="span4">
            <p>Google</p>
            <p>Facebook</p>
            <p>------Or------</p>
          </div>
          <div className="span4">
            <p>Display Name</p>
          </div>
          <div className="span4">
            <p>Email Address</p>
          </div>
          <div className="span4">
            <p>Password</p>
          </div>
          <div className="span4">
            <p>Create an account</p>
          </div>
        </div>
      </div>
    );
  }
}