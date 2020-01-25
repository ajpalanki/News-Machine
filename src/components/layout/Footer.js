import React from 'react';
import { FaReact } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="row">
			<div className="col-md-12">
				<div className="footer p-3 mt-4 text-center bg-dark text-light">
					Developed By:
					<span className="text-warning font-weight-normal"> Abhijeet Palanki</span>
					, Using <FaReact /> React JS &amp; Redux JS integrated with external news API -
					<a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
						News API
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
