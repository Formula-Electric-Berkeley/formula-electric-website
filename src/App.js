import React from 'react';
import { Router } from '@reach/router';

import Landing from './components/Landing';
import About from './components/About';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Join from './components/Join';
import Footer from './components/Footer';

import './css/App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Landing path="/" />
				<About path="/about" />
				<Team path="/team" />
				<Sponsors path="/sponsors" />
				<Join path="/join" />
			</Router>
			<Footer />
		</div>
	);
}

export default App;
