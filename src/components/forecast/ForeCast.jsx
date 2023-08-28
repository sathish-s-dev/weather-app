/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
// import { valueData } from './foreItem';
/* eslint-disable react/prop-types */
// import { Suspense, lazy } from 'react';
// import {
// 	Accordion,
// 	AccordionItem,
// 	AccordionItemHeading,
// 	AccordionItemButton,
// 	AccordionItemPanel,
// } from 'react-accessible-accordion';
// const AccordianBody = lazy(() => import('./AccordianBody'));
// import AccordianHeading from './AccordianHeading';
import ForeCastTemplate from './ForeCastTemplate';

import axios from 'axios';

// Initialization for ES Users

function ForeCast({ location }) {
	const [value, setValue] = useState([]);
	useEffect(() => {
		if (location?.loaded) {
			axios
				.request(
					`https://api.openweathermap.org/data/2.5/forecast?lat=${location.value.lati}&lon=${location.value.long}&appid=c997cb3f79be4b19072deb5932e25a5d&units=metric`
				)
				.then((res) => {
					let { list: data } = res.data;
					setValue(data);
				});
			// console.log(val);
		}
		// let { list: data } = val.data;
		// setValue(data);
	}, [location]);

	// let { list: value } = valueData;
	return <ForeCastTemplate value={value} />;
}

export default ForeCast;
