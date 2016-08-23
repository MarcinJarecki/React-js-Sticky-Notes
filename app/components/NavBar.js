import React from 'react';
import {Link} from 'react-router';

export default class NavBar extends React.Component {
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
              <li className="nav-item active">
                <Link to="/home">
                  <span className=" glyphicon glyphicon-home" aria-hidden="true"></span> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/board">
                  <span className=" glyphicon glyphicon-check" aria-hidden="true"></span> Board
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <span className=" glyphicon glyphicon-plus" aria-hidden="true"></span> About
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <Link to="/account">
                  <span className="glyphicon glyphicon-cog"></span> Account
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout">
                 <span className="glyphicon glyphicon-log-in"></span> Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login">
                 <span className="glyphicon glyphicon-user"></span> Log In 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    );
  }
}



  // render: function() {
  //   return (
  //     <div className="board-container" id="menu-bar" >
  //       <div className="btn-group btn-group-lg" role="group" aria-label="...">
  //         <Link to="/home">
  //           <button type="button" className="btn btn-default pull-left navbar-btn">
  //             <span className=" glyphicon glyphicon-home" aria-hidden="true"></span> Home
  //           </button>
  //         </Link>
  //         <Link to="/board">
  //           <button type="button" className="btn btn-default pull-left navbar-btn">
  //             <span className=" glyphicon glyphicon-check" aria-hidden="true"></span>Board
  //           </button>
  //         </Link>
  //         <Link to="/config">
  //           <button type="button" className="btn btn-default pull-left navbar-btn">
  //             <span className=" glyphicon glyphicon-cog" aria-hidden="true"></span>Config
  //           </button>
  //         </Link>
  //         <Link to="/about">
  //           <button type="button" className="btn btn-default pull-left navbar-btn">
  //             <span className=" glyphicon glyphicon-plus" aria-hidden="true"></span>About
  //           </button>
  //         </Link>
  //         <Link to="/sign_in">
  //           <button type="button" className="btn btn-default pull-right navbar-btn">Sign in</button>
  //         </Link>
  //       </div>

  //     </div>
  //   );
//   }
// });

// module.exports = NavBar;

