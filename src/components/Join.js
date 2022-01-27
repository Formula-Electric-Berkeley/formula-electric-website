import React from 'react';


import SiteNavbar from './SiteNavbar';
import RecruitmentGraphic from '../img/RecruitmentTimeline.png';

import '../css/Join.css';

const Join = () => {
	return (
		<div className="join">
			<SiteNavbar sticky="false" bg="#1c1c1c" />
			<div className="team-photo">
				<h3>
					WE ARE CURRENTLY RECRUITING!
				</h3>
				<h4>Recruitment Timeline </h4>
				
				<div className="midsection">
					<img
						src={RecruitmentGraphic}
						alt="meta"
						className="selectDisable"
						style={{ height: 500 }}
					/>
				</div>
				
				//<br/>
				<h5>
				Come join us on our journey to design and build awesome electric, autonomous racecars! 
				</h5>
				<h5>All majors and backgrounds are welcome.</h5>									
				<br/>
				<a href="http://linktr.ee/feberkeley">
				
					</a>
				<br/>

			</div>
		</div>
	);
};

export default Join;
