import React from 'react';
import {aboutFontColor} from '../styles';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h2> About </h2>
        <div className="lead" style={aboutFontColor}> {this.props.route.header} </div>
      </div>
    );
  }
}