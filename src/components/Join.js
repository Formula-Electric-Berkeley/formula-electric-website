import React from 'react';

import SiteNavbar from './SiteNavbar';

import '../css/Join.css';

const Join = () => {
	return (
		<div className="join">
			<SiteNavbar sticky="false" bg="#1c1c1c" />
			<div className="team-photo">
				<h3>
				<br/>
					FEB Fall 2020 recruitment is starting!<br/>
				</h3>
				<h4>
				<br/>
				We are looking for mechanical, electrical, and business teammates.<br/><br/>
				Join our infosession to learn about FEB and the recruitment process and chat with our team.<br/><br/>
				Two sessions:<br/>
				1. Mon 8/31 8PM-9PM<br/>
				2. Thu 9/3 8PM-9PM<br/><br/>
				Zoom link: https://berkeley.zoom.us/j/93585932979<br/>
				"Note: you must be logged in with your UC Berkeley Zoom account to enter this meeting."
				</h4>
			</div>
		</div>
	);
};

export default Join;
