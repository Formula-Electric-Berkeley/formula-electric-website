import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LandingLogo from '../img/logo.webp';
import Badge from '../img/badge.webp';

import '../css/Footer.css';

const Landing = () => {
	return (
		<footer className="text-center footer">
			<Container fluid>
				<Row className="justify-content-center align-items-center">
					<Col xs={12} md={4} lg={6} className="text-left">
						<img src={LandingLogo} alt="landing logo" className="logo" />
					</Col>
					<Col xs={12} md={6} lg={4} className="badge-container">
						<a href="https://www.ocf.berkeley.edu">
							<img
								className="aligncenter size-full"
								src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
								alt="hosted by the ocf"
								width="125"
								height="50"
							></img>
						</a>
					</Col>
				</Row>
				<Row className="justify-content-center align-items-center">
					<Col xs={12} md={6} lg={4} className="text-left">
						<p className="disclaimer-text">
							We are a student group acting independently of the University of
							California. We take full responsibility for our organization and
							this web site.
						</p>
					</Col>
					<Col xs={12} md={4} lg={6} className="badge-container">
						<a href="http://webatberkeley.org/">
							<img src={Badge} alt="WDB Badge" width="250" />
						</a>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="social-row">
						<a href="https://www.facebook.com/formulaelectricberkeley/">
							<i className="fa fa-facebook"></i>
						</a>

						<a href="https://twitter.com/cal_electric">
							<i className="fa fa-twitter"></i>
						</a>
						<a href="https://www.instagram.com/berkeleyformulaelectric/">
							<i className="fa fa-instagram"></i>
						</a>
						<a href="https://www.linkedin.com/company/formulaelectricberkeley/">
							<i className="fa fa-linkedin"></i>
						</a>
						<a href="https://www.youtube.com/channel/UCvDIeMEXHI4r0uX0OfNizZw">
							<i className="fa fa-youtube"></i>
						</a>
						<a href="mailto:berkeleyformulae@gmail.com">
							<i className="fa fa-envelope-o"></i>
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Landing;
