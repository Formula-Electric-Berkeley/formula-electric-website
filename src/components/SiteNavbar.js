import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import NavbarLogo from '../img/logo.png';

import '../css/SiteNavbar.css';

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
				<a href="/">
					<img
						src={NavbarLogo}
						alt="navbar logo"
						className="selectDisable"
						style={{
							width: '14rem',
						}}					
					/>					
				</a>				
			</Navbar.Brand>			
			<Navbar.Toggle
				aria-controls="basic-navbar-nav"
				style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
			/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto"> 
					<a href="/about">
						<p style={style.NavText}>About</p>
					</a>
	
				<NavDropdown
					id="nav-dropdown"
					title={<p style={style.NavText}>Team</p>}
					variant="primary"
					menuVariant="dark"
					className="justify-content-center"
					>
					<NavDropdown.Item href="/team"><h13 style={style.NavDropdownText}>Team Leads</h13></NavDropdown.Item>
					{/*<NavDropdown.Item href="/subteam"><h13 style={style.NavDropdownText}>Subteam 1</h13></NavDropdown.Item>
					<NavDropdown.Item href="/"><h13 style={style.NavDropdownText}>Subteam 2</h13></NavDropdown.Item>	
					<NavDropdown.Item href="/"><h13 style={style.NavDropdownText}>Subteam 3</h13></NavDropdown.Item>
					<NavDropdown.Item href="/"><h13 style={style.NavDropdownText}>Subteam 4</h13></NavDropdown.Item>
					<NavDropdown.Item href="/"><h13 style={style.NavDropdownText}>Subteam 5</h13></NavDropdown.Item>
					<NavDropdown.Item href="/"><h13 style={style.NavDropdownText}>Subteam 6</h13></NavDropdown.Item>
					<NavDropdown.Item href="/"><h13 style={style.NavDropdownText}>Subteam 7</h13></NavDropdown.Item>*/}
				</NavDropdown> 
				

					{/*<a
						href="https://evberkeleyblog.weebly.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p style={style.NavText}>Blog</p>
					</a>*/}
					<a href="/sponsors">
						<p style={style.NavText}>Sponsors</p>
					</a>
					<a href="/join">
						<p style={style.NavText}>Join Us</p>
					</a>
					<a href="mailto: berkeleyformulae@gmail.com">
						<p style={style.NavText}>Contact</p>
					</a>
					<a href="https://give.berkeley.edu/egiving/index.cfm?fund=FU1349000">
						<p style={style.NavText}>Donate</p>
					</a>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const style = {
	NavText: {
		fontFamily: 'Overpass',
		margin: '0 2rem',
		fontSize: '22px',
	},
	NavDropdownText: {
		fontFamily: 'Overpass',
		margin: '0 2rem',
		fontSize: '20px',
		
	}
};

export default SiteNavbar;
