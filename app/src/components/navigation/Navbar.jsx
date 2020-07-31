import React from 'react';
import { Nav } from '../Styles';

import Burger from './Burger';

const Navbar = () => {
	return (
		<Nav>
			<div className='logo'>Miatta Sheriff</div>
			<Burger />
		</Nav>
	);
};
export default Navbar;
