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
                <Heading size={500}>whidbey.io</Heading>
                <div>
                <WhidbeyTextInputContainer />
                </div>
                <div>
                <WhidbeyButtonContainer />
                </div>

            </div>
		)
	}
}

export default LandingPage;
