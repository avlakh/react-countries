import React from 'react';
import { Link } from 'react-router-dom';
import './CountryListItem.scss';
import { numberFormatter } from '../../helpers/helper-functions';

const CountryItem = (props) => {
	const { country } = props;

	return (
		<>
			<div className="country-item">
				<Link to={country.cca3} />
				<div className="country-item-img">
					<img
						src={country.flags.png}
						alt={
							country.flags.alt
								? country.flags.alt
								: country.name.official
						}
					/>
				</div>
				<div className="country-item-text">
					<h3>{country.name.official}</h3>
					<h4>
						Population:{' '}
						<span>{numberFormatter(country.population)}</span>
					</h4>
					<h4>
						Region: <span>{country.region}</span>
					</h4>
					<h4>
						Capital:{' '}
						<span>
							{country.capital
								? country.capital.join(', ')
								: 'none'}
						</span>
					</h4>
				</div>
			</div>
		</>
	);
};

export default CountryItem;
