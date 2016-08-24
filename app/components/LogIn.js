import React from 'react';
import {Link} from 'react-router';
import {pFont, loginFormStyle} from '../styles';

var panelGrid = 'col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-3 col-lg-4 col-lg-offset-4';

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

                    <div className="alert alert-danger">
                      <a className="close" data-dismiss="alert" href="#">×</a>Incorrect Username or Password!
                    </div>

                    <div className="form-group">
                      <a href="/account/provider/google" title="Google"
                        className="btn btn-block btn-social btn-lg btn-google">
                        <i className="fa fa-google"></i> Sign in with Google
                      </a>
                      <a href="/account/provider/facebook" title="Facebook"
                        className="btn btn-block btn-social btn-lg btn-facebook">
                        <i className="fa fa-facebook"></i> Sign in with Facebook
                      </a>
                      <a href="/account/provider/github" title="github"
                        className="btn btn-block btn-social btn-lg btn-github">
                        <i className="fa fa-github"></i> Sign in with Github
                      </a>
                    </div>


                    <div style={loginFormStyle.orBox}>
                      <hr style={loginFormStyle.orHr} />
                      <span style={loginFormStyle.orSpan}>or</span>
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
                    </div>
                    <div className="form-group"><div className="checkbox">
                      <label htmlFor="rememberCheckbox" style={loginFormStyle.panelFooter}>
                        <input type="checkbox" id="rememberCheckbox" value="Remeber me" />
                        Remeber me</label>
                      <Link  to="/password_reset"  className="pull-right" style={loginFormStyle.link} >
                        Forgot password?</Link>
                    </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <label style={loginFormStyle.panelFooter}>New to Sticky Notes?&nbsp; </label>
                <Link style={loginFormStyle.link} to="/signup">Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}