import React from 'react';
import Footer from './Footer';
import NavBar from '../components/NavBar';

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







