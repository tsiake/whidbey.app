import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Patch extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
            <div>
                <div className="condense">
                    <h1> Patch Notes</h1>
                </div>
                <div className="condense-line">
                    <hr className="mainpageline" />
                </div>
                <div className="condense">
                <h2> 7/13/2020 </h2>
                <p>Repair chances on items have been significantly decreased. </p>
                <p>BH mission rewards reduced.</p>
                <p>Junk values for looted items have been modified.</p>
                <p>Looted armor resists have been modified</p>
                <p></p>
                </div>
                <div className="condense-line">
                    <hr className="mainpageline" />
                </div>
                <div className="condense">
                <h2> 7/10/2020 </h2>
                <p>Skill trees require slightly more points, some skill trees have been tweaked. Ongoing process.</p>
                <p>Removed Bounty Hunter's Master Marksman requirement</p>
                <p>Removed Smuggler skill requirements</p>
                <p><strike>Smuggler xp requirements have been changed to general combat experience</strike> Temporarily reverted - will be re-implemented in upcoming patch.</p>
                <p>Added ranged and melee damage mitigation 1 to master for opposing professions. E.G., a master pikeman will have ranged mitigation 1; a master pistoleer will have melee mitigation 1 </p>
                <p>Maximum tax levels have been hiked for cities (income, property, sales, travel, garage). </p>
                <p>Shuttles now dock significantly longer. </p>
                <p>Increased group xp further. </p>
                <p>4 player consecutive online per account. </p>
                <p>Highly increased housing item limit. </p>
                <p>Pet mounts now call in 2 seconds (vehicles are 15) - this is to encourage pet mount usage for shorter distances. </p>
                <p>House maintenance inside of cities are 20% of normal maintenance cost. </p>
                <p>Mission rewards have been drastically decreased to reflect server price norms. You will be getting far fewer credits on this server, but everyone else will as well, which will help reduce credit inflation.</p>
                <p>Activated minisuits</p>
                <p>GCW has been enabled </p>
                </div>
                <div className="condense-line">
                    <hr className="mainpageline" />
                </div>
                <div className="condense">
                <h2> 7/3/2020 </h2>
                <p> Increased weapon dot chances on looted weapons.</p>
                <p> Increased legendary / exceptional loot drop chances and modifiers. </p>
                <p> Increased weapon drop chance and junk value. </p>
                <p> Increased looted armor base stats, drop chance, and junk value.</p>
                <p> Increased crafted armor base resists, slicing improvements.</p>
                <p> Decreased crafted armor special resists. </p>
                <p> Added non-jedi bounties (notoriety system) </p>
                <p> Enabled 3 characters per account simultaneous logins. </p>
                <p> Lok now has dangerous sandstorms. Weather is worse on select dangerous planets.</p>
                <p> May now build houses / structures on Dathomir, Endor, and Yavin-4.</p>
                </div>
            </div>
		)
	}
}

export default Patch;
