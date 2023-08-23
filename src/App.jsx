import './App.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { Routes, Route } from 'react-router-dom';
// import { router } from './routes';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/about/About';

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
					element={<About />}
					path='/about'
				/>
			</Routes>
		</ClerkProvider>
	);
}

export default App;
