import './App.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from './context/locationContext';
import { lazy, Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
const Widget = lazy(() => import('./components/widget/Widget'));
import Footer from './components/Footer';
import Contact from './components/contact/Contact';
const clerkPubKey =
	'pk_test_YXdhaXRlZC1zdGFybGluZy00OS5jbGVyay5hY2NvdW50cy5kZXYk'; //import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
	const [location, setLocation] = useState({ loaded: false, value: {} });
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			let lati = position.coords.latitude.toFixed(2);
			let long = position.coords.longitude.toFixed(2);
			setLocation({
				loaded: true,
				value: {
					lati,
					long,
				},
			});
		});
	});

	return (
		<Provider value={location}>
			{/* <ClerkProvider publishableKey={clerkPubKey}> */}
			<Header />
			<Routes>
				<Route
					element={<Home />}
					path='/weather-app'
				/>

				<Route
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Widget />
						</Suspense>
					}
					path='/weather-app/checkWeather'
				/>
				<Route
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Contact />
						</Suspense>
					}
					path='/weather-app/contactUs'
				/>
			</Routes>
			<Footer />
			{/* </ClerkProvider> */}
		</Provider>
	);
}

export default App;
