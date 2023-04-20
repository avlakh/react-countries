import './SearchFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchFilter = (props) => {
	return (
		<section id="filters">
			<form className="search-filter">
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				<input
					type="text"
					id="search"
					placeholder="Search for a country"
					className="search-filter-input"
					value={props.searchInput}
					onChange={(e) => props.searchCountries(e.target.value)}
				/>
			</form>
			<div className="region-filter">
				<select
					className="region-filter-select"
					value={props.filterInput}
					onChange={(e) => props.filterByRegion(e.target.value)}
					name="regions"
				>
					<option value="All">Filter by Region</option>
					<option value="Africa">Africa</option>
					<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>
		</section>
	);
};

export default SearchFilter;
