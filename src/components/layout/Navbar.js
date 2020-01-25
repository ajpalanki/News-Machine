import React from 'react';
import { FaNewspaper, FaReact } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-5">
			<div className="navbar-header">
				<span className="navbar-brand text-white">News Machine</span>
			</div>
			<ul className="navbar-nav ml-auto text-light d-inline-block">
				<li className="nav-item d-inline-block mr-4">
					<FaNewspaper id="newspaper-logo" size="32px" />
				</li>
				<li className="nav-item d-inline-block mr-4">
					<FaReact id="react-logo" size="32px" />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
