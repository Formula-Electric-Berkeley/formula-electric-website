import React from 'react';

import SiteNavbar from './SiteNavbar';

import '../css/Join.css';

const Join = () => {
	return (
		<div className="join">
			<SiteNavbar sticky="false" bg="#1c1c1c" />
			<div className="team-photo">
				<h3>
					We are not currently accepting applications. Check back in Fall 2020!
				</h3>
			</div>
		</div>
	);
};

export default Join;
