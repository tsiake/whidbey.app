import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heading, TextInput } from 'evergreen-ui';
import WhidbeyTextInputContainer from '.././subcomponents/inputs/WhidbeyTextInputContainer.jsx';
import WhidbeyButtonContainer from '.././subcomponents/click/WhidbeyButtonContainer.jsx';

class LandingPage extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
            <div className="controlinput">
              <h1>Currently in development...</h1>
            </div>
		)
	}
}

export default LandingPage;
