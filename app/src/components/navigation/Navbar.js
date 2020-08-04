import React from 'react';

import './Nav.css';

export default function Nav(props) {
	return (
		<React.Fragment>
			<navbar
				id='navbar'
				className='sticky-top navbar-expand-lg navbar-light bg-light'>
				<div className='logo'>Miatta Sheriff</div>
				<div
					onClick={props.toggleMenu}
					className={
						props.showMenu === 'active' ? 'menu-button active' : 'menu-button'
					}>
					<span />
				</div>
			</navbar>
		</React.Fragment>
	);
}
