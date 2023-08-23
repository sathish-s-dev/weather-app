/* eslint-disable react/prop-types */
// import React from 'react';
import Widget from '../widget/Widget';

const Home = () => {
	return (
		<div className='w-full flex flex-col'>
			<Widget />
		</div>
	);
};

export default Home;

/*

return (
		<div className='flex gap-4 shadow-sm'>
			<div className='p-14 gap-10 bg-orange-50 flex items-center justify-between mx-auto rounded-xl shadow-lg flex-col'>
				<div className='flex gap-8'>
					<div className='text-slate-800 flex flex-col gap-4'>
						<div>
							<h3 className='text-lg'>Vellore, IN</h3>
						</div>
						<div>
							<h2 className='text-2xl font-bold'>
								32<span>°</span> C
							</h2>
							<p className=''>Cloudy</p>
						</div>
					</div>
					<img
						src={sunnyIcon}
						alt=''
						className='rounded-full h-24'
					/>
				</div>
				<div className='flex justify-between w-full gap-4'>
					<p className='text-sm'>
						wind: <span className='block text-md text-slate-800'>2m/s</span>
					</p>
					<p className='text-sm'>
						humidity: <span className='block text-md text-slate-800'>41%</span>
					</p>
					<p className='text-sm'>
						feels_like:{' '}
						<span className='block text-md text-slate-800'>34° c</span>
					</p>
					<p className='text-sm'>
						pressure:{' '}
						<span className='block text-md text-slate-800'>1006hPa c</span>
					</p>
				</div>
			</div>
		</div>
	);

*/

/*
<p className='text-sm'>
						wind:{' '}
						<span className='block text-md text-slate-800'>
							{speed} m/s {direction(deg)}
						</span>
					</p>
					<p className='text-sm'>
						humidity:{' '}
						<span className='block text-md text-slate-800'>{humidity}%</span>
					</p>
					<p className='text-sm'>
						feels_like:{' '}
						<span className='block text-md text-slate-800'>
							{tempconv(feels_like)}° c
						</span>
					</p>
					<p className='text-sm'>
						pressure:{' '}
						<span className='block text-md text-slate-800'>{pressure}hPa</span>
					</p>

					*/
