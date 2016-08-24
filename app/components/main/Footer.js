import React from 'react';

var Footer = React.createClass({

  render: function() {
    return (
      <footer>
        <div className="container">
          <div className="row-fluid">
            <div className="span4">
              <p>&copy; 2016 <a href="https://github.com/MarcinJarecki/">Marcin Jarecki</a></p>
            </div>
            <div className="span4">
                <a href="https://github.com/MarcinJarecki/React-js-Sticky-Notes">Git repository</a>
            </div>
            <div className="span4 text-right">
              <p>Powered By React.js and Bootstrap</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;