import React from 'react';
import { Link } from '@reach/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Linkedin from '../img/social-media-icons/linkedin-icon.png';
import Facebook from '../img/social-media-icons/facebook-icon.png';
import Insta from '../img/social-media-icons/insta-icon.png';
import NavbarLogo from '../img/navbarLogo.png';

import '../css/Navbar.css';

const SiteNavbar = (props) => {
	return (
		<Navbar
			expand="lg"
			style={{
				padding: '.8rem 2rem .8rem 2rem',
				minHeight: '10vh',
				background: '#1c1c1c',
			}}
			variant="dark"
			className="siteNavbar text-center"
			id="siteNavbar"
		>
			<Navbar.Brand>
				<Link to="/">
					<img
						src={NavbarLogo}
						alt="navbar logo"
						style={{
							width: '4rem',
						}}
					/>
				</Link>
			</Navbar.Brand>
			<Nav className="ml-auto social-nav">
				<Link to="/about" className="social-container">
					<img src={Linkedin} alt="linkedin icon" className="social-icon" />
					<div className="icon-overlay"></div>
				</Link>
				<Link to="/team" className="social-container">
					<img src={Facebook} alt="facebook icon" className="social-icon" />
					<div className="icon-overlay"></div>
				</Link>
				<Link to="/team" className="social-container">
					<img src={Insta} alt="instagram icon" className="social-icon" />
					<div className="icon-overlay"></div>
				</Link>
			</Nav>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: '0' }}>
				<Nav className="ml-auto">
					<Link to="/about">
						<p style={style.NavText}>About</p>
					</Link>
					<Link to="/team">
						<p style={style.NavText}>Team</p>
					</Link>
					<Link to="/">
						<p style={style.NavText}>Blog</p>
					</Link>
					<Link to="/sponsors">
						<p style={style.NavText}>Sponsors</p>
					</Link>
					<Link to="/join">
						<p style={style.NavText}>Join Us</p>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const style = {
	NavText: {
		fontFamily: 'Titillium Web',
		margin: '0 1rem',
		fontSize: '22px',
	},
};

export default SiteNavbar;
