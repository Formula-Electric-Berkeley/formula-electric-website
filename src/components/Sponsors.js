import React from 'react';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSponsors from '../img/header-sponsors.png';
import HeaderSponsorsMobile from '../img/mobile/header-sponsors-mobile.png';
import SponsorPhotos from '../img/sponsors-web-062823.png';
import SponsorPhotosMobile from '../img/mobile/sponsors-mobile-062823.png';

import '../css/Sponsors.css';

const Sponsors = () => {
	return (
		<div className="sponsors">
			<SiteNavbar sticky="top" bg="#000000" />
			<img
				src={HeaderSponsors}
				alt="header sponsors"
				className="header selectDisable large-screen"
			/>
			<img
				src={HeaderSponsorsMobile}
				alt="header sponsors"
				className="header selectDisable small-screen"
			/>
			<Container fluid>
				<Row className="justify-content-center">
					<Col xs={12} className="text-center">
						<h3>WE ARE A 501(C) NON-PROFIT ORGANIZATION.</h3>
					</Col>
					<Col xs={12} className="text-center">
						<h4>
							​YOUR MONETARY AND IN-KIND DONATIONS WILL BE 100% TAX DEDUCTIBLE.
						</h4>
						<hr />
					</Col>
					<Col>
						<h3>
							Our team of engineers designs and builds a space-frame steel chassis to 
							contain lithium-ion batteries, AC motors, and high-performance suspension systems.
						</h3>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} sm={6} className="text-center">
						<div className="benefit-box benefit-you-box">
							<h2>BENEFITS TO YOU</h2>
							<p>
								<b className="blue">Sponsorship Perks:</b> We have carefully
								curated a list of perks to offer the maximum value to our
								sponsors.
							</p>
							<p>
								<b className="blue">Talent:</b> Our members learn a lot through
								the project and look forward to exclusive recruitment with our
								sponsors. When you hire from FEB, you hire from a team of
								enthusiastic professionals who are prepared to meet the
								expectations of your company.
							</p>
							<p>
								<b className="blue">Connect with the Berkeley Community:</b> We
								display your logo on our banners, social media, and merchandise,
								Cal students will recognize your brand and product as one that
								supports a sustainable tech endeavor.
							</p>
						</div>
					</Col>
					<Col xs-={12} sm={6} className="text-center">
						<div className="benefit-box benefit-us-box">
							<h2>BENEFITS TO US</h2>
							<p>
								<b className="yellow">Crucial Funding:</b> The team depends on
								sponsor funding to buy materials and parts towards the
								development of our car.
							</p>
							<p>
								<b className="yellow">Materials and Resource Support:</b>{' '}
								In-kind donations such as parts, services, and access to
								facilities are immensely helpful to the team. For example,
								Partnerships with PTC Academic and Solidworks have given FEB
								access to programs which help our engineers design the car.
							</p>
							<p>
								<b className="yellow">Intellectual and Technology Support:</b>{' '}
								Working with unexplored technology creates significant
								challenges. We deeply appreciate the years of experience offered
								by the members of our sponsor organizations.
							</p>
						</div>
					</Col>
				</Row>
				<div class="image-link">
					<Row className="justify-content-center">
						<img
							src={SponsorPhotos}
							alt="sponsors"
							className="sponsor-photos selectDisable"
							useMap="#image-map"
						/>
						<map name="image-map">
							<area
								target="_self"
								alt="Sanyo Denki"
								title="Sanyo Denki"
								href="https://www.sanyodenki.com/taiwan/index.html"
								coords="580,250,820,3910"
								shape="rect"
							></area>
						</map>
						<img
							src={SponsorPhotosMobile}
							alt="sponsors"
							className="sponsor-photos-mobile selectDisable"
						/>
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default Sponsors;
