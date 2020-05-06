import React from 'react';

import '../css/Team.css';

const TeamMember = (props) => {
	return (
		<div>
			<div className="individual-container">
				<img
					src={props.image}
					alt={props.name}
					className="member-photo fade-in-image"
				/>
				<div className="overlay">
					<div className="overlay-text">{props.bio}</div>
				</div>
			</div>
			<h4 className="member-name fade-in">{props.name}</h4>
			<p className="member-role fade-in">{props.role}</p>
			<p className="member-major fade-in">{props.major}</p>
		</div>
	);
};

export default TeamMember;
