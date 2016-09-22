import React from 'react';

export default class IncorrectLogin extends React.Component {
  render() {
    return (
      <div className="alert alert-danger">
        <a className="close" data-dismiss="alert" href="#">×</a>Incorrect Username or Password!
      </div>
    );
  }
}