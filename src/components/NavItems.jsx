/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const NavItems = ({ show, setShow, navItems, ...restporps }) => {
	return (
		<nav {...restporps}>
			<div className='w-full flex justify-end md:hidden'>
				<AiOutlineClose
					className='text-2xl cursor-pointer md:hidden hover:scale-105  text-end m-8'
					onClick={() => setShow(!show)}
				/>
			</div>
			{navItems.length > 0 &&
				navItems.map((nav) => {
					return (
						<NavLink
							to={nav.href}
							className='cursor-pointer text-md font-semibold hover:scale-105 flex items-center justify-center transition-all duration-300'
							key={nav.id}>
							{nav.name}
						</NavLink>
					);
				})}
		</nav>
	);
};

export default NavItems;
