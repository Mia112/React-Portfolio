import React, { useState } from 'react';
import { BurgerStyle } from '../Styles';
import Menu from './Menu';

const Burger = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<BurgerStyle open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</BurgerStyle>
			<Menu open={open} />
		</>
	);
};
export default Burger;
