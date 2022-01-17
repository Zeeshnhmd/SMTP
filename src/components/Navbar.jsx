import React from 'react';
import logo from '../img/logo1.svg';
const Navbar = () => {
	return (
		<>
			<header>
				<nav className="container flex justify-between items-center mt-4 sm:mt-12">
					<div className="py-1 ">
						<img className="w-32" src={logo} alt="" />
					</div>
					<div className="py-1 ">
						<img className="w-32" src={logo} alt="" />
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
