import React from 'react';
import {Link} from 'react-router';
import {pFont, loginFormStyle} from '../styles';

var panelGrid = 'col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4';

export default class LogIn extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className={panelGrid}>
            <div className="panel panel-default" style={loginFormStyle.panel}>
              <div className="panel-heading">
                <span className="glyphicon glyphicon-lock"></span> Log in Stiky Notes
              </div>
              <div className="panel-body">
                <div className="form">
                  <div className="lead"></div>
                  <div className="row-fluid" style={pFont}>
                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <a href="#" className="btn sbtn-lg btn-primary btn-block">Facebook</a>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <a href="#" className="btn btn-lg btn-info btn-block">Google</a>
                      </div>
                    </div>
                    <div>
                      <hr/>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                        <input type="email" id="inputEmail" name="email"
                          className="form-control input-block" placeholder="Email address" required
                          autoCapitalize="off" autoCorrect="off" autoFocus="autofocus"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                        <input type="password" id="inputPassword" name="password" className="form-control"
                          placeholder="Password" required />
                      </div>
                      <input type="checkbox" value="Remeber me" /> Remeber me
                      <Link to="/password_reset"  className="pull-right" style={loginFormStyle.labelLink} >
                        Forgot password?</Link>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                    </div>
                  </div>


                </div>
              </div>
              <div className="panel-footer">
                <label style={loginFormStyle.panelFooter}  >New to Sticky Notes?: &nbsp; </label>
                <Link to="/signup"  >Create an account
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}