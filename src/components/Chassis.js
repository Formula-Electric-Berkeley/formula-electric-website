import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSubteam from '../img/subteam-headers/header-chassis.png';
import HeaderSubteamMobile from '../img/mobile/header-about-mobile.png';
import GalleryRectangle from '../img/gallary-rectangles.png';
import SubteamGroup from '../img/subteam-photos/chassis_crop_051923.png';
import ChassisParts from '../img/subteam-photos/chassis_parts_052123.png';

import '../css/Subteam.css';

const Chassis = () => {
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
						<h3>Chassis Subteam Info</h3>
						<hr />
					</Col>
				</Row>
				<br />
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
						<br />
						<br />
						<div  style={{width: "80%", marginLeft: "50px"}} >
							<img
								src={ChassisParts}
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
						<p style={{textTransform: "uppercase", marginRight: "60px", fontSize: "15px"}}>
							The Chassis Team works on a wide variety of components on the car,
							ranging from the design and development of our spaceframe to our
							braking system and bodywork. We are also responsible for battery
							packaging to ensure that our accumulator is safely secured in the
							event of a collision. Lastly, we work on optimizing cockpit
							ergonomics so our driver is as safe and comfortable as possible.
							We are also building towards deploying an aero package on our car
							for the 2023-24 competition season.
						</p>
					</Col>
				</Row>
				<Row className="justify-content-center"></Row>
				<br />
				<br />
				<br />
				<br />
				<br />
			</Container>
		</div>
	);
};

export default Chassis;
