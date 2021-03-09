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
					OUR NEXT RECRUITMENT CYCLE WILL BE IN FALL 2021.<br/>
					STAY TUNED!
				</h3>
			</div>
		</div>
	);
};

export default Join;
