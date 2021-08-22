import React from 'react';


import SiteNavbar from './SiteNavbar';


import '../css/Join.css';

const Join = () => {
	return (
		<div className="join">
			<SiteNavbar sticky="false" bg="#1c1c1c" />
			<div className="team-photo">
				<h3>
				
					WE ARE RECRUITING FOR FALL 2021.
				</h3>
				<br/>
				<h4>
					Recruitment Message 
				</h4>
				<br/>
				<h4><a href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fformulaelectricberkeley%2Fposts%2F365023968356352&show_text=true&width=500">Facebook Recruiting Group</a> </h4>
				<h4><a href="http://linktr.ee/feberkeley">Linktree</a></h4>
			</div>
		</div>
	);
};

export default Join;
