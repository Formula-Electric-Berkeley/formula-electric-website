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
import Member12 from '../img/team-members/12.jpg';
import Member13 from '../img/team-members/13.jpg';
import Member14 from '../img/team-members/14.jpg';
import Member15 from '../img/team-members/15.jpg';
import Member16 from '../img/team-members/16.jpg';

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
							name="Michael McCulloch"
							role="Program Manager"
							major="Electrical Engineering and Computer Science"
							bio="Hi my name is Michael!  I love cars, and have taken thousands of photos of everything from Fords to Koenigseggs. In my free time I tinker with RC cars and sail competitively. I am super excited to help lead the push to a fully electric automotive industry!"
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
							name="Josh Kavilaveettil"
							role="Accumulator-Mechanical Lead"
							major="Mechanical Engineering"
							bio="Hey! I'm Josh and I'm a senior in Mechanical Engineering with a focus in robotics! When I'm not working on the battery and not injured (not often lol), I dance with my pro Bollywood Fusion dance team Zahanat, play acoustic guitar, soccer and go snowboarding."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member6}
							name="Anish Gollakota"
							role="Autonomous Program Manager"
							major="Computer Science"
							bio="Hi! I'm a senior studying Computer Science with a passion for autonomous vehicles. In my free time, I like to lift, play basketball, and kick it."
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member7}
							name="Simon Lu"
							role="Business Lead"
							major="Mechanical Engineering"
							bio="Hey, I'm Simon, a second year studying mechanical engineering. I want to take part in the future of ev automobile! I enjoy playing basketball with Simon Huang in my free time."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member8}
							name="Ming Chin"
							role="Chassis Lead"
							major="Mechanical Engineering"
							bio="Hi, I’m Ming! I am a car enthusiast and I am passionate about technological innovation happening in the automotive space. In my free time, I love playing basketball, mountain biking, and hanging out with friends!"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member9}
							name="Pranav Pomalapally"
							role="Computer Science Lead"
							major="Electrical Engineering and Computer Science"
							bio="Hey, I’m Pranav, a senior EECS major! I love music basketball, and making cars go fast. I’m excited to build sustainable high performing cars with FEB!"
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member10}
							name="Toshko Andreev"
							role="Dynamics Lead"
							major="Mechanical Engineering"
							bio="Hey, I'm Toshko! I love designing and building cars, robots, and a brighter future for all."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member11}
							name="Andrew Mussel"
							role="Electrical Engineering Lead"
							major="Electrical Engineering and Computer Science"
							bio="Hello, my name is Andrew Mussell. I'm a second-year EECS Major interested in circuit design, wearable technology, and sustainability. In my free time, I watch movies, rock climb, and hang out with friends."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member12}
							name="Sarah Cheng"
							role="Internal PM"
							major="Business"
							bio="Hi! I'm Sarah, a third-year studying Business Administration at UC Berkeley Haas with a passion for sustainability, community, and innovation. In my free time, I love snowboarding, baking, taking pictures with my new film camera, and spending time with my family and friends."
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member13}
							name="Daniel Pack"
							role="Manufacturing PM"
							major="Mechanical Engineering and Business"
							bio="Hey! I'm Daniel, a third year studying Mechanical Engineering & Business and I'm super excited to build and test our car this year! Outside of FEB, I love ultimate frisbee, skiing, and hiking."
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member14}
							name="Chloe Hu"
							role="Marketing PM"
							major="Data Science and Business"
							bio="My name is Chloe and I am a senior studying Data Science + Business! I joined the FEBily for the experience and stayed for the community. In my free time, I like to play basketball, sing in the shower, and write poems!"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member15}
							name="Adam Ousherovitch"
							role="Planning and Controls Lead"
							major="Math and Computer Science"
							bio="Hi im Adam. I'm a sophomore in math and computer science. I'm interested in autonomous vehicles. In my free time, im playing basketball, going backpacking, or in the gym."
						/>
					</Col>
				</Row>
				<Row className="justify-content-around member-row">
					<Col xs={12} md={4} className="text-center">
						<TeamMember
							image={Member16}
							name="Weston White"
							role="Powertrain Lead"
							major="Mechanical Engineering"
							bio="Hi, I'm Weston a senior studying mechanical engineering. I'm excited about anything electric car related and to build one with FEB! In my free time I enjoy rock climbing and rendering with Blender."
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
