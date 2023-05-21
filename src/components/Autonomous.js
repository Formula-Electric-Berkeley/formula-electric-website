import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSubteam from '../img/subteam-headers/header-autonomous.png';
import HeaderSubteamMobile from '../img/mobile/header-about-mobile.png';
import GalleryRectangle from '../img/gallary-rectangles.png';
import SubteamGroup from '../img/subteam-photos/autonomous_crop_052123.png';
import AutonomousVision from '../img/subteam-photos/autonomous_vision_052123.png'

import '../css/Subteam.css';

const Autonomous = () => {
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
						<h3>Autonomous Subteam Info</h3>
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
						<div style={{width: "75%", marginLeft: "120px", position: "relative", top: "-85px"}}>
							<img
								src={AutonomousVision}
								alt="subteam photo"
								className="header selectDisable large-screen"
								id="subteam"
							/>
						</div>
					</Col>
					<Col xs={12} sm={5} className="text-center blue">
						<br />
						<br />
						<p style={{textTransform: "uppercase", marginLeft: "15px", fontSize: "15px", width: "85%"}}>
							The Autonomous Driving R&D Team at FEB aims to develop advanced
							autonomous driving solutions that can be implemented on our
							first-generation electric formula race car for formula student
							driverless competitions. We will have a high-resolution,
							low-latency LiDAR+Camera sensor setup for our perception pipeline,
							fast and efficient SLAM algorithms for real-time vehicle
							localization and mapping, an offline lap-time optimization
							trajectory planner, and an online N-MPC path follower for accurate
							vehicle planning and control. Our goal is to prepare our engineers
							for a sustainable and autonomous future of transportation via
							hands-on projects in autonomous racing.
						</p>
					</Col>
				</Row>
				<Row className="justify-content-center"></Row>
			</Container>
			<br />
            <br />
            <br />
            <br />
            <br />
			<br />
            <br />
            <br />
            <br />
            <br />
		</div>
	);
};

export default Autonomous;
