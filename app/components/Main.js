import React from 'react';
import Footer from './Footer';
import MenuBar from '../components/MenuBar';

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <MenuBar />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

module.exports = Main;







