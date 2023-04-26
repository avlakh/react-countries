import './CountryPageItem.scss';
import { numberFormatter } from '../../helpers/helper-functions';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CountryPageItem = (props) => {
	const { country } = props;

	const accessUnknownObjectValues = (obj) => {
		const objectValues = Object.values(obj);
		const targetObject = Object.values(objectValues[0]);
		return targetObject[0];
	};

	const transformObjectValuesIntoString = (obj) => {
		const values = Object.values(obj);
		const joinedArray = values.reverse().join(', ');
		return joinedArray;
	};

	return (
		<>
			<section className="country-page">
				<div className="country-page-img">
					<LazyLoadImage
						src={country.flags.png}
						alt={`The flag of ${country.name.official}`}
					/>
				</div>
				<div className="country-page-descr">
					<h1>{country.name.official}</h1>
					<div className="descr-details-wrapper">
						<ul className="descr-details">
							<li>
								<span>Native name:</span>{' '}
								{country.name.nativeName
									? accessUnknownObjectValues(
											country.name.nativeName
									  )
									: country.name.official}
							</li>
							<li>
								<span>Population:</span>{' '}
								{numberFormatter(country.population)}
							</li>
							<li>
								<span>Region:</span> {country.region}
							</li>
							<li>
								<span>Subregion:</span>{' '}
								{country.subregion ? country.subregion : 'none'}
							</li>
							<li>
								<span>Capital:</span>{' '}
								{country.capital ? country.capital : 'none'}
							</li>
						</ul>
						<ul className="descr-details">
							<li>
								<span>Top level domain:</span>{' '}
								{country.tld.reverse().join(', ')}
							</li>
							<li>
								<span>Currencies:</span>{' '}
								{country.currencies
									? accessUnknownObjectValues(
											country.currencies
									  )
									: 'none'}
							</li>
							<li>
								<span>Languages:</span>{' '}
								{country.languages
									? transformObjectValuesIntoString(
											country.languages
									  )
									: 'none'}
							</li>
						</ul>
					</div>
					{country.borders ? (
						<div className="descr-border-countries">
							<h4>Border countries:</h4>
							{country.borders.map((border) => {
								return (
									<Link to={`/${border}`} key={border}>
										{border}
									</Link>
								);
							})}
						</div>
					) : (
						<div className="descr-border-countries">
							<h4>Border countries:</h4>
							<span>none</span>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default CountryPageItem;
