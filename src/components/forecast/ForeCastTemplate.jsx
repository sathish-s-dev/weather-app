import { useState } from 'react';
// import { valueData } from './foreItem';
/* eslint-disable react/prop-types */
import { Suspense, lazy } from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
const AccordianBody = lazy(() => import('./AccordianBody'));
import AccordianHeading from './AccordianHeading';

function ForeCastTemplate({ value }) {
	let [length, setLength] = useState(5);
	console.log(value);
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

export default ForeCastTemplate;
