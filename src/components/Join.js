import React from 'react';


import SiteNavbar from './SiteNavbar';
import RecruitmentGraphic from '../img/RecruitmentTimelineSpring2022.png';

import '../css/Join.css';
import Button from 'react-bootstrap/Button';

const Join = () => {
	return (
		<div className="join">
			<SiteNavbar sticky="false" bg="#1c1c1c" />
			<div className="team-photo">
				<h3>
					WE ARE CURRENTLY NOT RECURITING FOR FALL 2022 ! 
				</h3>
				<h4>
					CHECK OUR SOCIALS FOR FUTURE UPDATES !
				</h4>
				<br/>
				<br/>
				<br/>
				{/*<a href="https://forms.gle/pbLrk9F9REE9GKGH6">
					<Button className="button join-button fade-in">
								<p className="button-text">Click Here</p>
							</Button>
					</a>
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

					<a href="https://forms.gle/7tX7KAipHSqSLrye9">
							<Button className="button join-button fade-in">
								<p className="button-text">Interest Form</p>
							</Button>
						</a>
				<h5>
				Come join us on our journey to design and build awesome electric, autonomous racecars! 
				</h5>
				<h5>All majors and backgrounds are welcome.</h5>									
				<br/>
				
				<br/>*/}

			</div>
		</div>
	);
};

export default Join;
