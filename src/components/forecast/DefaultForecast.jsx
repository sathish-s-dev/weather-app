/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { LocationContext } from '../../context/locationContext';

function DefaultForecast({ defaultLocation }) {
	const GetData = () => {
		console.log(defaultLocation);
		if (defaultLocation) {
			let { lati, long } = defaultLocation.value;

			if (lati && long) {
				axios
					.request(
						`https://api.openweathermap.org/data/2.5/forecast?lat=${location.value.lati}&lon=${location.value.long}&appid=c997cb3f79be4b19072deb5932e25a5d&units=metric`
					)
					.then((res) => {
						let { list: data } = res.data;
						setValue(data);
					});
			}
		}
	};
	const [value, setValue] = useState([]);
	console.log(value);
	useEffect(() => {
		GetData();
	}, []);
	return <div>hi</div>;
}

export default DefaultForecast;
