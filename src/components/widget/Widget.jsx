/* eslint-disable react/prop-types */
import Container from '../Container';
import Search from '../home/Search';
import WeatherWidget from './WeatherWidget';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useContext } from 'react';
import { LocationContext } from '../../context/locationContext';
import DefaultValue from './DefaultValue';
import ForeCast from '../forecast/ForeCast';

const Widget = () => {
	const [location, setLocation] = useState({ loaded: false, value: {} });

	let defaultLocation = useContext(LocationContext);

	// let foreCast = useFetch(
	// 	`https://api.openweathermap.org/data/2.5/forecast?lat=${location.value.lati}&lon=${location.value.longi}&appid=c997cb3f79be4b19072deb5932e25a5d`,
	// 	load
	// );
	// console.log(foreCast);
	let weather = useFetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${location.value.lati}&lon=${location.value.long}&appid=c997cb3f79be4b19072deb5932e25a5d`,
		location
	);

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
			{/* <ForeCast /> */}
		</Container>
	);
};

export default Widget;
