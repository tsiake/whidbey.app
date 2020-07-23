import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tab, Tabs, Col, Row } from 'react-bootstrap';
import { Nav} from 'react-bootstrap';

class About extends React.Component {

	componentDidMount() {
	}

	render() {
        let i1 = "Intrepid's Github Repo";
        let i2 = "dpwhittaker's RoC Launcher";
        let i3 = "dpwhittaker's SWG Discord Bot";
        let i4 = "Mod the Galaxy";
        let i5 = "thank you to the SWGEmu team";
		return (
            <div className="about">
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item> <Nav.Link eventKey="first" className="tabIntrepid">Inspiration | Goals</Nav.Link> </Nav.Item>
                                <Nav.Item> <Nav.Link eventKey="second" className="tabIntrepid">Intrepid History</Nav.Link> </Nav.Item>
                                <Nav.Item> <Nav.Link eventKey="third" className="tabIntrepid">Resources | Thanks</Nav.Link> </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                <h2> Inspiration | Goals </h2>
                <h4> Releasing July 15th, 2020 </h4>
                <div className="borderedrow"> 
Hi all, I'm a big SWG fan, I've been playing for a number of years, and have played on many of the servers listed on the sidebar - they all have unique additions that have contributed to the SWG universe. However, over time, I started wanting something more tailored to my "ideal" of what SWG, and an overall MMO, should be. 
                </div>
                <div className="borderedrow"> 
                On the original SWG, I was on the Intrepid server. We were a small, but tight-knit server, that eventually was splintered by the server merge in 2009. If you recognize any names (Deake, Seeke, Kiki) you should hit me up! Regardless of whether or not you originally played on Intrepid, you are more than welcome to join this server.
                </div>
                <div className="borderedrow"> 
            One major thing that bugged me in SWG (I know this seems kind of small, but things like this irritate me) was how in the movies like 'The Mandalorian' or the old Star Wars movies was that, a Bounty Hunter or the like may get 500 credits for a very hard mission, or ships/vehicles being sold for a few thousand credits. This server intends to be more "RP-ish" in that aspect, credit volumes have been reduced in all aspects of the game, be it missions or junk dealers. Because of this credit crunch, things like maintaining your residence will be more noticable. You can't just let 3 buildings sit out in the middle of nowhere on your alt character without ever worrying. Prices and the economy should reflect that, being sold at lower prices.
                </div>
                <div className="borderedrow"> 
            Random mobs will have more chances of dropping armor / weapons worth keeping. I have significantly upped the legendary/exceptional drops, along with the range of armor base stats that can be looted. So, it is possible to get a really good weapon and set of armor just from grinding some mobs. However, ultimately, crafted weapons and armor with sockets will be more reliable, since a legendary you want isn't likely to drop often. Repair success rates have been dramatically reduced, so items are much more likely to fail at repairs. This should keep demand for new items up.
                </div>
                <div className="borderedrow"> 
            Combat professions have been slightly buffed and nerfed, depending on profession. I've always felt that TKA is OP compared to others, so I've debuffed it slightly compared to others. Pistoleer is slightly debuffed as well, with Carbineer and Pikeman being slightly buffed. I believe these changes should help, and I will definitely be altering them as time progresses and player balancing changes become more obvious. 
                </div>
                <div className="borderedrow"> 
            Skill points requirements have been slightly increased for all professions. I changed this mostly because I felt the base skill system allows you to get too powerful as a character once fully maxed.
                </div>
                <div className="borderedrow"> 
                More notes will be added later, but this should give you a general feel for where the server will be headed going forward.
                </div>
                <div className="borderedrow"> 
                    PS: We are currently seeking Community managers and moderators. If you would like to apply, please visit our discord and leave a note in the #apply channel.
                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                <div className="borderedrow">
                        <h2>Intrepid, Reborn</h2>
                        <h4>After more than a decade, Intrepid is back... and better than before</h4>
                    <p>Intrepid is the reincarnation of a Star Wars Galaxies server which was shut down in late 2009.</p> <p> Prior to that, it was the home to many of us in the Star Wars universe. </p>
                    <p>Of note, the first Jedi initiate in Pre-CU Star Wars Galaxies was on Intrepid - Monika T'Sarn </p>
                    <p>We are collecting stories from Intrepid players! Feel free to send some of your favorite stories to the #stories channel to be featured here in the future!</p>

                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                <div className="borderedrow"> 
                    <a href="https://github.com/vluurgra/intrepid-swgemu">{i1}</a>
                </div>

                <div className="borderedrow"> 
                    <h4><a href="https://github.com/dpwhittaker/RoC-Launcher">{i2}</a></h4>
                    <p>is a very good resource for an SWG Launcher - thank you!</p>
                </div>

                <div className="borderedrow"> 
                    <h4><a href="https://github.com/dpwhittaker/swg-discord-bot">{i3}</a></h4>
                    <p>is a great tool for community usage, thank you!</p>
                </div>

                <div className="borderedrow"> 
                <h4><a href="https://modthegalaxy.com/">{i4}</a></h4> <p> has great discussions and resources, thank you!</p>
                </div>

                <div className="borderedrow"> 
                    <h4>And of course ... <a href="https://github.com/TheAnswer/Core3">{i5}</a></h4>
                </div>

                
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
		)
	}
}

export default About;
