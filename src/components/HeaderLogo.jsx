import { NavLink } from 'react-router-dom';
import weatherIcon from '../assets/weather1.png';

const HeaderLogo = () => {
	return (
		<NavLink to='/weather-app'>
			<div className='flex items-center'>
				<img
					src={weatherIcon}
					alt=''
					className='max-h-12 rounded-full'
				/>
				<h1 className='text-xl uppercase  font-semibold'>
					Weather
					<span className='text-emerald-400 italic text-2xl'>go</span>
				</h1>
			</div>
		</NavLink>
	);
};

export default HeaderLogo;
