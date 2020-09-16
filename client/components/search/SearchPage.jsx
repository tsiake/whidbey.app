import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Form, Card, FormGroup, FormControl, Checkbox, Radio } from 'react-bootstrap';
import { getMyShops } from '../.././redux/actions/actions';

class SearchPage extends React.Component {
  
  constructor() {
    super();
    this.state = {}
  }

	componentDidMount() {
    this.props.dispatch(getMyShops({}));
  }

	render() {

    /*
    let name = this.props.shops ? this.props.shops[0].name : '';
    let street = this.props.shops ? this.props.shops[0].street : '';
    let city = this.props.shops ? this.props.shops[0].city : '';
    let phone = this.props.shops ? phone : '';
    let web = this.props.shops ? web : '';
    let desc = this.props.shops ? this.props.shops[0].desc : '';
    */

		return (
      <div>
        { /*
        <Card body>
          <h2>{ name }</h2>
          <p>{ street } </p>
          <p>{ city }</p>
          <p><small>{phone && web ? phone + "  -  "  + web : phone ? phone : web ? web : ""}</small></p>
          <p>{ desc }</p>
        </Card>
        */ }
        Search page
        { this.props.shops ? 'Loaded' : 'Not loaded' }
      </div>
		)
	}
}

export default SearchPage;
