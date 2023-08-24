import { SignedOut, UserButton, SignedIn } from '@clerk/clerk-react';
import { AiOutlineMenu } from 'react-icons/ai';
import { mapItems } from '../lib/navItems';
import NavItems from './NavItems';
import HeaderLogo from './HeaderLogo';
const Header = () => {
	const { navItems } = mapItems;
	return (
		<div className='bg-slate-950 w-full flex justify-center'>
			<header className='flex justify-between py-4 px-6 text-yellow-50 items-center w-full  max-w-5xl'>
				<HeaderLogo />
				<div className='flex gap-6 items-center'>
					<NavItems navItems={navItems} />
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
