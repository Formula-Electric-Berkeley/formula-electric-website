import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import About from './components/About';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Join from './components/Join';
import Footer from './components/Footer';
import Error from './components/404';
import Subteam from './components/Subteam';
import Autonomous from './components/Autonomous';
import Bizops from './components/Bizops';
import Chassis from './components/Chassis';
import Dynamics from './components/Dynamics';
import EECS from './components/EECS';
import Powertrain from './components/Powertrain';
import TeamLeads from './components/TeamLeads';
import BigGive from './components/BigGive';
import WorkSessions from './components/WorkSessions';
import Socials from './components/Socials';

import './css/App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/team">
						<Team />
					</Route>
					<Route path="/teamleads">
						<TeamLeads />
					</Route>
					<Route path="/sponsors">
						<Sponsors />
					</Route>
					<Route path="/join">
						<Join />
					</Route>
					<Route path="/subteam">
						<Subteam />
					</Route>
					<Route path="/autonomous">
						<Autonomous />
					</Route>
					<Route path="/business">
						<Bizops />
					</Route>
					<Route path="/chassis">
						<Chassis />
					</Route>
					<Route path="/dynamics">
						<Dynamics />
					</Route>
					<Route path="/eecs">
						<EECS />
					</Route>
					<Route path="/powertrain">
						<Powertrain />
					</Route>
					<Route path="/biggive">
						<BigGive />
					</Route>
					<Route path="/socials">
						<Socials />
					</Route>
					<Route path="/worksessions">
						<WorkSessions />
					</Route>
					<Route path="/">
						<Landing />
					</Route>
					<Route default>
						<Error />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
