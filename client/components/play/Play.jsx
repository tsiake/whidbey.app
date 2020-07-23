import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Play extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
            <div>
                <div className="condense">
                    <h2> Getting Started</h2>
                    <h5> 1) To get started, <a className="page_link" href= "https://www.swgemu.com/forums/content.php?r=179-Install-SWGEmu">please follow the official SWGEmu installation instructions </a> </h5> <p> You may need to register an SWGEmu account to view their forum instructions </p>
                    <h5> 2) <a className="page_link" href="/register">Register your SWG Intrepid account by completing the signup here.</a></h5> <p> You will need to register an account in order to play on this server </p>
                    <h5> 3) <a className="page_link" href="/downloads/launcher">Download the Intrepid launcher here (Windows client only)</a> </h5> <p> You will need the launcher client to play on Intrepid </p>
                    <h5> 4) Right click the file, unzip the launcher to a location you would like </h5>
                    <p> Open the folder, and right click 'intrepid-launcher' and then select 'Run as Administrator' </p>
                    <p> You must select 'Run as Administrator' or your game will not run </p>
                    <p> After running, pin the application to your taskbar.</p>
                    <h3>Remember, even after pinning, you must right click the Intrepid launcher icon, then right click the 'intrepid-launcher' option, and click "Run as Administrator", or your game will not launch. </h3>
                    <h5> 5) Select 'Settings' and browse to your installed Star Wars Galaxies folder. Then click play! </h5>


                </div>
                <div className="condense-line">
                    <hr className="mainpageline" />
                </div>

                <div className="condense">
                    <h2> Troubleshooting </h2>
                    <p> If you are clicking the Play button and nothing happens, your Launcher may not have been launched in 'Run as Administrator' mode. </p>
                    <p> If you are clicking the Play button and nothing happens, you might not have selected your game directory. Click Settings and then click Browse - make sure your Star Wars Galaxies game folder (containing the game files you installed - NOT the Intrepid Launcher files) is selected.</p>
                    <p>If you are having additional issues, please join our <a href="/discord">Discord</a> and let us know your issue in the #support channel</p>
                </div>
            </div>
		)
	}
}

export default Play;
