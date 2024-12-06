import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSubteam from '../img/subteam-headers/header-dynamics.png';
import HeaderSubteamMobile from '../img/mobile/header-about-mobile.png';
import GalleryRectangle from '../img/gallary-rectangles.png';
import SubteamGroup from '../img/subteam-photos/dynamics_crop_052123.png';
import DynamicsParts from '../img/subteam-photos/dynamics_parts_052123.png';

import '../css/Subteam.css';

const Dynamics = () => {
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
						<h3>Dynamics Subteam Info</h3>
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
						<div style={{width: "50%", marginLeft: "140px", position: "relative", top: "-20px"}}>
							<img
								src={DynamicsParts}
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

						<p style={{textTransform: "uppercase", marginLeft: "-110px", fontSize: "15px", width: "107.5%"}}>
							The Dynamics Subteam is responsible for designing, manufacturing,
							and implementing data acquisition of the suspension and steering
							systems of FEB’s electric formula race car. We are also aiming to
							develop an in-house rigid body vehicle dynamics simulation model
							to better inform our design decisions and optimize member geometry
							through calculated member forces. This model should also be able
							to be used by the Autonomous and Chassis teams.
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

export default Dynamics;
