import React, { Suspense } from 'react';
import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import './CountryPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CountryPageItem from '../../components/CountryPageItem/CountryPageItem';
import Spinner from '../../components/Spinner/Spinner';

const CountryPage = () => {
	const { countryPromise } = useLoaderData();

	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Await resolve={countryPromise}>
					{(country) => {
						return (
							<section id="country-page">
								<div className="container">
									<Link
										to="/"
										className="country-page-back-button"
									>
										<span>
											<FontAwesomeIcon
												icon={faArrowLeft}
											/>
										</span>
										<span>Back</span>
									</Link>
									<CountryPageItem country={country[0]} />
								</div>
							</section>
						);
					}}
				</Await>
			</Suspense>
		</>
	);
};

export default CountryPage;

export const loader = async ({ params }) => {
	return defer({
		countryPromise: fetch(
			`https://restcountries.com/v3.1/alpha/${params.name}`
		).then((response) => response.json()),
	});
};
