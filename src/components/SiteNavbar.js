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
				background: '#000000',
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
				style={{ borderColor: 'rgba(255, 255, 255, 0)' }}
			/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto"> 
					<a href="/about">
						<p style={style.NavText}>ABOUT</p>
					</a>
	
				<NavDropdown
					id="nav-dropdown"
					title={<p style={style.NavText}>TEAM</p>}
					variant="primary"
					menuVariant="dark"
					className="justify-content-center"
					>
					<NavDropdown.Item href="/team"><h13 style={style.NavDropdownText}>Team Leads</h13></NavDropdown.Item>
					<NavDropdown.Item href="/autonomous"><h13 style={style.NavDropdownText}>Autonomous</h13></NavDropdown.Item>
					<NavDropdown.Item href="/business"><h13 style={style.NavDropdownText}>Business</h13></NavDropdown.Item>	
					<NavDropdown.Item href="/chassis"><h13 style={style.NavDropdownText}>Chassis</h13></NavDropdown.Item>
					<NavDropdown.Item href="/dynamics"><h13 style={style.NavDropdownText}>Dynamics</h13></NavDropdown.Item>
					<NavDropdown.Item href="/eecs"><h13 style={style.NavDropdownText}>EECS</h13></NavDropdown.Item>
					<NavDropdown.Item href="/powertrain"><h13 style={style.NavDropdownText}>Powertrain</h13></NavDropdown.Item>
				</NavDropdown> 
				

					{/*<a
						href="https://evberkeleyblog.weebly.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p style={style.NavText}>Blog</p>
					</a>*/}
					<a href="/sponsors">
						<p style={style.NavText}>SPONSORS</p>
					</a>
					<a href="/join">
						<p style={style.NavText}>JOIN US</p>
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
		fontFamily: 'Titillium Web',
		margin: '0 2rem',
		fontSize: '22px',
	},
	NavDropdownText: {
		fontFamily: 'Titillium Web',
		margin: '0 2rem',
		fontSize: '20px',
		
	}
};

export default SiteNavbar;
