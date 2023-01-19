import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderAboutUs from '../img/header-about.png';
import HeaderAboutUsMobile from '../img/mobile/header-about-mobile.png';

import '../css/About.css';

const About = () => {
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
		<div className="about">
			<SiteNavbar bg="#000000" />
			<img
				src={HeaderAboutUs}
				alt="header about us"
				className="header selectDisable large-screen"
				id="header"
			/>
			<img
				src={HeaderAboutUsMobile}
				alt="header about us"
				className="header selectDisable small-screen"
				id="header"
			/>
			<Container fluid className="body">
				<Row className="justify-content-center fade-in">
					<Col xs={12} className="text-center">
						<h3>Founded in january 2020</h3>
						<hr />
					</Col>
				</Row>
				<Row className="justify-content-center fade-in">
					<Col xs={12} sm={11} md={10} className="text-center">

						<p>
							We are a tight-knit group of students who participate in the yearly {' '}
							<b><a href="https://www.sae.org/attend/student-events/formula-sae-california/about" >FSAE EV Competition</a></b> 
							{' '}which takes place in Michigan. 
							The competition involves building, testing, and racing a formula-style 
							electric vehicle as well as completing a consulting-style analysis 
							on the costs associated with producing the vehicle.
						</p>
						<br/>
						<p>
							Members of our team specialize in engineering, business, marketing, 
							and more! Our focus is on providing an opportunity for students to 
							apply their knowledge in a <b>hands-on collaborative environment</b>, providing 
							them valuable career skills.
						</p>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={4} md={3} className="text-center">
						<div className="credential-container" style={{ textAlign: 'left' }}>
							<h4 className="fade-in">40 students</h4>
							<p className="fade-in">Berkeley Haas</p>
							<p className="fade-in">Berkeley EECS</p>
							<p className="fade-in">Berkeley Mechanical Engineering</p>
							<p className="fade-in">Jacobs Inst. for Design Innovation</p>
						</div>
					</Col>
					<Col xs={4} md={3} className="text-center">
						<div className="credential-container">
							<h4 className="fade-in">100+ Alumni</h4>
							<p className="fade-in">Tesla</p>
							<p className="fade-in">Apple</p>
							<p className="fade-in">SpaceX</p>
							<p className="fade-in">Blue Origin</p>
							<p className="fade-in">Schlumburger</p>
							<p className="fade-in">Northrop Grumman</p>
						</div>
					</Col>
					<Col xs={4} md={3} className="text-center">
						<div
							className="credential-container"
							style={{ textAlign: 'right' }}
						>
							<h4 className="fade-in">10+ Partners</h4>
							<p className="fade-in">Ford</p>
							<p className="fade-in">Modus</p>
							<p className="fade-in">Boeing</p>
							<p className="fade-in">Autodesk</p>
							<p className="fade-in">General Motors</p>
							<p className="fade-in">National Instruments</p>
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center fade-in">
					<Col xs={12} className="text-center">
						<h3>Our vehicle</h3>
						<hr />
					</Col>
				</Row>
				<Row className="justify-content-center fade-in mb-5">
					<Col xs={12} sm={10} md={7} className="text-center">
						<p>
							Our team of engineers designs and builds a space-frame steel
							chassis to contain lithium-ion batteries, AC motors, and
							high-performance suspension systems.
						</p>
					</Col>
				</Row>

				{/* <Row className="justify-content-center fade-in">
					<Col xs={12} className="text-center">
						<h3>The budget</h3>
						<hr />
					</Col>
				</Row>
				<Row className="justify-content-center mb-5">
					<Col xs={12} sm={4} md={2} className="text-center">
						<h5 className="fade-in" style={{ marginTop: '0.4rem' }}>
							Logistics
						</h5>
						<div className="team-text">
							<p className="fade-in">Competition Registration</p>
							<p className="fade-in">Transporting Racecar</p>
						</div>
					</Col>
					<Col xs={12} sm={4} md={2} className="text-center">
						<h5 className="fade-in">Powertrain</h5>
						<div className="team-text">
							<p className="fade-in">Motor</p>
							<p className="fade-in">Drive Train</p>
							<p className="fade-in">Wheels</p>
							<p className="fade-in">Hub</p>
							<p className="fade-in">Cooling System</p>
						</div>
					</Col>
					<Col xs={12} sm={4} md={2} className="text-center">
						<h5 className="fade-in">Dynamics</h5>
						<div className="team-text">
							<p className="fade-in">Steering</p>
							<p className="fade-in">Springs</p>
							<p className="fade-in">Dampers</p>
							<p className="fade-in">Other Suspension Hardware</p>
						</div>
					</Col>
					<Col xs={12} sm={6} md={2} className="text-center">
						<h5 className="fade-in">Chassis</h5>
						<div className="team-text">
							<p className="fade-in">Frame & Body Ergonomics</p>
							<p className="fade-in">Manufacturing</p>
							<p className="fade-in">Accumulator</p>
							<p className="fade-in">Attenuator</p>
							<p className="fade-in">Breaking Systems</p>
						</div>
					</Col>
					<Col xs={12} sm={6} md={2} className="text-center">
						<h5 className="fade-in">EE & CS</h5>
						<div className="team-text">
							<p className="fade-in">Battery</p>
							<p className="fade-in">PCBs</p>
							<p className="fade-in">Wiring</p>
							<p className="fade-in">Motor Controller</p>
						</div>
					</Col>
				</Row> */}
			</Container>
		</div>
	);
};

export default About;
