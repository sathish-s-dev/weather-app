/* eslint-disable react/prop-types */
import { imgGetter, images } from '../../lib/widgetHelper';

function AccordianHeading({ item }) {
	let date = item.dt_txt.split(' ');

	return (
		<div className='max-w-full  rounded-md p-2 flex  gap-2 items-center dark:bg-slate-200 dark:text-slate-900 border hover:cursor-pointer'>
			<p className='text-[0.8rem]'>
				Date: {date[0].slice(5).split('-').reverse().join('/')} /{' '}
				{date[1].slice(0, 5)}
			</p>
			{/* <div className='flex gap-3'> */}
			<img
				className='h-6'
				src={imgGetter(images, item.weather[0].icon)}
				alt=''
			/>
			<label className='text-sm flex gap-2'>
				<span className=''>{item.main.temp}°C</span>
				<span>{item.weather[0].description}</span>
			</label>
			{/* </div> */}
		</div>
	);
}

export default AccordianHeading;
