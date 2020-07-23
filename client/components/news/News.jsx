import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class News extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
            <div>
                <div className="condense">
                <h2> Intrepid News</h2>
                <h4> Intrepid Server is officially launching July 15th!</h4>
                <p> SWG Intrepid is launching July 15th, 2020! We have some exciting features planned for the game, along with continuous balance changes and "hard mode" features that will increase the health of the economy and longevity of the server. Stay tuned, and <a href="/discord">make sure to join our Discord!</a></p>
                </div>
                <div className="condense-line">
                    <hr className="mainpageline" />
                </div>
                <div className="condense">
                <h4>July 10th, 2020 </h4>
                <p> July 10th 2020: Patch 2 has now been shipped! <br/><a href='/patchnotes'>You can check out the changes here.</a></p>
                </div>
                <div className="condense-line">
                    <hr className="mainpageline" />
                </div>
                <div className="condense">
                <h4>July 3rd, 2020 </h4>
                <p> July 3rd 2020: Patch 1 has now been shipped! <br/><a href='/patchnotes'>You can check out the changes here.</a></p>
                <p> If you would like to join, be sure to check out the <a href='/play'> Play & Install page.</a></p>
                </div>
            </div>
		)
	}
}

export default News;
