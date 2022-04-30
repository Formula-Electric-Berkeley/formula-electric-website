import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSubteam from '../img/subteam-headers/header-chassis.png';
import HeaderSubteamMobile from '../img/mobile/header-about-mobile.png';
import GalleryRectangle from '../img/gallary-rectangles.png';
import SubteamGroup from '../img/subteam-group.png';

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
			<SiteNavbar bg="#1c1c1c" />
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
				<Row className="justify-content-center text-center">
					<Col xs={12} sm={6} className="text-center">
					<img
						src={SubteamGroup}
						alt="subteam photo"
						className="header selectDisable large-screen"
						id="subteam"
					/>
					</Col>
					<Col xs={12} sm={5} className="text-center blue">
						
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						
						
						<p>
						The Chassis Team works on a wide variety of components on the car, ranging from the design and 
						development of our spaceframe to our braking system and bodywork. We are also responsible for battery 
						packaging to ensure that our accumulator is safely secured in the event of a collision. Lastly, we work 
						on optimizing cockpit ergonomics so our driver is as safe and comfortable as possible. 
						We are also building towards deploying an aero package on our car for the 2023-24 competition season. 
						</p>
							
						
					</Col>
				</Row>
				<Row className="justify-content-center">
					
				</Row>
				<Row className="justify-content-center fade-in">
					<Col xs={12} className="text-center">
						<h3>More Photos</h3>
						<hr />
					</Col>
				</Row>
				<Row className="justify-content-center fade-in mb-5">
					<Col xs={12} sm={10} md={7} className="text-center">
					<img
						src={GalleryRectangle}
						alt="gallery"
						className="header selectDisable large-screen"
						id="gallery"
					/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Chassis;