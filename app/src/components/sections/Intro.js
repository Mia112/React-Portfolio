import React from 'react';
import './Sections.css';

export default function Header(props) {
	return (
		<section id='home-section'>
			<div className='container'>
				<h1 className='intro-text'>Hello, I am Miatta.</h1>
				<h3 className='sub-intro-text'>
					Full-Stack Developer | Quality Assurance Tester
				</h3>

				<div className='buttons'>
					<a href='#projects'>my portfolio</a>
					<a href='#contact' className='cta'>
						get in touch
					</a>
				</div>
			</div>
		</section>
	);
}
