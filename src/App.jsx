import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';

import HomePage from './pages/HomePage';
import { loader as fetchAllCountries } from './pages/HomePage';

import CountryPage from './pages/CountryPage/CountryPage';
import { loader as fetchCountryData } from './pages/CountryPage/CountryPage';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
					loader: fetchAllCountries,
				},
				{
					path: '/:name',
					element: <CountryPage />,
					loader: fetchCountryData,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
