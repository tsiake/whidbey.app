import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
import { Button, Row, Col, Form, Card, FormGroup, FormControl, Checkbox, Radio } from 'react-bootstrap';

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
      inputShopType: '',
      inputShopWeb: '',
      inputShopPhone: '',
      inputDesc: '',
      username: '',
      captcha: false,
      message: '',
      SK: process.env.REACT_APP_SITE_KEY,
    }

    this.handleShopNameChange = this.handleShopNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleStreetChange = this.handleStreetChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleWebChange = this.handleWebChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleShopLinkChange = this.handleShopLinkChange.bind(this);
    this.handleShopTypeChange = this.handleShopTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showTempMessage = this.showTempMessage.bind(this);

    this.handleRecaptcha = this.handleRecaptcha.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
  }
  
  componentDidMount() {
    !this.props.isFetching && !this.props.username ? window.location.href='/login' : console.log('Logged in');
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
    this.setState({inputShopLink: evt.target.value.replace(/\s/g, '').replace(/["']/g, "").toLowerCase()});
  }

  handleDescChange (evt) {
    this.setState({inputDesc: evt.target.value});
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

  handleShopTypeChange (evt) {
    this.setState({inputShopType: evt.target.value});
  }

  handleWebChange (evt) {
    this.setState({inputShopWeb: evt.target.value});
    this.setState({inputShopWeb: evt.target.value.replace(/\s/g, '').replace(/["']/g, "").toLowerCase()});
  }

  handlePhoneChange (evt) {
    this.setState({inputShopPhone: evt.target.value.replace(/[^0-9]+/g,"")});
  }

  handleSubmit (evt) {
    evt.preventDefault()
    if(this.state.captcha == true) {
      const newShop = {owner: this.props.username, shop_name: this.state.inputShopName, shop_link: this.state.inputShopLink, city: this.state.inputCity, street: this.state.inputStreet, zip: this.state.inputZip, phone: this.state.inputPhone, web: this.state.inputWeb};
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
            <h1>Register Your Shop</h1>
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
                  <Form.Group controlId="inpShopName">
                    <Form.Control type="text" placeholder="Shop Name" onChange={this.handleShopNameChange} value={this.state.inputShopName}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="inpShopLink">
                    <Form.Control type="text" placeholder="Shop Link" onChange={this.handleShopLinkChange} value={this.state.inputShopLink}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Shop Address</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="inpStreet">
                    <Form.Control type="text" placeholder="Street" onChange={this.handleStreetChange} value={this.state.inputStreet}/>
                  </Form.Group>
                  <Form.Group controlId="inpCity">
                    <Form.Control type="text" placeholder="City" onChange={this.handleCityChange} value={this.state.inputCity}/>
                  </Form.Group>
                  <Form.Group controlId="inpZip">
                    <Form.Control type="text" placeholder="Zip Code" onChange={this.handleZipChange} value={this.state.inputZip}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Shop Website Link (optional)</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="inpWeb">
                    <Form.Control type="text" placeholder="" onChange={this.handleWebChange} value={this.state.inputWeb}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Shop Phone Number (optional)</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="inpPhone">
                    <Form.Control type="text" placeholder="" onChange={this.handlePhoneChange} value={this.state.inputPhone}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Shop Description</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="inpDesc">
                    <Form.Control type="text" placeholder="Description" onChange={this.handleDescChange} value={this.state.inputDesc}/>
                  </Form.Group>
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
                <h4>{this.state.inputDesc ? "About " + this.state.inputShopName : ""}</h4>
                <p>{this.state.inputDesc}</p>
                <p><small>{this.state.inputPhone ? "Phone: " + this.state.inputPhone: ""}</small></p>
                <p><small>{this.state.inputWeb ? "Website: " + this.state.inputPhone : ""}</small></p>
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
