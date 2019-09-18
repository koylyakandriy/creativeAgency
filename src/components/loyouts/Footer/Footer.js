import React from 'react';

import './Footer.scss'

const Footer = () => {
	return (
		<footer className="Footer">
			<div className="list">
				<a className="link" href="https://facebook.com" target="_blank"
				   rel="noopener noreferrer"><i className="fab fa-facebook"/></a>
				<a className="link" href="https://instagram.com" target="_blank"
				   rel="noopener noreferrer"><i className="fab fa-instagram"/></a>
				<a className="link" href="https://linkedin.com" target="_blank"
				   rel="noopener noreferrer"><i
					className="fab fa-linkedin-in"/></a>
			</div>
		</footer>
	);
};

export default Footer;