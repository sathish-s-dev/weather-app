/* eslint-disable react/prop-types */
import Container from '../Container';
import Search from '../home/Search';
import WeatherWidget from './WeatherWidget';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { LocationContext } from '../../context/locationContext';
import DefaultValue from './DefaultValue';
import ForeCast from '../forecast/ForeCast';
import DefaultForecast from '../forecast/DefaultForecast';
import axios from 'axios';

const Widget = () => {
	const [location, setLocation] = useState({ loaded: false, value: {} });
	const [weather, setWeather] = useState([]);

	let defaultLocation = useContext(LocationContext);

	// let weather = useFetch(

	// 	location
	// );
	useEffect(() => {
		if (location?.value) {
			let { lati, long } = location.value;
			console.log(lati, long);
			if ((lati, long)) {
				axios
					.request(
						`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=c997cb3f79be4b19072deb5932e25a5d&units=metric`
					)
					.then((res) => setWeather(res.data));
			}
		}
	}, [location]);

	const handleSearchData = (searchData) => {
		setLocation({
			loaded: true,
			value: {
				lati: searchData.value.split(' ')[0],
				long: searchData.value.split(' ')[1],
			},
		});
	};
	return (
		<Container className='flex gap-6 min-h-[90vh] flex-col'>
			<Search handleSearchData={handleSearchData} />
			{!location.loaded ? (
				<DefaultValue defaultLocation={defaultLocation} />
			) : (
				''
			)}
			{weather?.weather ? <WeatherWidget weatherData={weather} /> : ''}
			{location?.loaded ? <ForeCast location={location} /> : ''}
			{!location.loaded ? (
				<DefaultForecast defaultLocation={defaultLocation} />
			) : (
				''
			)}
		</Container>
	);
};

export default Widget;
