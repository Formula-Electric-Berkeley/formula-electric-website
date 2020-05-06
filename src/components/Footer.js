import React from 'react';

const Landing = () => {
	return (
		<footer
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '5%',
				background: '#2A2A2A',
			}}
			className="text-center"
		>
			<a href="http://webatberkeley.org/">
				<p style={{ margin: '0', padding: '.7rem', fontSize: '18px' }}>
					Designed and Built by Web Development at Berkeley
				</p>
			</a>
		</footer>
	);
};

export default Landing;
