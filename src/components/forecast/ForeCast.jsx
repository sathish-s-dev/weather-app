import { images, imgGetter } from '../../lib/widgetHelper';
function ForeCast() {
	let value = [
		{
			dt: 1692846000,
			main: {
				temp: 303.61,
				feels_like: 305.26,
				temp_min: 303.61,
				temp_max: 303.61,
				pressure: 1008,
				sea_level: 1008,
				grnd_level: 985,
				humidity: 52,
				temp_kf: 0,
			},
			weather: [
				{
					id: 804,
					main: 'Clouds',
					description: 'overcast clouds',
					icon: '04d',
				},
			],
			clouds: { all: 100 },
			wind: { speed: 4.55, deg: 273, gust: 6.25 },
			visibility: 10000,
			pop: 0,
			sys: { pod: 'd' },
			dt_txt: '2023-08-24 03:00:00',
		},
		{
			dt: 1692856800,
			main: {
				temp: 307.37,
				feels_like: 308.7,
				temp_min: 307.37,
				temp_max: 307.37,
				pressure: 1007,
				sea_level: 1007,
				grnd_level: 984,
				humidity: 39,
				temp_kf: 0,
			},
			weather: [
				{
					id: 804,
					main: 'Clouds',
					description: 'overcast clouds',
					icon: '04d',
				},
			],
			clouds: { all: 100 },
			wind: { speed: 4.12, deg: 284, gust: 4.82 },
			visibility: 10000,
			pop: 0,
			sys: { pod: 'd' },
			dt_txt: '2023-08-24 06:00:00',
		},
	];

	return (
		<div className='flex gap-4 bg-fuchsia-300 w-fit p-10 rounded-lg flex-wrap'>
			{value.map((item) => (
				<div
					key={item.dt}
					className='max-w-sm bg-yellow-100 p-8'>
					<img
						className='h-10'
						src={imgGetter(images, item.weather[0].icon)}
						alt=''
					/>
					<p>{item.weather[0].description}</p>
				</div>
			))}
		</div>
	);
}

export default ForeCast;
