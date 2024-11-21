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
import Member1 from '../img/team-members/Caroline Johnson.jpeg';
import Member2 from '../img/team-members/Toshko Headshot.jpg';
import Member3 from '../img/team-members/Mia Headshot.jpg';
import Member4 from '../img/team-members/Smit Malde.jpg';
import Member5 from '../img/team-members/Greta Headshot.JPG';
import Member6 from '../img/team-members/Sri Headshot.jpg';
import Member7 from '../img/team-members/Kimberly Headshot.jpg';
import Member8 from '../img/team-members/Kavin Headshot.JPG';
import Member9 from '../img/team-members/nikhil.jpg';
import Member10 from '../img/team-members/Daniel Pack.jpg';
import Member11 from '../img/team-members/Bailey Headshot.JPG';
import Member12 from '../img/team-members/Allen Headshot.jpg';
import Member13 from '../img/team-members/Duncan Headshot.JPG';
import Member14 from '../img/team-members/Arnav Headshot.jpeg';
import Member15 from '../img/team-members/Ben Kao.jpg';
import Member16 from '../img/team-members/Rohan.jpg';
import Member17 from '../img/team-members/Daniel Headshot.jpg';
import Member18 from '../img/team-members/Santiago Hopkins.jpg';
import Member19 from '../img/team-members/Frances Headshot.jpg';
import Member20 from '../img/team-members/Valerie Headshot.jpg';
import Member21 from '../img/team-members/Santiago Hopkins.jpg';

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
							name="Caroline Johnson"
							role="Chief Mechanical Engineer"
							major="Chemical Engineering and Mechanical Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member2}
							name="Toshko Andreev"
							role="President"
							major="Mechanical Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member3}
							name="Mia Galatis"
							role="Vice President"
							major="Mechanical Engineering"
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
							name="Greta Mixon"
							role="Business and Operations Lead"
							major="Data Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member6}
							name="Sricharan Guddanti"
							role="Autonomous Lead"
							major="Electrical Engineering and Computer Science"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member7}
							name="Kimberly Duong"
							role="Electrical Engineering Lead"
							major="Electrical Engineering and Computer Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member8}
							name="Kavin Vasudevan"
							role="Computer Science Lead"
							major="Computer Science and Data Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member9}
							name="Rick Huang"
							role="Accumulator EE Lead"
							major="Electrical Engineering and Computer Science"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member10}
							name="Adrita Chakraborty"
							role="Accumulator Mechanical Lead"
							major="Mechanical Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member11}
							name="Bailey Monti"
							role="Manufacturing PM"
							major="Mechanical Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member12}
							name="Alan Yang"
							role="Aerodynamics Lead"
							major="Aerospace Engineering"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member13}
							name="Duncan Ritchie"
							role="Powertrain Lead"
							major="Materials Science and Engineering"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member14}
							name="Arnav Patel"
							role="Chassis Lead"
							major="Mechanical Engineering and Eletrical Engineering and Computer Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member15}
							name="Nick Lenoff"
							role="Simulations PM"
							major="Data Science"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member16}
							name="Athul Krishnan"
							role="Dynamics PM"
							major="Mechanical Engineering and Electrical Engineering and Computer Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member17}
							name="Daniel Municio"
							role="Autonomous Software PM"
							major="Applied Math"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member18}
							name="Reid Dye"
							role="Autonomous Mechanical Systems PM"
							major="Mechanical Engineering and Electrical Engineering and Computer Science minor"	
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member19}
							name="Frances Wong"
							role="Finance PM"
							major="Political Economy"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member20}
							name="Valerie He"
							role="Outreach PM"
							major="Electrical Engineering and Computer Science"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member21}
							name="Zoe Flemate"
							role="Operation PM"
							major="Geography"
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
