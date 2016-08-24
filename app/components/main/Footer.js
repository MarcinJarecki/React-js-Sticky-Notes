import React from 'react';
import {aFontFooter} from '../../styles';

var Footer = React.createClass({

  render: function() {
    return (
      <footer>
        <div className="container">
          <div className="row-fluid">
            <div className="span4">
              <p>&copy;2016 &nbsp;
                <a style={aFontFooter} href="https://github.com/MarcinJarecki/">Marcin Jarecki</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;