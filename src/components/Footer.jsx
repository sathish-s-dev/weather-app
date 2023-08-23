import Container from './Container';
import {} from 'react-icons';
import weatherIcon from '../assets/weather1.png';

const Footer = () => {
	let footerItems = [{}];

  /*
  Contact Us

Have questions or feedback? Reach out to us at support@weathergoapp.com

Follow Us

Stay updated by following us on social media:

Facebook

Twitter

Instagram

Privacy Policy | Terms of Service

  */

	return (
		<div className='bg-slate-950 w-full flex justify-center'>
			<Container>
				<header className='flex justify-between py-4 px-6 text-yellow-50 items-center w-full '>
					<div className='flex items-center'>
						<img
							src={weatherIcon}
							alt=''
							className='max-h-8 rounded-full'
						/>
						<h1 className='text-md uppercase  font-semibold'>
							Weather
							<span className='text-emerald-400 italic text-lg'>go</span>
						</h1>
					</div>
					<div className='flex gap-6 items-center'></div>
				</header>
			</Container>
		</div>
	);
};

export default Footer;
