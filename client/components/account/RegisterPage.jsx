import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

import Button from 'react-bootstrap/Button';

import { registerUser } from '../.././redux/actions/credActions';

// import { verifyCaptcha } from '../.././lib/verifyCaptcha.js';

class RegisterPage extends React.Component {

  constructor() {
    super();
    this.state = {
      inputEmail: '',
      username: '',
      inputPass: '',
      captcha: false,
      message: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showTempMessage = this.showTempMessage.bind(this);

    this.handleRecaptcha = this.handleRecaptcha.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
  }

    handleRecaptcha(key) {
        console.log("My key: " + key);
        this.setState({captcha: true});
    }

    recaptchaLoaded() {
        console.log("Recaptcha loaded");
    }

  handleEmailChange (evt) {
    this.setState({inputEmail: evt.target.value});
  }
  handleUsernameChange(evt) {
    this.setState({username: evt.target.value});
  }
  handlePassChange (evt) {
    this.setState({inputPass: evt.target.value});
  }

  handleSubmit (evt) {
    evt.preventDefault()
    console.log("Clicked");
    const newUser = {username: this.state.username, email: this.state.inputEmail, pass: this.state.inputPass}
    this.state.captcha ? this.props.dispatch(registerUser(newUser)) : ''
    this.setState({message: 'Registering account. Please wait...'});
    this.setState({captcha: false})
  }

  showTempMessage (msg) {
    setTimeout(() => this.props.history.push('/'), 5000)
  }

  render () {
    return (
        <div className="register_page">
            <h5>{this.props.title}</h5>
            <form>
                <div className="form-group inpfield">
                    <input type="email" className="form-control" id="inpEmail" placeholder="Email" onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                </div>
                <div className="form-group inpfield">
                    <input type="text" className="form-control" id="username" placeholder="Account name" onChange={this.handleUsernameChange} value={this.state.username}/>
                </div>
                <div className="form-group inpfield">
                    <input type="password" className="form-control" id="inpPass" placeholder="Password" onChange={this.handlePassChange} value={this.state.inputPass}/>
                </div>


                <div className="recaptcha">
                    <div className="recaptcha-in">
                        <Recaptcha sitekey="6LczPrUZAAAAALbS9soM2yxZO0kI4f1TJg4RPyEJ" render="explicit" onloadCallback={this.recaptchaLoaded} verifyCallback={this.handleRecaptcha} />
                    </div>
                </div>
                <div className="gap"></div>
                <Button className="whidbeyButton" onClick={this.handleSubmit}>Register Account</Button>
            </form>


            { this.props.message ? this.props.message : '' }
        </div>
    )
  }
}

RegisterPage.propTypes = {
  inputEmail: PropTypes.string.isRequired,
  inputPass: PropTypes.string.isRequired,
  handlePassChange: PropTypes.func,
  handleEmailChange: PropTypes.func
}


export default RegisterPage;
