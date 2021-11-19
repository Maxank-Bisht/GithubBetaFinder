import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
	return (
		<nav className='flex justify-between items-center py-4 px-8 w-full mb-4 bg-gray-900 shadow-xl'>
			<h1 className='text-2xl text-white font-medium'>
				<i className={icon}></i>
				{title}
			</h1>
			<ul className='flex gap-4'>
				<li className='bg-gray-100 hover:bg-gray-300 text-xl rounded-xl py-1 px-4 font-medium'>
					<Link to='/' className='text-gray-800'>
						Home
					</Link>
				</li>
				<li className='bg-gray-100 hover:bg-gray-300 text-xl rounded-xl py-1 px-4 font-medium'>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};
Navbar.defaultProps = {
	title: ' Github Beta Finder',
	icon: 'fab fa-github',
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
