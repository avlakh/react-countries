import { Suspense, useState } from 'react';
import { useLoaderData, Await, defer } from 'react-router-dom';
import SearchFilter from '../components/SearchFilter/SearchFilter';
import CountriesList from '../components/CountriesList/CountriesList';
import Spinner from '../components/Spinner/Spinner';

const HomePage = (props) => {
	const [searchInput, setSearchInput] = useState('');
	const [filterInput, setFilterInput] = useState('');
	const [filteredCountries, setFilteredCountries] = useState([]);
	const { countriesPromise } = useLoaderData();

	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Await resolve={countriesPromise}>
					{(countries) => {
						const searchCountries = (value) => {
							setSearchInput(value.toLowerCase());
							let countriesResult;
							const searchedCountries = [...countries];
							if (filterInput !== '') {
								countriesResult = searchedCountries
									.filter(
										(country) =>
											country.region === filterInput
									)
									.filter((item) =>
										Object.values(item)
											.join('')
											.toLowerCase()
											.includes(value.toLowerCase())
									);
								setFilteredCountries(countriesResult);
							} else {
								countriesResult = searchedCountries.filter(
									(country) =>
										Object.values(country)
											.join('')
											.toLowerCase()
											.includes(value.toLowerCase())
								);
								setFilteredCountries(countriesResult);
							}
						};

						const filterByRegion = (value) => {
							setFilterInput(value);
							let countriesResult;
							switch (value) {
								case 'Africa':
									countriesResult = countries.filter(
										(country) =>
											country.region.includes('Africa')
									);
									break;
								case 'Americas':
									countriesResult = countries.filter(
										(country) =>
											country.region.includes('Americas')
									);
									break;
								case 'Asia':
									countriesResult = countries.filter(
										(country) =>
											country.region.includes('Asia')
									);
									break;
								case 'Europe':
									countriesResult = countries.filter(
										(country) =>
											country.region.includes('Europe')
									);
									break;
								case 'Oceania':
									countriesResult = countries.filter(
										(country) =>
											country.region.includes('Oceania')
									);
									break;
								case 'All':
									countriesResult = countries;
									break;
								default:
									countries;
									break;
							}
							setFilteredCountries(countriesResult);
							setSearchInput('');
						};

						return (
							<>
								<div className="container">
									<SearchFilter
										searchCountries={searchCountries}
										searchInput={searchInput}
										filterByRegion={filterByRegion}
										filterInput={filterInput}
									/>
									{filterInput === '' &&
									searchInput === '' ? (
										<CountriesList countries={countries} />
									) : (
										<CountriesList
											countries={filteredCountries}
										/>
									)}
									{filteredCountries.length === 0 && (
										<h3>No countries found...</h3>
									)}
								</div>
							</>
						);
					}}
				</Await>
			</Suspense>
		</>
	);
};

export default HomePage;

export const loader = () => {
	return defer({
		countriesPromise: fetch('https://restcountries.com/v3.1/all').then(
			(response) => response.json()
		),
	});
};
