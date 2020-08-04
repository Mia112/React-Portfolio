import React, { useState } from 'react';

import Nav from './components/navigation/Navbar';
import Menu from './components/navigation/Menu';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
	const [state, setState] = useState({
		menuState: false
	});

	const toggleMenu = () => {
		setState((props) => ({
			menuState: !props.menuState
				? 'active'
				: props.menuState === 'deactive'
				? 'active'
				: 'deactive'
		}));
	};

	return (
		<React.Fragment>
			<Menu toggleMenu={toggleMenu} showMenu={state.menuState} />
			<Nav toggleMenu={toggleMenu} showMenu={state.menuState} />
			<Intro />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</React.Fragment>
	);
}

export default App;
