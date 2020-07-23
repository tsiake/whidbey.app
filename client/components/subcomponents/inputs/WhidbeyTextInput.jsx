import React, { PropTypes } from 'react';
import { TextInput } from 'evergreen-ui';

class WhidbeyTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({value: evt.target.value});
    }

    render() {
        return (
            <TextInput
                onChange={this.handleChange}
                value={this.state.value}
            />
        );
    }
}

export default WhidbeyTextInput;
