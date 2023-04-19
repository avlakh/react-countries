import './CountriesList.scss';
import CountryListItem from '../CountryListItem/CountryListItem';

const CountriesList = (props) => {
	const { countries } = props;

	return (
		<>
			<section id="countries-list">
				<div className="countries-grid">
					{countries
						.sort((a, b) =>
							a.name.official
								.toLowerCase()
								.localeCompare(b.name.official.toLowerCase())
						)
						.map((country) => {
							return (
								<CountryListItem
									country={country}
									key={country.cca3}
								/>
							);
						})}
				</div>
			</section>
		</>
	);
};

export default CountriesList;
