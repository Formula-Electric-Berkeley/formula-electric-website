import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LandingDescriptionPhoto from '../img/landing-description-photo.png';
import MetaImage from '../img/meta-image.png';
import RecruitmentGraphic from '../img/RecruitmentTimeline.png';

import '../css/Landing.css';

const Landing = () => {
	$(document).ready(function () {
		/* Check the location of each desired element */
		$('.fade-in').each(async function (i) {
			var top_of_object = $(this).offset().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > top_of_object) {
				$(this).animate({ opacity: '1' }, 550);
			}
		});
		/* Every time the window is scrolled */
		$(window).scroll(async function () {
			/* Check the location of each desired element */
			$('.fade-in').each(function (i) {
				var top_of_object = $(this).offset().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				if (bottom_of_window > top_of_object) {
					$(this).animate({ opacity: '1' }, 350);
				}
			});
		});
	});
	return (
		<div className="landing">
			<SiteNavbar sticky="false" bg="transparent" />
			{/* Keep This image here for site preview */}
			<img
				src={MetaImage}
				alt="meta"
				className="selectDisable"
				style={{ display: 'none' }}
			/>
			<div className="header">
				{/*<img
					src={LandingLogo}
					alt="landing logo"
					className="landing-logo selectDisable"
				/>*/}
				<h2>UC Berkeley's Formula SAE Electric Vehicle Team</h2>
				<a href="/about">
					<Button className="button landing-button">
						<p className="button-text">Learn More</p>
					</Button>
				</a>
			</div>
			<Container fluid className="body">
				<Row noGutters="true">
					<Col xs={12} sm={6} className="text-col">
						<h3>Our Mission</h3>
						<hr />
						<div className="text-container">
							<p className="text fade-in">
								Create a{' '}
								<b className="bold">community of diverse individuals</b> that
								focuses on learning and skill development.
							</p>
							<p className="text fade-in">
								Research, design, manufacture, and test{' '}
								<b className="bold">
									efficient, sustainable transportation technology
								</b>{' '}
								at UC Berkeley.
							</p>
							<p className="text fade-in">
								Compete in the annual{' '}
								<b className="bold">Formula SAE Electric Competition</b> to
								demonstrate our technology at a global scale.
							</p>
						</div>
						<a href="https://give.berkeley.edu/giftdetails?fund1=FU1349000">
							<Button className="button join-button fade-in">
								<p className="button-text">Support Us</p>
							</Button>
						</a>
					</Col>
					<Col xs={12} sm={6} className="text-center">
						<img
							src={LandingDescriptionPhoto}
							alt="landing description"
							className="text-image selectDisable"
						/>
					</Col>
				</Row>
			</Container>
				<div className="landingmiddle">
					{/*<h4>Recruitment</h4>
					<hr2 />
					<Row noGutters="true">
						<div className="midsection">
							<img
								src={RecruitmentGraphic}
								alt="meta"
								className="selectDisable recruitImage"
							/>
						</div>
						<div className= "video">
			<iframe
				title="sponsorship"
				class="responsive-iframe"
				height="380"
				width="660"
				src="https://www.youtube.com/embed/TouP6oxgqZQ"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media;
				gyroscope; picture-in-picture" allowfullscreen>
			</iframe>
			</div>
					</Row>
					<div>
						<br />
						<br />
						<a href="/join">
							<Button className="button join-button fade-in">
								<p className="button-text">Join the Team</p>
							</Button>
						</a>
					</div>*/}
				</div>
		</div>
	);
};

export default Landing;
