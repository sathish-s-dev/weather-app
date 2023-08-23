import './App.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { Routes, Route } from 'react-router-dom';
// import { router } from './routes';
import Header from './components/Header';
import Home from './components/home/Home';
// import About from './components/about/About';
import Widget from './components/widget/Widget';
import Footer from './components/Footer';

const clerkPubKey =
	'pk_test_YXdhaXRlZC1zdGFybGluZy00OS5jbGVyay5hY2NvdW50cy5kZXYk'; //import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
// console.log(clerkPubKey);

function App() {
	return (
		<ClerkProvider publishableKey={clerkPubKey}>
			<Header />
			<Routes>
				<Route
					element={<Home />}
					path='/weather-app'
				/>
				<Route
					element={<Widget />}
					path='/weather-app/checkWeather'
				/>
			</Routes>
			<Footer />
		</ClerkProvider>
	);
}

export default App;
