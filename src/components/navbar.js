import React from "react"

const Navbar = () => (
	<div className='navbar' id='navbar'>
		<div className='name'>SIDDHARTH KULKARNI	</div>
		<div className='tabs'>
			<ul>
				<a href="#home" className='nav-item'><li className='home-tab' id='active'>HOME</li></a>
				<a href="#about" className='nav-item'><li className='about-tab' id='inactive'>ABOUT</li></a>
				<a href="#projects" className='nav-item'><li className='projects-tab' id='inactive'>PROJECTS</li></a>
				<a href="#contact" className='nav-item'><li className='contact-tab' id='inactive'>CONTACT</li></a>
			</ul>
		</div>
		<div className='highlight'></div>
	</div>
)

export default Navbar
