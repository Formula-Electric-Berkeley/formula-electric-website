import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LandingLogo from '../img/navbar-logo.png';
import Badge from '../img/badge.png';

import '../css/Footer.css';

const Landing = () => {
	return (
		<footer className="text-center footer">
			<Container fluid>
				<Row className="justify-content-center align-items-center mt-3 large-footer">
					<Col xs={12} md={4} className="footer-container">
						<a
							href="https://www.ocf.berkeley.edu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="aligncenter size-full selectDisable"
								src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
								alt="hosted by the ocf"
								height="70"
							/>
						</a>
					</Col>
					<Col xs={12} md={4} className="footer-container">
						<p className="disclaimer-text">
							We are a student group acting independently of the University of
							California. We take full responsibility for our organization and
							this web site.
						</p>
					</Col>
					<Col xs={12} md={4} className="footer-container">
						<a
							href="http://webatberkeley.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Badge}
								alt="WDB Badge"
								height="70"
								className="selectDisable"
							/>
						</a>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="social-row">
						<div className="social-div">
							<a
								href="https://www.facebook.com/formulaelectricberkeley/"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
							>
								<i className="fa fa-facebook"></i>
							</a>

							<a
								href="https://twitter.com/cal_electric"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
							>
								<i className="fa fa-twitter"></i>
							</a>
							<a
								href="https://www.instagram.com/berkeleyformulaelectric/"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
							>
								<i className="fa fa-instagram"></i>
							</a>
						</div>
						<a href="/" className="logo">
							<img
								src={LandingLogo}
								alt="landing logo"
								className="selectDisable"
								style={{ maxWidth: '100%' }}
							/>
						</a>
						<div className="social-div">
							<a
								href="https://www.linkedin.com/company/formulaelectricberkeley/"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
							>
								<i className="fa fa-linkedin"></i>
							</a>
							<a
								href="https://www.youtube.com/channel/UCvDIeMEXHI4r0uX0OfNizZw"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
							>
								<i className="fa fa-youtube"></i>
							</a>
							<a
								href="mailto: berkeleyformulae@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
							>
								<i className="fa fa-envelope-o"></i>
							</a>
						</div>
					</Col>
				</Row>

				<Row className="justify-content-center align-items-center mt-3 small-footer">
					<Col
						xs={5}
						md={4}
						className="footer-container"
						// style={{ padding: '0' }}
					>
						<a
							href="https://www.ocf.berkeley.edu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="aligncenter size-full selectDisable"
								src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
								alt="hosted by the ocf"
								height="50"
							/>
						</a>
					</Col>
					<Col xs={6} md={4} className="footer-container">
						<a
							href="http://webatberkeley.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Badge}
								alt="WDB Badge"
								height="48"
								className="selectDisable"
							/>
						</a>
					</Col>
					<Col
						xs={8}
						md={4}
						className="footer-container"
						style={{ padding: '0' }}
					>
						<p className="disclaimer-text">
							We are a student group acting independently of the University of
							California. We take full responsibility for our organization and
							this web site.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Landing;
