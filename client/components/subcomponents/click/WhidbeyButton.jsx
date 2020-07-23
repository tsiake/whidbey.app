import React, { PropTypes } from 'react';
import { Button } from 'evergreen-ui';

class WhidbeyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        console.log("Button clicked");
    }

    render() {
        return (
            <Button marginRight={16} appearance="minimal" intent="success" onChange={this.handleSubmit}>Submit</Button>
        );
    }
}

export default WhidbeyButton;
