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
import Member8 from '../img/team-members/8.jpg';

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
							name="Tijmen Sep"
							role="President"
							major="Mechanical Engineering"
							bio="Hey, I’m Tijmen, a third year studying mechanical engineering. I’m passionate about advancing sustainable technology. In my free time you’ll find me graphic designing, cooking, and playing the alto saxophone."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
					  	image={Member6}
							name="David Kurniawan"
							role="Chief ME"
							major="Mechanical Engineering"
							bio="Hi, I’m David! I’m super passionate about and aspire to play an active role in designing and building high-performance, autonomous, electric vehicles to show the world that sustainable, autonomous transportation is both the present and the future."
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
							name="Aakash Ramachandran"
							role="Chassis Lead"
							major="Mechanical Engineering"
							bio="Hi, I’m Aakash, a third year mechanical engineering major! I’m passionate about using what I’ve learned in my classes to build the best possible F1 - style electric vehicle here at FEB!"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member5}
							name="Shane Lee"
							role="Dynamics Lead"
							major="Mechanical Engineering"
							bio="Hi, I’m Shane! I’m a MechE with an EECS minor passionate about tech, space and electric mobility. I’m excited to see our hard work come to life."
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
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member8}
							name="Siraj Patel"
							role="Business Lead"
							major="Business and Data Science"
							bio="Hi! I’m Siraj, a second year business and data science major who enjoys driving and playing basketball and football with friends in my free time. I’m very passionate about utilizing business skills to help building a formula style racecar"
						/>
					</Col>
					
				</Row>
			</Container>
		</div>
	);
};

export default Team;
