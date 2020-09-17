import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
import Button from 'react-bootstrap/Button';

import { registerUser, verifyMyCaptcha } from '../.././redux/actions/actions';

class RegisterPage extends React.Component {

  constructor() {
    super();
    this.state = {
      inputEmail: '',
      username: '',
      inputPass: '',
      captcha: false,
      message: '',
      SK: process.env.REACT_APP_SITE_KEY,
      canShow: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showTempMessage = this.showTempMessage.bind(this);

    this.handleRecaptcha = this.handleRecaptcha.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
  }

    handleRecaptcha(token) {
      const rpkg = {response: token}
      let response = this.props.dispatch(verifyMyCaptcha(rpkg))
      response.then((x) => {
        this.setState({captcha:true});
      });
    }

    recaptchaLoaded() {
        console.log("Recaptcha loaded");
    }

  handleEmailChange (evt) {
    this.setState({inputEmail: evt.target.value});
  }

  handlePassChange (evt) {
    this.setState({inputPass: evt.target.value});
  }

  handleSubmit (evt) {
    evt.preventDefault()
    if(this.state.captcha == true) {
      const newUser = {email: this.state.inputEmail, pass: this.state.inputPass};
      this.props.dispatch(registerUser(newUser));
      this.setState({captcha: false})
      this.showTempMessage();
    }
  }

  showTempMessage (msg) {
    this.setState({canShow: true});
    setTimeout(() => this.props.history.push('/'), 5000)
    setTimeout(() => this.setState({canShow: false}), 5000)
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
                    <input type="password" className="form-control" id="inpPass" placeholder="Password" onChange={this.handlePassChange} value={this.state.inputPass}/>
                </div>


                <div className="recaptcha">
                    <div className="recaptcha-in">
                        <Recaptcha sitekey={this.state.SK} render="explicit" onloadCallback={this.recaptchaLoaded} verifyCallback={this.handleRecaptcha} />
                    </div>
                </div>
                <div className="gap"></div>
                <div className="wb" onClick={this.handleSubmit}>Register Account</div>
            </form>


            { this.state.canShow ? this.props.message : '' }
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
