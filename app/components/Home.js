import React from 'react';
import {pFont} from '../styles';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> Home Page </h2>
        <div className="lead"></div>
        <div className="row-fluid" style={pFont}>
          <div className="span4">
            <p>Login as</p>
          </div>
          <div className="span4">
            <p>Go to board</p>
          </div>
        </div>
      </div>
      );
  }
}