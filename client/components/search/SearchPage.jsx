import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { Button, Row, Col, Form, Card, FormGroup, FormControl, Checkbox, Radio } from 'react-bootstrap';
import { getMyShops } from '../.././redux/actions/actions';
import PaginationBar from '.././pagination/PaginationContainer.jsx';

class SearchPage extends React.Component {
  
  constructor() {
    super();
    this.state = { render: false }
    this.renderHandler = this.renderHandler.bind(this);
  }

	componentDidMount() {
    if(this.props.match.params.search_type == "shops") {
      if(this.props.match.params.search_category == "All Shops") {
        this.props.dispatch(getMyShops({}));
      } else {
        this.props.dispatch(getMyShops({type: this.props.match.params.search_category}));
      }
    } else if(this.props.match.params.search_type == "items") {
      console.log("add item search");
    } else {
      this.props.history.push('/');
    }
    this.setState({page: parseInt(this.props.match.params.search_page)});
  }

  renderHandler(pgNum) {
    this.setState({page: pgNum});
  }

	render() {
		return (
      <div>
        { 
        this.props.shops && this.state.page ? this.props.shops.slice((this.state.page-1)*5, this.state.page*5).map((x, i) => 
            <Card body>
              <h2>{ x.name }</h2>
              <p>{ x.street } </p>
              <p>{ x.city }</p>
              <p><small>{x.phone && x.web ? x.phone + "  -  "  + x.web : x.phone ? x.phone : x.web ? x.web : ""}</small></p>
              <p>{ x.desc }</p>
            </Card>
          ) : ''
        }
        { this.props.shops ? 
        <PaginationBar pageNumber={this.props.match.params.search_page} lastPage={Math.ceil(this.props.shops.length / 5)} searchType={this.props.match.params.search_type} searchCategory={this.props.match.params.search_category} nextPage={this.state.page + 1} prevPage={this.state.page - 1} history={this.props.history} renderHandler={this.renderHandler}/>
        : '' }
      </div>
		)
	}
}

export default SearchPage;
