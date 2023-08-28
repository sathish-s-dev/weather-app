/* eslint-disable react/prop-types */
import { direction } from '../../lib/widgetHelper';
function AccordianBody({ item }) {
	const {
		main: { feels_like, humidity, pressure, temp_max, temp_min },
		wind: { speed, deg },
	} = item;

	const accordianItems = [
		{
			id: 1,
			title: 'Feels Like',
			value: `${feels_like}°C`,
		},
		{
			id: 2,
			title: 'max temp',
			value: `${temp_max}°C`,
		},
		{
			id: 3,
			title: 'min temp',
			value: `${temp_min}°C`,
		},
		{
			id: 4,
			title: 'humidity',
			value: `${humidity}%`,
		},
		{
			id: 5,
			title: 'pressure',
			value: `${pressure}pa`,
		},
		{
			id: 6,
			title: 'wind',
			value: `${speed}m/s ${direction(deg)}`,
		},
	];

	return (
		<div
			className={`dark:bg-slate-900 dark:text-slate-100  bg-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 rounded-md`}>
			{accordianItems.map((i) => {
				return (
					<p
						className='flex justify-between w-full'
						key={i.id}>
						<span>{i.title}</span>{' '}
						<span className='dark:text-slate-100/40 text-sm'>{i.value}</span>
					</p>
				);
			})}
		</div>
	);
}

export default AccordianBody;

/*


<p className='flex justify-between w-full'>
				<span>Feels Like</span>{' '}
				<span className='dark:text-slate-100/40 text-sm'>
					{item.main.feels_like}°C
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>max temp</span>{' '}
				<span className='dark:text-slate-100/40 text-slate-950/80 text-sm'>
					{item.main.temp_max}°C
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>humidity</span>{' '}
				<span className='dark:text-slate-100/40 text-slate-950/80 text-sm'>
					{item.main.humidity}%
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>wind</span>{' '}
				<span className='dark:text-slate-100/40 text-slate-950/80 text-sm'>
					{item.wind.speed} m/s
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>min temp</span>{' '}
				<span className='dark:text-slate-100/40 text-slate-950/80 text-sm'>
					{item.main.temp_min}°C
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>pressure</span>{' '}
				<span className='dark:text-slate-100/40 text-slate-950/80 text-sm'>
					{item.main.pressure}pa
				</span>
			</p>
			<p className='flex justify-between w-full'>
				<span>wind</span>{' '}
				<span className='dark:text-slate-100/40 text-slate-950/80 text-sm'>
					{item.wind.speed} m/s
				</span>
			</p>

*/
