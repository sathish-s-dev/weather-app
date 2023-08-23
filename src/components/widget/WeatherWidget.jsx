/* eslint-disable react/prop-types */
// import sunnyIcon from '../../assets/sunny1.png';
import { direction, tempConv, images } from '../../lib/widgetHelper';

function WeatherWidget({ weatherData }) {
	const {
		name,
		sys: { country },
		main: { temp, feels_like, humidity, pressure },
		weather,
		wind: { speed, deg },
	} = weatherData;

	const { icon, description, main } = weather[0];

	const img = (images, icon) => {
		const [val] = images.filter((i) => i.name === icon);
		// console.log(val);
		return val.value;
	};

	img(images, icon);

	// let icon = weather[0].icon;
	// console.log(icon);

	let WeatherItems = [
		{
			id: 1,
			name: 'wind:',
			value: `${speed}m/s ${direction(deg)}`,
		},
		{
			id: 2,
			name: 'humidity:',
			value: `${humidity}%`,
		},
		{
			id: 3,
			name: 'feels_like:',
			value: `${tempConv(feels_like)}° c`,
		},
		{
			id: 4,
			name: 'pressure:',
			value: `${pressure}hPa`,
		},
	];

	return (
		<div className='flex gap-4 shadow-sm min-h-screen items-start mx-auto'>
			<div
				className={`p-14 gap-10 w-4/5 ${
					main === 'sunny' ? 'bg-orange-50' : ''
				} flex justify-between mx-auto rounded-xl shadow-lg flex-col flex-1`}>
				<div className='flex gap-8 justify-center items-center sm:flex-row flex-col-reverse '>
					<div className='text-slate-800 flex flex-col gap-4 justify-between sm:text-start text-center flex-1'>
						<div>
							<h3 className='text-lg'>
								{name} {country}
							</h3>
						</div>
						<div>
							<h2 className='text-2xl font-bold'>
								{tempConv(temp)}
								<span>°</span> C
							</h2>
							<p className=''>{description}</p>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<img
							src={img(images, icon)}
							alt=''
							className='rounded-full h-24'
						/>
					</div>
				</div>
				<div className='flex justify-between w-full gap-4 flex-wrap'>
					{WeatherItems.map((item) => {
						return (
							<div
								key={item.id}
								className='text-md flex flex-col'>
								<p className='capitalize'>{item.name}</p>
								<span className='block text-[0.8rem] text-slate-700'>
									{item.value}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default WeatherWidget;
