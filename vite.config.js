import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
	const config = {
		plugins: [react()],
		base: '/weather-app/',
	};

	return config;
});
