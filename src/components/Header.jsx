import { SignedOut, UserButton, SignedIn } from '@clerk/clerk-react';
import Container from './Container';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import weatherIcon from '../assets/weather1.png';

const Header = () => {
	const navItems = [
		{
			id: 1,
			name: 'Home',
			href: '/',
		},
	];
	return (
		<div className='bg-slate-950 w-full flex justify-center'>
			<Container>
				<header className='flex justify-between py-4 px-6 text-yellow-50 items-center w-full '>
					<div className='flex items-center'>
						<img
							src={weatherIcon}
							alt=''
							className='max-h-12 rounded-full'
						/>
						<h1 className='text-xl uppercase  font-semibold'>
							Weather<span className='text-emerald-400 italic'>go</span>
						</h1>
					</div>
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
						<AiOutlineMenu className='text-yellow-50 text-2xl block md:hidden' />
					</div>
				</header>
			</Container>
		</div>
	);
};

export default Header;
