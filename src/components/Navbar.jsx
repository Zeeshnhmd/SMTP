import React from 'react';
import logo from '../img/logo1.svg';
const Navbar = ({ darkTheme, setDarkTheme }) => {
	return (
		<div className="bg-backg-light dark:bg-backg-dark text-t-dark dark:text-white ">
			<header>
				<nav className="container flex justify-between items-center pt-4 sm:pt-12">
					<div className="py-1 ">
						<img className="w-32" src={logo} alt="" />
					</div>
					<button
						className="text-xl  w-10 h-10 rounded-full bg-bookmark-purple text-white"
						type="button"
						onClick={() => setDarkTheme(!darkTheme)}
					>
						{darkTheme ? (
							<i class="uil uil-sun"></i>
						) : (
							<i class="uil uil-moon"></i>
						)}
					</button>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
