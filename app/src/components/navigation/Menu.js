import React from 'react';

import './Nav.css';

export default function Menu(props) {
	return (
		<div className={`menu-container ${props.showMenu}`}>
			<div className='overlay' />
			<div className='menu-items'>
				<ul>
					<li>
						<a href='#home-section' onClick={props.toggleMenu}>
							HOME
						</a>
					</li>
					<li>
						<a href='#about' onClick={props.toggleMenu}>
							ABOUT
						</a>
					</li>
					<li>
						<a href='#projects' onClick={props.toggleMenu}>
							PORTFOLIO
						</a>
					</li>
					<li>
						<a href='#contact' onClick={props.toggleMenu}>
							CONTACT
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
