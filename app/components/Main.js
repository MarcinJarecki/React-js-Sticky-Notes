import React from 'react';
import Footer from './main/Footer';
import NavBar from './main/NavBar';

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

module.exports = Main;







