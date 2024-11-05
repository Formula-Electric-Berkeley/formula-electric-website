import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';
import TeamMember from './TeamMember';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderTeam from '../img/header-teamleads.png';
import HeaderTeamMobile from '../img/mobile/header-team-mobile.png';
import PMQuirky from '../img/pm-quirky.png';
import Member1 from '../img/team-members/Weston White.jpeg';
import Member2 from '../img/team-members/Toshko Headshot.jpg';
import Member3 from '../img/team-members/Chris.jpg';
import Member4 from '../img/team-members/Smit Malde.jpg';
import Member5 from '../img/team-members/Sarah Cheng.JPG';
import Member6 from '../img/team-members/Leo Jiang.jpg';
import Member7 from '../img/team-members/Amal Malde.jpg';
import Member8 from '../img/team-members/Alex Lu.JPG';
import Member9 from '../img/team-members/nikhil.jpg';
import Member10 from '../img/team-members/Daniel Pack.jpg';
import Member11 from '../img/team-members/Caroline Johnson.JPG';
import Member12 from '../img/team-members/Ming Chin.jpg';
import Member13 from '../img/team-members/Can Aydin.JPG';
import Member14 from '../img/team-members/Akshat.jpeg';
import Member15 from '../img/team-members/Ben Kao.jpg';
import Member16 from '../img/team-members/Rohan.jpg';
import Member17 from '../img/team-members/Valerie He.jpg';
import Member18 from '../img/team-members/Santiago Hopkins.jpg';

import '../css/Team.css';

const TeamLeads = () => {
	$(document).ready(function () {
		$('.fade-in-image').each(async function (i) {
			var top_of_object = $(this).offset().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > top_of_object) {
				$(this).animate({ opacity: '1' }, 750);
			}
		});
		$('.fade-in').each(async function (i) {
			var top_half_of_object = $(this).offset().top + $(this).outerHeight() / 2;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > top_half_of_object) {
				$(this).animate({ opacity: '1' }, 750);
			}
		});
		/* Every time the window is scrolled ... */
		$(window).scroll(async function () {
			/* Check the location of each desired element */
			$('.fade-in-image').each(async function (i) {
				var top_of_object = $(this).offset().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				if (bottom_of_window > top_of_object) {
					$(this).animate({ opacity: '1' }, 750);
				}
			});
			$('.fade-in').each(async function (i) {
				var top_half_of_object =
					$(this).offset().top + $(this).outerHeight() / 2;
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				if (bottom_of_window > top_half_of_object) {
					$(this).animate({ opacity: '1' }, 550);
				}
			});
		});
	});
	return (
		<div className="team">
			<SiteNavbar sticky="top" bg="#000000" />
			<img
				src={HeaderTeam}
				alt="header team"
				className="header selectDisable large-screen"
			/>
			<img
				src={HeaderTeamMobile}
				alt="header team"
				className="header selectDisable small-screen"
			/>
			<Container fluid className="member-container">
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member1}
							name="Weston White"
							role="President"
							major="Mechanical Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member2}
							name="Toshko Andreev"
							role="President"
							major="Mechanical Engineering & EECS Minor"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member3}
							name="Chris Leafstrand"
							role="Chief Mechanical Engineer"
							major="Mechanical Engineering & EECS Minor"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member4}
							name="Smit Malde"
							role="Chief EECS"
							major="Electrical Engineering and Computer Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member5}
							name="Sarah Cheng"
							role="Business and Operations Lead"
							major="Business Administration"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member6}
							name="Leo Jiang"
							role="Autonomous Lead"
							major="Computer Science"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member7}
							name="Amal Malde"
							role="Electrical Engineering Lead"
							major="Electrical Engineering and Computer Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member8}
							name="Alex Lu"
							role="Computer Science Lead"
							major="Computer Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member9}
							name="Nikhil Ograin"
							role="Accumulator EE Lead"
							major="Electrical Engineering and Computer Science"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member10}
							name="Daniel Pack"
							role="Accumulator Mechanical Lead"
							major="Mechanical Engineering and Business Administration"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member11}
							name="Caroline Johnson"
							role="Manufacturing PM"
							major="Chemical Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member12}
							name="Ming Chin"
							role="Aerodynamics Lead"
							major="Mechanical Engineering"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member13}
							name="Can Aydin"
							role="Powertrain Lead"
							major="Mechanical Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member14}
							name="Akshat Kumar"
							role="Chassis Lead"
							major="Mechanical Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member15}
							name="Benjamin Kao"
							role="Simulations PM"
							major="Mechanical Engineering and Material Science and Engineering"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member16}
							name="Rohan Aggarwal"
							role="Dynamics PM"
							major="Mechanical Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member17}
							name="Valerie He"
							role="Outreach PM"
							major="Electrical Engineering and Computer Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member18}
							name="Santiago Hopkins"
							role="Autonomous Mechanical Systems PM"
							major="Mechanical Engineering and City Planning"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
				<img
							src={PMQuirky}
							alt="landing description"
							className="member-photo selectDisable"
						/>
				</Row>
			</Container>
		</div>
	);
};

export default TeamLeads;
