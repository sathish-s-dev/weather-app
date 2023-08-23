/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const NavButton = (props) => {
	const { text, href, color, className } = props;
	console.log(props);
	return (
		<NavLink
			{...props}
			className={`px-4 py-2  w-fit text-fuchsia-100 rounded-md shadow-sm hover:shadow-md group ${className}`}
			to={href}>
			{text}
		</NavLink>
	);
};

export default NavButton;
