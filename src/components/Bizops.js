import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSubteam from '../img/subteam-headers/header-b&o.png';
import HeaderSubteamMobile from '../img/mobile/header-about-mobile.png';
import SubteamGroup from '../img/subteam-photos/b&o_crop_052123.png';
import BizOpPoster from '../img/subteam-photos/b&o_poster_052123.png';

const Bizops = () => {
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
						<h3>Business Subteam Info</h3>
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
						<div style={{width: "70%", marginLeft: "180px", position: "relative", top: "-120px"}}>
							<img
								src={BizOpPoster}
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
						

						<p style={{textTransform: "uppercase", marginLeft: "65px", fontSize: "15px", width: "77%"}}>The business team handles finances and expenses for the team along with securing sponsorships, Marketing and coordinating socials like retreat and sponsorship events. We prepare students for handling business in the tech / engineering industry from bom management to resource allocation. students can pick up a variety of skills like back end web development, figma and digital marketing. The business team  prepares a consulting-style, cost analyisis report for the end-of-year fsae competition.</p>
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

export default Bizops;
