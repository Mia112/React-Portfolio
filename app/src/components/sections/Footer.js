import React from 'react';
import './Sections.css';

export default function Footer(porps) {
	return (
		<footer>
			<div className='wrapper'>
				<h3>THANKS FOR VISITING</h3>
				<p>© {new Date().getFullYear()} Miatta Sheriff</p>
			</div>
		</footer>
	);
}
