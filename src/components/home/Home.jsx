/* eslint-disable react/prop-types */
// import React from 'react';

import NavButton from '../Button';
import Container from '../Container';
import image from '../../assets/weather-icons1.png';

const Home = () => {
	return (
		<div className='w-full flex flex-col'>
			<Hero />
		</div>
	);
};

export default Home;

function Hero() {
	return (
		<div className='bg-img min-h-[90vh] text-slate-900 flex flex-col gap-4'>
			<Container className='flex gap-6 min-h-[90vh] items-center justify-center md:flex-row flex-col'>
				<div className='flex flex-col flex-1 min-h-full gap-10 text-slate-100 p-8 md:p-4'>
					<h1 className='text-4xl font-semibold'>
						Discover Weather
						<span className='italic text-emerald-400'>GO!</span>
					</h1>
					<p className='font-semibold max-w-md text-lg'>
						Explore the world of weather with WeatherGo, your go-to app for
						real-time weather updates and forecasts.
					</p>

					<NavButton
						className='bg-blue-500 hover:bg-blue-600'
						text='Check Weather'
						href='/weather-app/checkWeather'
					/>
				</div>
				<div className='flex-1 max-w-xl'>
					<img
						className='rounded-lg max-w-md'
						src={image}
						alt=''
					/>
				</div>
			</Container>
		</div>
	);
}
