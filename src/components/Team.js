import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';
import TeamMember from './TeamMember';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderTeam from '../img/header-team.png';
import HeaderTeamMobile from '../img/mobile/header-team-mobile.png';
import Member2 from '../img/team-members/2.jpg';
import Member3 from '../img/team-members/3.jpg';
import Member4 from '../img/team-members/4.jpg';
import Member5 from '../img/team-members/5.jpg';
import Member6 from '../img/team-members/6.jpg';
import Member7 from '../img/team-members/7.jpg';

import '../css/Team.css';

const Team = () => {
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
			<SiteNavbar sticky="top" bg="#1c1c1c" />
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
							image={Member4}
							name="Brad Ling"
							role="President"
							major="Mechanical Engineering"
							bio="Hi, I’m Brad, a MechE junior with an EECS minor who’s obsessed with speed - cars and computers alike. I can’t wait to see our own creation come into motion."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
					  	image={Member6}
							name="Nimit Baid"
							role="Chief ME"
							major="Mechanical Engineering"
							bio="Hi, I’m Nimit! I’m passionate about innovative mechanical design and entrepreneurship. I believe in building a sustainable future faster."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
								image={Member7}
								name="Ted Zhang"
								role="EECS Lead"
								major="Computer Science and Physics"
								bio="Good morning, I’m Ted, a CS & Physics major. I like tech, cars, rocket science and basically anything that comes with power."
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member2}
							name="Mayank Gupta"
							role="Chassis Lead"
							major="Mechanical Engineering"
							bio="G’day, I’m Mayank, a mechanical engineer at UC Berkeley. I’m an F1 fanatic who loves the challenge of designing high speed and high performance vehicles!"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member5}
							name="Zach ElShaer"
							role="Dynamics Lead"
							major="Mechanical Engineering"
							bio="Hey, I’m Zach, a 4th year MechE. I grew up tuning and working on cars with my dad and love applying what I’ve learned as an ME to our car and contributing to the development of EV racing."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member3}
							name="Srikar Gattepalli"
							role="Powertrain Lead"
							major="Mechanical Engineering"
							bio="Hey I’m Srikar, and I love using engineering to build go-karts, motorcycles, and now a formula-style, electric race car."
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Team;
