import React from 'react';
import {pFont} from '../styles';

export default class Account extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> Account information </h2>
        <div className="lead"></div>
        <div className="row-fluid" style={pFont}>
          <div className="span4">
            <p>User Name</p>
          </div>
          <div className="span4">
            <p>mail</p>
          </div>
          <div className="span4">
            <p>password</p>
          </div>
          <div className="span4">
            <p>New password</p>
          </div>
        </div>
      </div>
    );
  }
}