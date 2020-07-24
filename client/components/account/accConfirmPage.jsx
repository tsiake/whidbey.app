import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { confirmMyAccount } from '../.././redux/actions/actions';

class accConfirmPage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Confirming acccount now... Please wait.',
    }
  }

  componentDidMount() {
    this.props.dispatch(confirmMyAccount({confUrl: this.props.match.params.user_id}));
  }

  render() {
    return (
      <div className="accConfirmationPage">
        { this.props.message ? this.props.message : "" }
      </div>
    );
  }
}

export default accConfirmPage;
