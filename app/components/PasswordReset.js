import React from 'react';
import {pFont} from '../styles';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> Reset password fom </h2>
        <div className="lead"></div>
        <div className="row-fluid" style={pFont}>
          <div className="span4">
            <p>Enter your email address and we will send you a link to reset your password.</p>
          </div>
          <div>
            <input autoFocus="autofocus" className="form-control input-block" id="email_field"
              name="email" placeholder="Enter your email address" type="text" />
            <input name="commit" type="submit" value="Send password reset email"
              className="btn btn-primary btn-block" />
          </div>
        </div>
      </div>
    );
  }
}