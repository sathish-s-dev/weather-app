import { SignedOut, UserButton, SignedIn } from '@clerk/clerk-react';
import { AiOutlineMenu } from 'react-icons/ai';
import { mapItems } from '../lib/navItems';
import NavItems from './NavItems';
import HeaderLogo from './HeaderLogo';
import { useState } from 'react';
const Header = () => {
	const { navItems } = mapItems;
	const [show, setShow] = useState(false);
	return (
		<div className='bg-slate-950 w-full flex justify-center'>
			<header className='flex justify-between py-4 px-6 text-yellow-50 items-center w-full  max-w-5xl'>
				<HeaderLogo />
				<div className='flex gap-6 items-center'>
					<NavItems
						className='md:flex md:gap-6 md:items-center hidden'
						navItems={navItems}
					/>

					{/* <SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<a href='https://awaited-starling-49.accounts.dev/sign-in'>
							Sign In
						</a>
					</SignedOut> */}
					<AiOutlineMenu
						className='text-yellow-50 text-2xl block md:hidden hover:cursor-pointer hover:scale-105'
						onClick={() => setShow(!show)}
					/>
					{show && (
						<NavItems
							className={`absolute top-0 right-0 z-10 ${
								show ? 'flex' : 'hidden'
							} flex-col gap-10 min-h-screen w-1/2 px-6 bg-slate-950 md:hidden`}
							show={show}
							setShow={setShow}
							navItems={navItems}
						/>
					)}
				</div>
			</header>
		</div>
	);
};
export default Header;
