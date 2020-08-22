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
				Join our infosession to learn about FEB and the recruitment process and chat with our team.<br/>
				</h4>
			</div>
		</div>
	);
};

export default Join;
