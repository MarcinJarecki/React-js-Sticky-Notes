import React from 'react';
import {Link} from 'react-router';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.generateNavItem = this.generateNavItem.bind(this);
    this.state = {
      navLeftItem: [
        {
          label: ' Home',
          link: '/home',
          class: {
            li: 'nav-item',
            span: 'glyphicon glyphicon-home',
          }
        },
        {
          label: ' Board',
          link: '/board',
          class: {
            li: 'nav-item',
            span: 'glyphicon glyphicon-check',
          }
        },
        {
          label: ' About',
          link: '/about',
          class: {
            li: 'nav-item',
            span: 'glyphicon glyphicon-plus',
          }
        }
      ],
      navRightItem: [
        {
          label: ' Account',
          link: '/account',
          class: {
            li: 'nav-item',
            span: 'glyphicon glyphicon-cog',
          }
        },
        {
          label: ' Logout',
          link: '/logout',
          class: {
            li: 'nav-item',
            span: 'glyphicon glyphicon-log-in',
          }
        },
        {
          label: ' Sign In',
          link: '/sign-in',
          class: {
            li: 'nav-item',
            span: 'glyphicon glyphicon-user',
          }
        }
      ]
    };
  }

  generateNavItem(menuList) {
    return (
      menuList.map((item, i) =>
        <li key={i} className={item.class.li}>
          <Link to={item.link}>
            <span className={item.class.span} aria-hidden="true"></span>{item.label}
          </Link>
        </li>
      )
    );
  }

  //set nav-item active to right navBar element
  handleNavItemActive() {
    console.log(this.props.history);
  }

  render() {
    return (
      <nav className="navbar navbar-full navbar-inverse bg-faded">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse"
              data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Sticky Notes</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              {this.generateNavItem(this.state.navLeftItem) }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.generateNavItem(this.state.navRightItem) }              
            </ul>
          </div>
        </div>
      </nav >
    );
  }
}

