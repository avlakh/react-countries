import './Header.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
	const [lightModeEnabled, setLightModeEnabled] = useState(() => {
		let localStorageValue = localStorage.getItem('theme');
		let initialColorModeState;
		localStorageValue === 'light' || localStorageValue === null
			? (initialColorModeState = true)
			: (initialColorModeState = false);
		return initialColorModeState;
	});

	const colorModeToggle = () => {
		setLightModeEnabled(!lightModeEnabled);
		localStorage.getItem('theme') === 'dark'
			? localStorage.setItem('theme', 'light')
			: localStorage.setItem('theme', 'dark');
	};

	const currentTheme = localStorage.getItem('theme');
	useEffect(() => {
		if (currentTheme === 'light' || currentTheme === null) {
			setLightModeEnabled(true);
			document.body.classList.add('light-theme');
		} else {
			setLightModeEnabled(false);
			document.body.classList.remove('light-theme');
		}
	}, [currentTheme]);

	const colorModeLayout = lightModeEnabled ? (
		<>
			<FontAwesomeIcon icon={faMoon} />
			<span>Dark mode</span>
		</>
	) : (
		<>
			<FontAwesomeIcon icon={faSun} />
			<span>Light mode</span>
		</>
	);

	return (
		<header>
			<div className="container">
				<h1 className="header-heading">
					<Link to="/">Where in the world?</Link>
				</h1>
				<button className="header-button" onClick={colorModeToggle}>
					{colorModeLayout}
				</button>
			</div>
		</header>
	);
};

export default Header;
