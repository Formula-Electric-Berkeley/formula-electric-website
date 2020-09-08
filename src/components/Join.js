import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/Join.css';

const Join = () => {
	return (
		<div className="join">
			<SiteNavbar sticky="false" bg="#1c1c1c" />
			<div className="team-photo">
				<h3>
				<br/>
					FEB Fall 2020 recruitment is starting!<br/>
				</h3>
				<h4>
				<br/>
				We are looking for mechanical, electrical, and business teammates.<br/><br/>
				<a href="https://berkeley.zoom.us/rec/share/Dq00Zk-ObOCNcPWkZ9bVsSTNOKJpIM8VwTOnvirTefiAmqrGZdoyqzq-UFH8oKjY.0pY3YfoD0h8Smi1T?startTime=1599188499000">Infosession Recording</a>
				<br/><br/>
				<a href="https://docs.google.com/presentation/d/131F8HJUAxsQalvTcHe5P7p4uLgUq5NXLogXWpzgZ-24/edit?usp=sharing">Infosession Slides</a>
				<br/>
				<br/>
				</h4>
				<div className= "recruitvideo">
				<hr2/>
				<Row noGutters="true">
				<div className= "video">
				<iframe
					class="responsive-iframe"
					height="380"
					width="660"
					src="https://www.youtube.com/embed/pl0zajFT3-w"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media;
					gyroscope; picture-in-picture" allowfullscreen>
				</iframe>
				</div>
				</Row>
				</div>
				<br/>
				<br/><br/>
				<a href= "https://forms.gle/ToCNUxLYJNs5yPqu7">
				<Button className="button join-button fade-in">
					<p className="button-text">Apply Here!</p>
				</Button>
				</a>
			</div>
		</div>
	);
};

export default Join;
