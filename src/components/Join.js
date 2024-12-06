import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';
import RecruitmentGraphic from '../img/RecruitmentTimeline.png';
import RecruitmentGraphicFa24 from '../img/RecruitmentTimelineFall24WithDates.jpg';

import '../css/Join.css';
import Button from 'react-bootstrap/Button';

const Join = () => {
	$(document).ready(async function () {
		/* Check the location of each desired element */
		$('.fade-in').each(async function (i) {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({ opacity: '1' }, 550);
			}
		});
		/* Every time the window is scrolled */
		$(window).scroll(async function () {
			/* Check the location of each desired element */
			$('.fade-in').each(function (i) {
				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				if (bottom_of_window > bottom_of_object) {
					$(this).animate({ opacity: '1' }, 350);
				}
			});
		});
	});
	
	return (
		<div className="join">
			<SiteNavbar bg="#000000" />
			<br />
			<br />
	
			<div className="team-photo">
			{/*<h3>
					FALL 24 RECRUITING!!!
			</h3>
				<div className="midsection">
					{<img
						src={RecruitmentGraphicFa24}
						alt="meta"
						className="selectDisable recruitImage"
	/>}
				</div>
				<br />
				<br />
					*/}
				<h3 style={{textAlign:"center"}}>
					We are currently not recruiting. Please check back Spring 2025!
					</h3>
				
				<h5>
				Follow our instagram @/formulaelectricberkeley for more updates!
				</h5>
				
				<div className="social-div">
					<a
						href="https://www.linkedin.com/company/formulaelectricberkeley/"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						<i className="fa fa-linkedin"></i>
					</a>
					<a
						href="https://www.instagram.com/formulaelectricberkeley/"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						<i className="fa fa-instagram"></i>
					</a>
					<a
						href="https://www.facebook.com/formulaelectricberkeley/"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						<i className="fa fa-facebook"></i>
					</a>
				</div>
				<br/>
				<a href="https://linktr.ee/feberkeley">
					<Button className="button join-button fade-in">
						<p className="button-text">Linktree</p>
					</Button>
				</a>
				<br />
				<br />
				{/*<a href="https://forms.gle/W6P6dyh1r1fKUf3R8">
					<Button className="button join-button fade-in">
						<p className="button-text">Interest Form</p>
					</Button>
				</a>*/}

				{/*<h3>
					WE ARE CURRENTLY NOT RECRUITING
				</h3>
				<h5>
					Check out our socials!
				</h5>
				<br/>
				<br/>
				<br/>
				<a href="https://linktr.ee/feberkeley">
					<Button className="button join-button fade-in">
						<p className="button-text">Linktree</p>
					</Button>
				</a>*/}
				{/*<h4>Recruitment Timeline </h4>
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
