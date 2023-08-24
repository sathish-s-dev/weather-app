import { SignedOut, UserButton, SignedIn } from '@clerk/clerk-react';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import weatherIcon from '../assets/weather1.png';

const Header = () => {
	const navItems = [
		{
			id: 1,
			name: 'Home',
			href: '/weather-app',
		},
		{
			id: 2,
			name: 'Check Weather',
			href: '/weather-app/checkWeather',
		},
		{
			id: 3,
			name: 'Contact us',
			href: '/weather-app/contactUs',
		},
	];
	return (
		<div className='bg-slate-950 w-full flex justify-center'>
			<header className='flex justify-between py-4 px-6 text-yellow-50 items-center w-full  max-w-5xl'>
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
				<div className='flex gap-6 items-center'>
					<ul className='md:flex gap-6 hidden'>
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
					</ul>
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<a href='https://awaited-starling-49.accounts.dev/sign-in'>
							Sign In
						</a>
					</SignedOut>
					<AiOutlineMenu className='text-yellow-50 text-2xl block md:hidden hover:cursor-pointer hover:scale-105' />
				</div>
			</header>
		</div>
	);
};

export default Header;
