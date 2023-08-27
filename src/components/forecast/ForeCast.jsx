/* eslint-disable react/prop-types */
import { useState, lazy, Suspense, useEffect } from 'react';
import { valueData } from './foreItem';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordianHeading from './AccordianHeading';
import axios from 'axios';
const AccordianBody = lazy(() => import('./AccordianBody'));

// Initialization for ES Users

function ForeCast({ location }) {
	const [value, setValue] = useState([]);
	useEffect(() => {
		let val = axios
			.request(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${location.value.lati}&lon=${location.value.long}&appid=c997cb3f79be4b19072deb5932e25a5d&units=metric`
			)
			.then((res) => {
				let { list: data } = res.data;
				setValue(data);
			});
		console.log(val);
		// let { list: data } = val.data;
		// setValue(data);
	}, [location]);

	// let { list: value } = valueData;

	let [length, setLength] = useState(5);
	return (
		<div className='flex flex-col    dark:text-slate-100 w-full gap-4 p-10 rounded-lg flex-wrap bg-blue-300  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
			<h2 className='text-xl'>Hourly Forecast:</h2>
			<Accordion className='flex flex-col gap-4'>
				{value &&
					value.slice(0, length).map((item) => {
						return (
							<div key={item.dt}>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											<AccordianHeading item={item} />
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<Suspense fallback={<div>Loading...</div>}>
											<AccordianBody item={item} />
										</Suspense>
									</AccordionItemPanel>
								</AccordionItem>
							</div>
						);
					})}
			</Accordion>
			{length < value.length ? (
				<button onClick={() => setLength(length + 5)}>Load More</button>
			) : (
				<button onClick={() => setLength(5)}>show less</button>
			)}
		</div>
	);
}

export default ForeCast;
