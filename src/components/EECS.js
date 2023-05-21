import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSubteam from '../img/subteam-headers/header-eecs.png';
import HeaderSubteamMobile from '../img/mobile/header-about-mobile.png';
import GalleryRectangle from '../img/gallary-rectangles.png';
import SubteamGroup from '../img/subteam-photos/eecs_crop_052123.png';
import EecsParts from '../img/subteam-photos/eecs_parts_052123.png';

import '../css/Team.css';
import '../css/Subteam.css';

import TeamMember from './TeamMember';
import Member1 from '../img/team-members/1.jpg';
import Member2 from '../img/team-members/2.jpg';

const EECS = () => {
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
		<div className="about">
			<SiteNavbar bg="#000000" />
			<img
				src={HeaderSubteam}
				alt="header subteam"
				className="header selectDisable large-screen"
				id="header"
			/>
			<img
				src={HeaderSubteamMobile}
				alt="header subteam"
				className="header selectDisable small-screen"
				id="header"
			/>
			<Container fluid className="body">
				<Row className="justify-content-center fade-in">
					<Col xs={12} className="text-center">
						<h3>EECS Subteam Info</h3>
						<hr />
					</Col>
				</Row>
				<br />
				<br />
				<br />
				<Row className="justify-content-center fade-in">
					<div  style={{width: "80%"}}>
						<img
							src={SubteamGroup}
							alt="subteam photo"
							className="header selectDisable large-screen"
							id="subteam"
						/>
					</div>	
				</Row>
				<Row className="justify-content-center text-center">
					<Col xs={12} sm={6} className="text-center">
						<div style={{width: "75%", marginLeft: "120px", position: "relative", top: "-20px"}}>
							<img
								src={EecsParts}
								alt="subteam photo"
								className="header selectDisable large-screen"
								id="subteam"
							/>
						</div>
					</Col>
					<Col xs={12} sm={5} className="text-center blue">
						<br />
						<br />
						<br />
						<br />
						<br />

						<p style={{textTransform: "uppercase", marginLeft: "-10px", fontSize: "15px", width: "90%"}}>
							The EECS Subteam is responsible for designing High-voltage and
							Low-voltage electrical systems. The HV system consists of battery
							pack electrical systems and battery management systems. The LV
							system consists of CAN bus communication, sensor data acquisition,
							LV power distribution, driver interface, firmware, software, and
							much more. We aim to build a HV system with maximum efficiency and
							reliability, a LV electrical system embedded with microcontrollers
							and sensors that will help us control and monitor the car more
							effectively in a data-driven approach.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default EECS;
