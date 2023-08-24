/* eslint-disable react/prop-types */

const WeatherItem = ({ item }) => {
	return (
		<div
			key={item.id}
			className='text-md flex flex-col text-slate-700 w-1/3'>
			<p className='capitalize font-semibold'>{item.name}</p>
			<span className='text-[0.8rem] text-slate-700'>{item.value}</span>
		</div>
	);
};

export default WeatherItem;
