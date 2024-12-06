import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';
import TeamMember from './TeamMember';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderTeam from '../img/header-team.png';
import HeaderTeamMobile from '../img/mobile/header-team-mobile.png';
import Team1 from '../img/subteam-logos/autonomous.png';
import Team2 from '../img/subteam-logos/biz.png';
import Team3 from '../img/subteam-logos/chassis.png';
import Team4 from '../img/subteam-logos/dynamics.png';
import Team5 from '../img/subteam-logos/eecs.png';
import Team6 from '../img/subteam-logos/powertrain.png';
import Team7 from '../img/subteam-logos/leadership.png';
import Team8 from '../img/subteam-logos/work-sessions.png';
import Team9 from '../img/subteam-logos/socials.png';

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
						<a href="/autonomous" target="_self" rel="noopener noreferrer">
							<TeamMember image={Team1} name="Autonomous" />
						</a>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<a href="/business" target="_self" rel="noopener noreferrer">
							<TeamMember image={Team2} name="Business" />
						</a>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<a href="/chassis" target="_self" rel="noopener noreferrer">
							<TeamMember image={Team3} name="Chassis" />
						</a>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<a href="/dynamics" target="_self" rel="noopener noreferrer">
							<TeamMember image={Team4} name="Dynamics" />
						</a>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<a href="/eecs" target="_self" rel="noopener noreferrer">
							<TeamMember image={Team5} name="EECS" />
						</a>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<a href="/powertrain" target="_self" rel="noopener noreferrer">
							<TeamMember image={Team6} name="Powertrain" />
						</a>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<a href="/teamleads" target="_self" rel="noopener noreferrer">
							<TeamMember image={Team7} name="Leadership" />
						</a>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<a href="/worksessions" target="_self" rel="noopener noreferrer">
							<TeamMember image={Team8} name="Work Sessions" />
						</a>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<a href="/socials" target="_self" rel="noopener noreferrer">
							<TeamMember image={Team9} name="Socials" />
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Team;
