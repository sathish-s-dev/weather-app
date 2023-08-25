import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { options } from '../../lib/api/getCities';

const Search = ({ handleSearchData }) => {
	const [search, setSearch] = useState(null);
	// console.log(search);

	const handleChange = (searchdata) => {
		setSearch(searchdata);
		handleSearchData(searchdata);
	};
	let loadOptions = async (inputValue) => {
		const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${inputValue}`;

		return fetch(url, options)
			.then((res) => res.json())
			.then((res) => {
				return {
					options: res.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name} ${city.countryCode}`,
						};
					}),
				};
			});
	};
	return (
		<div className='px-4'>
			<AsyncPaginate
				className='w-full md:w-2/3 md:mx-auto'
				placeholder='search cities...'
				debounceTimeout={600}
				value={search}
				onChange={handleChange}
				loadOptions={loadOptions}
			/>
		</div>
	);
};

export default Search;
