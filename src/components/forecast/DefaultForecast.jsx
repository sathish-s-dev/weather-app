/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ForeCastTemplate from './ForeCastTemplate';
import axios from 'axios';

function DefaultForecast({ defaultLocation }) {
	const [dvalue, setDvalue] = useState([]);
	// console.log(defaultLocation);
	useEffect(() => {
		console.log(defaultLocation.value);
		if (defaultLocation.value.lati) {
			let { lati, long } = defaultLocation.value;
			if (lati && long) {
				axios
					.request(
						`https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&appid=c997cb3f79be4b19072deb5932e25a5d&units=metric`
					)
					.then((res) => {
						let { list: data } = res.data;
						setDvalue(data);
					});
			}
		}
	}, []);
	console.log(dvalue);
	return <ForeCastTemplate value={dvalue} />;
}

export default DefaultForecast;
