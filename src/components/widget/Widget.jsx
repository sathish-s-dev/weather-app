import Container from '../Container';
import Search from '../home/Search';
import WeatherWidget from './WeatherWidget';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Widget = () => {
	const [location, setLocation] = useState('');
	const [weather, setWeather] = useState(null);

	const [lati, long] = location;

	const value = async () => {
		try {
			let res = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&appid=c997cb3f79be4b19072deb5932e25a5d`
			);
			let data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
	};
	let data = value;

	let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=c997cb3f79be4b19072deb5932e25a5d`;

	const getData = async () => {
		try {
			let data = await axios.request(url);
			setWeather(data.data);
		} catch (error) {
			console.log(error.stack);
		}
	};

	useEffect(() => {
		getData();
		// console.log(weather);
	}, [location]);

	const handleSearchData = (searchData) => {
		// const [lati, long] = searchData.value.split(' ');
		setLocation(searchData.value.split(' '));
	};
	return (
		<Container className='flex gap-6 min-h-[90vh] flex-col'>
			<Search handleSearchData={handleSearchData} />
			{weather?.weather ? <WeatherWidget weatherData={weather} /> : ''}
		</Container>
	);
};

export default Widget;
