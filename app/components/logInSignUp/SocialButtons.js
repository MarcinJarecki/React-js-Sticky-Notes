import React from 'react';

export default class SocialButtons extends React.Component {
  render() {
    return (
      <div className="form-group">
        <a href="/account/provider/google" title="Google"
          className="btn btn-block btn-social btn-lg btn-google">
          <i className="fa fa-google"></i> Log in with Google
        </a>
        <a href="/account/provider/facebook" title="Facebook"
          className="btn btn-block btn-social btn-lg btn-facebook">
          <i className="fa fa-facebook"></i> Log in with Facebook
        </a>
        <a href="/account/provider/github" title="github"
          className="btn btn-block btn-social btn-lg btn-github">
          <i className="fa fa-github"></i> Log in with Github
        </a>
      </div>
    );
  }
}