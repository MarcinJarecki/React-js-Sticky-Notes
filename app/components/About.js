import React from 'react';
import {aFont, pFont} from '../styles';

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> About </h2>
        <div className="lead"></div>
        <div className="row-fluid" style={pFont}>
          <div className="span4">
            <p>&copy;2016 &nbsp;
              <a style={aFont} href="https://github.com/MarcinJarecki/">Marcin Jarecki</a>
            </p>
          </div>
          <div className="span4">
            <p>Git repository: &nbsp;
              <a style={aFont} href="https://github.com/MarcinJarecki/React-js-Sticky-Notes">
                link to repository</a>
            </p>
          </div>
          <div className="span4">
            <p>Static pages hosted on GitHub Pages:&nbsp;
              <a style={aFont} href="https://marcinjarecki.github.io/React-js-Sticky-Notes/">live demo app</a>
            </p>
          </div>
          <div>
            <p>Powered By React.js and Bootstrap</p>
          </div>
        </div>


      </div>
    );
  }
}