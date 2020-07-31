import React from 'react';
import { Ul } from '../Styles';

const Menu = ({ open }) => {
	return (
		<Ul open={open}>
			<li>HOME</li>
			<li>ABOUT</li>
			<li>PORTFOLIO</li>
			<li>CONTACT</li>
		</Ul>
	);
};
export default Menu;
