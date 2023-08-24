/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const NavItems = ({ navItems }) => {
	return (
		<nav className='md:flex gap-6 hidden'>
			{navItems.length > 0 &&
				navItems.map((nav) => {
					return (
						<NavLink
							to={nav.href}
							className='cursor-pointer text-md font-semibold hover:scale-110 transition-all duration-300'
							key={nav.id}>
							{nav.name}
						</NavLink>
					);
				})}
		</nav>
	);
};

export default NavItems;
