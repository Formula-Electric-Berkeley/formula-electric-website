import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSubteam from '../img/subteam-headers/header-worksessions-052123.png';
import Photos from '../img/subteam-photos/worksessions_photos_052123.png';

import '../css/Subteam.css';
const WorkSessions = () => {
    return (
        <div className="about">
			<SiteNavbar bg="#000000" />
            <img
				src={HeaderSubteam}
				alt="header subteam"
				className="header selectDisable large-screen"
				id="header"
			/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div style={{width: "80%", display: "block", marginLeft: "auto", marginRight: "auto"}}>
                <img
                    src={Photos}
                    alt="subteam photo"
                    className="header selectDisable large-screen"
                    id="subteam"
                />
			</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default WorkSessions;