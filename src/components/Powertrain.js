import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSubteam from '../img/subteam-headers/header-powertrain.png';
import HeaderSubteamMobile from '../img/mobile/header-about-mobile.png';
import GalleryRectangle from '../img/gallary-rectangles.png';
import SubteamGroup from '../img/subteam-photos/powertrain_crop_052123.png';
import PowertrainParts from '../img/subteam-photos/powertrain_parts_052123.png';

import '../css/Subteam.css';

const Powertrain = () => {
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
						<h3>Powertrain Subteam Info</h3>
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
				<br />
				<br />
				<br />
				<Row className="justify-content-center text-center">
					<Col xs={12} sm={6} className="text-center">
						<div style={{width: "75%", marginLeft: "120px", position: "relative", top: "-90px"}}>
							<img
								src={PowertrainParts}
								alt="subteam photo"
								className="header selectDisable large-screen"
								id="subteam"
							/>
						</div>
					</Col>
					
					<Col xs={12} sm={5} className="text-center blue">
						<p style={{textTransform: "uppercase", marginLeft: "-5px", fontSize: "15px", width: "88%"}}>
							The Powertrain of the electric formula car transfers raw power,
							torque, and speed to the wheels. It all starts with the electric
							motors of the car, which convert the electrical/chemical energy
							from the accumulator to rotational kinetic energy at the motor
							shaft. This energy is transmitted through the drivetrain and wheel
							hubs to spin the wheels and tires, which propel the car forward.
							There are various drivetrain designs, ranging from the gearbox to
							chain drive. Lap simulations and energy usage calculations are
							performed to make design decisions that are best suited for the
							car to do well at the final Formula Society of Automotive
							Engineers (FSAE) competition. In addition to the powertrain, this
							subteam is responsible for the cooling system that ensures the
							components are all performing at optimal temperatures and
							efficiencies.
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

export default Powertrain;
