import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import { loginUser } from '../.././redux/actions/actions';

class LoginPage extends React.Component {

  constructor() {
    super();
    this.state = {
      inputEmail: '',
      username: '',
      inputPass: '',
      captcha: false,
      message: '',
      canShow: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginRedirect = this.loginRedirect.bind(this);
  }

  handleEmailChange (evt) {
    this.setState({inputEmail: evt.target.value});
  }

  handlePassChange (evt) {
    this.setState({inputPass: evt.target.value});
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const newUser = {email: this.state.inputEmail, pass: this.state.inputPass};
    this.props.dispatch(loginUser(newUser));
    this.loginRedirect();
  }

  loginRedirect () {
    this.setState({canShow:true});
    setTimeout(function() { this.props.history.push('/') }.bind(this), 2000);
    setTimeout(() => this.setState({canShow:false}), 2000);
  }

  render () {
    return (
        <div className="login_page">
            <h5>{this.props.title}</h5>
            <form>
                <div className="form-group inpfield">
                    <input type="email" className="form-control" id="inpEmail" placeholder="Email" onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                </div>
                <div className="form-group inpfield">
                    <input type="password" className="form-control" id="inpPass" placeholder="Password" onChange={this.handlePassChange} value={this.state.inputPass}/>
                </div>

                <div className="gap"></div>
                <div className="wb" onClick={this.handleSubmit}>Log in</div>
            </form>

            { this.state.canShow ? this.props.message : '' }
        </div>
    )
  }
}

LoginPage.propTypes = {
  inputEmail: PropTypes.string.isRequired,
  inputPass: PropTypes.string.isRequired,
  handlePassChange: PropTypes.func,
  handleEmailChange: PropTypes.func
}


export default LoginPage;
