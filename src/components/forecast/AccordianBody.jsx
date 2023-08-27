/* eslint-disable react/prop-types */

function AccordianBody({ item }) {
	return (
		<div
			className={`bg-slate-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 rounded-md`}>
			<p className='flex justify-between w-full'>
				<span>Feels Like</span>{' '}
				<span className='text-slate-100/40 text-sm'>
					{item.main.feels_like}°C
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>Maximum Temperature</span>{' '}
				<span className='text-slate-100/40 text-sm'>
					{item.main.temp_max}°C
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>humidity</span>{' '}
				<span className='text-slate-100/40 text-sm'>{item.main.humidity}%</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>wind</span>{' '}
				<span className='text-slate-100/40 text-sm'>{item.wind.speed} m/s</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>min temp</span>{' '}
				<span className='text-slate-100/40 text-sm'>
					{item.main.temp_min}°C
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>pressure</span>{' '}
				<span className='text-slate-100/40 text-sm'>
					{item.main.pressure}pa
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>wind</span>{' '}
				<span className='text-slate-100/40 text-sm'>{item.wind.speed} m/s</span>
			</p>
		</div>
	);
}

export default AccordianBody;
