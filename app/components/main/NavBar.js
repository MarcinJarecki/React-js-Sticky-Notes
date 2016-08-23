import React from 'react';
import {IndexLink} from 'react-router';
import _ from 'lodash';

export default class NavBar extends React.Component {

  constructor() {
    super();

    this.generateNavItem = this.generateNavItem.bind(this);
    this.handleNavItemActive = this.handleNavItemActive.bind(this);
    this.findLinkInUrl = this.findLinkInUrl.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.liClassName = this.liClassName.bind(this);

    this.state = {

      activeNavItem: {
        dataId: -1
      },

      navLeftItem: [
        {
          dataId: 0,
          label: ' Home',
          link: '/home',
          class: {
            span: 'glyphicon glyphicon-home',
          }
        },
        {
          dataId: 1,
          label: ' Board',
          link: '/board',
          class: {
            span: 'glyphicon glyphicon-check',
          }
        },
        {
          dataId: 2,
          label: ' About',
          link: '/about',
          class: {
            span: 'glyphicon glyphicon-info-sign',
          }
        }
      ],
      navRightItem: [
        {
          dataId: 3,
          label: ' Account',
          link: '/account',
          class: {
            span: 'glyphicon glyphicon-cog',
          }
        },
        {
          dataId: 4,
          label: ' Logout',
          link: '/logout',
          class: {
            span: 'glyphicon glyphicon-log-in',
          }
        },
        {
          dataId: 5,
          label: ' Sign In',
          link: '/sign-in',
          class: {
            span: 'glyphicon glyphicon-user',
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
    //var _this = this;

    navItems = navItems.concat(this.state.navLeftItem).concat(this.state.navRightItem);

    this.findLinkInUrl(navItems, activeHref, (dataId) => {
      console.log('znaleziono' + dataId);
      this.setActiveItem(dataId);
      // _this.setActiveItem(dataId);
    });

  }

  setActiveItem(dataId) {
    console.log(dataId);
    this.setState({ activeNavItem: { 'dataId': dataId } });
  }

  findLinkInUrl(navItems, activeHref, callback) {
    var countItems = navItems.lenght;
    var counter = 0; // eslint-disable-line

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


