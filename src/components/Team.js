import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';
import TeamMember from './TeamMember';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderTeam from '../img/header-team.png';
import HeaderTeamMobile from '../img/mobile/header-team-mobile.png';
import Member1 from '../img/team-members/1.jpg';
import Member2 from '../img/team-members/2.jpg';
import Member3 from '../img/team-members/3.jpg';
import Member4 from '../img/team-members/4.jpg';
import Member5 from '../img/team-members/5.jpg';
import Member6 from '../img/team-members/6.jpg';
import Member7 from '../img/team-members/7.jpg';
import Member8 from '../img/team-members/8.jpg';
import Member9 from '../img/team-members/9.jpg';
import Member10 from '../img/team-members/10.jpg';
import Member11 from '../img/team-members/11.jpg';

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
							image={Member1}
							name="Michael McCulloh"
							role="Program Manager"
							major="Electrical Engineering and Computer Science"
							bio="tax collection"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
					  		image={Member2}
							name="Chris Leafstrand"
							role="Chief ME"
							major="Mechanical Engineering"
							bio="Hey, my name is Chris. I am very excited to help lead the team this season and provide an excellent opportunity for team members to have hands-on experience designing, building, and testing an electric race car at UC Berkeley. In my spare time, I enjoy hiking, working on my personal car, and skiing."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member3}
							name="Arya Bastani"
							role="EECS Lead"
							major="Computer Science and Physics"
							bio="“Good Morning” - Ted. I’m a fourth year Computer Science Major! I’m passionate about clean sustainable energy, technology, and building fast F1 cars. In my free time I like to play basketball, ultimate frisbee, and tennis with friends!"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member4}
							name="Nikhil Ograin"
							role="Accumulator Lead"
							major="Electrical Engineering and Computer Science"
							bio="Hi! I'm Nikhil, a second year Electrical Engineering and Computer Sciences major. While not developing electronic hardware and software for electric vehicles, I enjoy reading sci-fi and mystery, bicycling, and playing board/card games."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member5}
							name="Anish Gollakota"
							role="Autonomous Program Manager"
							major="Computer Science"
							bio="Hi! I'm a senior studying Computer Science with a passion for autonomous vehicles. In my free time, I like to lift, play basketball, and kick it."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member6}
							name="Siraj Patel"
							role="Business Lead"
							major="Business and Data Science"
							bio="Hi! I’m Siraj, a second year business and data science major who enjoys driving and playing basketball and football with friends in my free time. I’m very passionate about utilizing business skills to help building a formula style racecar."
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member7}
							name="Simon Huang"
							role="Chassis Lead"
							major="Mechanical Engineering"
							bio="Hi! I’m Simon, a second year studying Mechanical Engineering. I love to apply the knowledge I learned in class to real life applications. During my free time, you will probably find me playing basketball with friends at RSF."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member8}
							name="Pranav Pomalapally"
							role="Computer Science Lead"
							major="Electrical Engineering and Computer Science"
							bio="Good Morning"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member9}
							name="Toshko Andreev"
							role="Dynamics Lead"
							major="Mechanical Engineering"
							bio="Hey, I'm Toshko! I love designing and building cars, robots, and a brighter future for all."
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member10}
							name="Andrew Mussel"
							role="Electrical Engineering Lead"
							major="Electrical Engineering and Computer Science"
							bio="Hello, my name is Andrew Mussell. I'm a second-year EECS Major interested in circuit design, wearable technology, and sustainability. In my free time, I watch movies, rock climb, and hang out with friends."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member11}
							name="Weston White"
							role="Powertrain Lead"
							major="Mechanical Engineering"
							bio="Hi, I'm Weston a senior studying mechanical engineering. I'm excited about anything electric car related and to build one with FEB! In my free time I enjoy rock climbing and rendering with Blender."
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Team;
