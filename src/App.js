import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import News from './components/main/News';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Router>
				<React.Fragment>
					<div className="container">
						<Switch>
							<Route path="/" component={News} exact />
						</Switch>
					</div>
				</React.Fragment>
			</Router>
			<Footer />
		</React.Fragment>
	);
}

export default App;
