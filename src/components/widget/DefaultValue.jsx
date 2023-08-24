/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import WeatherWidget from './WeatherWidget';

function DefaultValue({ defaultLocation }) {
	const [dweather, setDweather] = useState('');

	const GetData = () => {
		let { lati, long } = defaultLocation.value;
		if (lati && long) {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=c997cb3f79be4b19072deb5932e25a5d`
			)
				.then((res) => res.json())
				.then((json) => setDweather(json));
		}
	};

	useEffect(() => {
		GetData();
	}, []);
	if (dweather) {
		return <WeatherWidget weatherData={dweather} />;
	}
}

export default DefaultValue;



// const GetData = () => {
// 	console.log('getdata called');
// 	navigator.geolocation.getCurrentPosition((position) => {
// 		console.log(position);
// 		let lati = position.coords.latitude.toFixed(2);
// 		let long = position.coords.longitude.toFixed(2);

// 		if (lati && long) {
// 			console.log('called', lati, long);
// 			fetch(
// 				`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=c997cb3f79be4b19072deb5932e25a5d`
// 			)
// 				.then((res) => res.json())
// 				.then((json) => setDweather(json));
// 		}
// 	});
// };
