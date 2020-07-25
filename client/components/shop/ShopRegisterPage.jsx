import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { registerShop, verifyMyCaptcha } from '../.././redux/actions/actions';

class ShopRegisterPage extends React.Component {

  constructor() {
    super();
    this.state = {
      inputShopName: '',
      inputCity: '',
      inputStreet: '',
      inputZip: '',
      inputShopLink: '',
      username: '',
      captcha: false,
      message: '',
      SK: process.env.REACT_APP_SITE_KEY,
    }

    this.handleShopNameChange = this.handleShopNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStreetChange = this.handleStreetChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleShopLinkChange = this.handleShopLinkChange.bind(this);
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

  handleShopNameChange (evt) {
    this.setState({inputShopName: evt.target.value});
    this.setState({inputShopLink: evt.target.value.replace(/\s/g, '').toLowerCase()});
  }

  handleCityChange (evt) {
    this.setState({inputCity: evt.target.value});
  }

  handleStreetChange (evt) {
    this.setState({inputStreet: evt.target.value});
  }

  handleZipChange (evt) {
    this.setState({inputZip: evt.target.value});
  }

  handleShopLinkChange (evt) {
    this.setState({inputShopLink: evt.target.value});
  }

  handleSubmit (evt) {
    evt.preventDefault()
    if(this.state.captcha == true) {
      const newShop = {owner: this.props.username, shop_name: this.state.inputShopName, shop_link: this.state.inputShopLink, city: this.state.inputCity, street: this.state.inputStreet, zip: this.state.zip};
      this.props.dispatch(registerShop(newShop));
      this.setState({captcha: false})
    }
  }

  showTempMessage (msg) {
    setTimeout(() => this.props.history.push('/'), 5000)
  }

  render () {
    return (
        <div className="shop_register_page">
            <h5>{this.props.title}</h5>
            <Form>
              <Row>
                <Col>
                  <h3>Shop Name</h3>
                </Col>
                <Col>
                  <h3>Shop Link</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-group inpfield">
                    <input type="email" className="form-control" id="inpShopName" placeholder="Shop Name" onChange={this.handleShopNameChange} value={this.state.inputShopName}/>
                  </div>

                </Col>
                <Col>
                  <div className="form-group inpfield">
                    <input type="text" className="form-control" id="inpShopLink" placeholder="Shop Link" onChange={this.handleShopLinkChange} value={this.state.inputShopLink}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Shop Address</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-group inpfield">
                    <input type="text" className="form-control" id="inpStreet" placeholder="Street" onChange={this.handleStreetChange} value={this.state.inputStreet}/>
                  </div>
                  <div className="form-group inpfield">
                    <input type="text" className="form-control" id="inpCity" placeholder="City" onChange={this.handleCityChange} value={this.state.inputCity}/>
                  </div>
                  <div className="form-group inpfield">
                    <input type="text" className="form-control" id="inpZip" placeholder="Zip Code" onChange={this.handleZipChange} value={this.state.inputZip}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Business Card Preview</h3>
                </Col>
              </Row>
              <Card body>
                <h2>{ this.state.inputShopName }</h2>
                <h4>{ this.state.inputShopLink ? "https://whidbey.io/shops/" + this.state.inputShopLink : "" }</h4>
                <p>{ this.state.inputStreet } </p>
                <p>{ this.state.inputCity + " " + this.state.inputZip }</p>
              </Card>

              <div className="gap"></div>
              <div className="recaptcha">
                <div className="recaptcha-in">
                  <Recaptcha sitekey={this.state.SK} render="explicit" onloadCallback={this.recaptchaLoaded} verifyCallback={this.handleRecaptcha} />
                </div>
              </div>
              <div className="gap"></div>
              <Button className="whidbeyButton" onClick={this.handleSubmit}>Register Shop</Button>
            </Form>


            { this.props.message ? this.props.message : '' }
        </div>
    )
  }
}

ShopRegisterPage.propTypes = {
  inputShopName: PropTypes.string.isRequired,
  inputPass: PropTypes.string.isRequired,
  handlePassChange: PropTypes.func,
  handleShopNameChange: PropTypes.func
}


export default ShopRegisterPage;
