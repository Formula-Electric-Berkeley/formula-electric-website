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
					WE ARE RECRUITING FOR FALL 2021!
				</h3>
				//<br/>
				<h5>
				Come join us on our journey to design and build awesome electric, autonomous racecars! 
				</h5>
				<h5>All majors and backgrounds are welcome.</h5>
				<br/>
				<h5>Join our <a href="https://www.facebook.com/groups/1475230892869726">Facebook recruiting group</a> for all our recruiting updates!</h5>
				<h5><b classname="blue"><a href="https://forms.gle/hQuP7GFPHm4vso879">General Application Link</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://docs.google.com/forms/d/e/1FAIpQLSc9ZRIBjU8hwW-z_L0Pjw3RmoBVFkoOZhqVcyIuHQQxk-LPsA/viewform?usp=sf_link"> Autonomous R&D Application Link </a></b></h5>
				
				<h5><a href="https://docs.google.com/presentation/d/1ZybA98Qrq_lR9j1rJIZlcfP0VMrsyEuReEg8qNamTxw/edit?usp=sharing">Info Session Slides</a></h5>
				<h5>*Both info sessions are the same</h5>
				<br/>
				<a href="http://linktr.ee/feberkeley">
				<img
						src={RecruitmentGraphic}
						alt="meta"
						className="selectDisable"
						style={{ height: 500 }}
					/>
					</a>
				<br/>
				{/* <h4><a href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fformulaelectricberkeley%2Fposts%2F365023968356352&show_text=true&width=500">Facebook Recruiting Group</a> </h4>
				<h4><a href="http://linktr.ee/feberkeley">Linktree</a></h4> */}
			</div>
		</div>
	);
};

export default Join;
