import { useEffect, useState } from 'react';

const useGeoLocation = (setValue) => {
	const [location, setLocation] = useState(null);
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	};

	function success(pos) {
		const crd = pos.coords;

		console.log('Your current position is:');
		console.log(`Latitude : ${crd.latitude}`);
		console.log(`Longitude: ${crd.longitude}`);
		console.log(`More or less ${crd.accuracy} meters.`);

		setLocation({
			loaded: true,
			value: {
				lati: crd.latitude,
				long: crd.longitude,
			},
		});
	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success, error, options);
	}, []);

	setValue(location);
	return location;
};

export default useGeoLocation;
