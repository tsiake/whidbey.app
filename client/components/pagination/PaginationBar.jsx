import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { Button, Row, Col, Form, Card, FormGroup, FormControl, Checkbox, Radio, Pagination, PaginationItem, PaginationFirst, PaginationPrev, PaginationNext, PaginationLast } from 'react-bootstrap';
import { getMyShops } from '../.././redux/actions/actions';

class PaginationBar extends React.Component {
  
  constructor() {
    super();
    this.state = { }
    this.handleFirst = this.handleFirst.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleLast = this.handleLast.bind(this);
  }

  componentDidMount() {
    this.setState({page: parseInt(this.props.pageNumber)});
  }

  handleFirst() {
    this.setState({page: 1});
    this.props.renderHandler(1);
    this.props.history.push("/search/" + this.props.searchType + "/" + this.props.searchCategory + "/1");
  }
    
  handlePrev() {
    this.setState({page: this.state.page-1});
    this.props.renderHandler(this.props.prevPage);
    this.props.history.push("/search/" + this.props.searchType + "/" + this.props.searchCategory + "/" + this.props.prevPage);
  }

  handleNext() {
    this.setState({page: this.state.page+1});
    this.props.renderHandler(this.props.nextPage);
    this.props.history.push("/search/" + this.props.searchType + "/" + this.props.searchCategory + "/" + this.props.nextPage);
  }

  handleLast() {
    this.setState({page: this.props.lastPage});
    this.props.renderHandler(this.props.lastPage);
    this.props.history.push("/search/" + this.props.searchType + "/" + this.props.searchCategory + "/" + this.props.lastPage);
  }

	render() {

    let nextNumber;
    let prevNumber;
    let nextPaginationElement;
    let prevPaginationElement;

    if(this.props.nextPage > this.state.page && this.props.nextPage <= this.props.lastPage) {
      nextPaginationElement = <Pagination.Next onClick={this.handleNext} />
      nextNumber = <Pagination.Item onClick={this.handleNext}> {this.props.nextPage} </Pagination.Item>
    }

    if(this.props.prevPage > 0 && this.state.page != 1) {
      prevPaginationElement = <Pagination.Prev onClick={this.handlePrev} />
      prevNumber = <Pagination.Item onClick={this.handlePrev}> {this.props.prevPage} </Pagination.Item>
    }    

		return (
      <div>
        <Pagination> 
        <Pagination.First onClick={this.handleFirst} />
        { prevPaginationElement }
        { prevNumber }
        <Pagination.Item className="active-page"> { this.state.page } </Pagination.Item>
        { nextNumber }
        { nextPaginationElement }
        <Pagination.Last onClick={this.handleLast} /> 
        </Pagination>
      </div>
		)
	}
}

export default PaginationBar;
