import React from 'react';
import {IndexLink} from 'react-router';
import _ from 'lodash';
import {navBarStyle} from '../../styles';

export default class NavBar extends React.Component {

  constructor() {
    super();

    this.generateNavItem = this.generateNavItem.bind(this);
    this.handleNavItemActive = this.handleNavItemActive.bind(this);
    this.findLinkInUrl = this.findLinkInUrl.bind(this);
    this.liClassName = this.liClassName.bind(this);

    this.state = {

      activeNavItem: {
        dataId: 0
      },

      navLeftItem: [
        {
          dataId: 0,
          label: ' Home',
          link: '/home',
          class: {
            span: 'glyphicon glyphicon-home'
          }
        },
        {
          dataId: 1,
          label: ' Board',
          link: '/board',
          class: {
            span: 'glyphicon glyphicon-check'
          }
        },
        {
          dataId: 2,
          label: ' About',
          link: '/about',
          class: {
            span: 'glyphicon glyphicon-info-sign'
          }
        }
      ],
      navRightItem: [
        {
          dataId: 3,
          label: ' Account',
          link: '/account',
          class: {
            span: 'glyphicon glyphicon-cog'
          }
        },
        {
          dataId: 4,
          label: ' Log in',
          link: '/login',
          class: {
            span: 'glyphicon glyphicon-log-in'
          }
        },
        {
          dataId: 5,
          label: ' Sign up',
          link: '/signup',
          class: {
            span: 'glyphicon glyphicon-user'
          }
        }
      ]
    };
  }

  generateNavItem(menuList) {
    return (
      menuList.map((item, i) =>
        <li key={i} className={this.liClassName(item.dataId) } data-id={item.dataId}>
          <IndexLink activeClassName="active" to={item.link} >
            <span className={item.class.span} aria-hidden="true"></span>{item.label}
          </IndexLink>
        </li>
      )
    );
  }

  liClassName(dataId) {
    if (dataId === this.state.activeNavItem.dataId) {
      return 'nav-item active';
    } else {
      return 'nav-item';
    }
  }

  componentDidMount() {
    this.handleNavItemActive();
  }

  componentWillReceiveProps() {
    this.handleNavItemActive();
  }

  //set "nav-item active" class to navBar li element
  handleNavItemActive() {
    var activeHref = window.location.href;
    var navItems = [];

    navItems = navItems.concat(this.state.navLeftItem).concat(this.state.navRightItem);

    this.findLinkInUrl(navItems, activeHref, (dataId) => {
      this.setState({ activeNavItem: { 'dataId': dataId } });
    });

  }

  findLinkInUrl(navItems, activeHref, callback) {
    var countItems = navItems.lenght;
    var counter = 0; // eslint-disable-line

    if (activeHref.match(/(\/#\/\?)/g)) {
      return callback(0);
    }

    _.forEach(navItems, function loop(item) {
      counter += + 1;
      if (activeHref.match(item.link)) {
        return callback(item.dataId);
      }
      if (counter = countItems) {
        return callback(-1);
      }
    });
  }

  render() {
    return (
      <nav style={navBarStyle} className="navbar navbar-full navbar-inverse bg-faded" >
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


