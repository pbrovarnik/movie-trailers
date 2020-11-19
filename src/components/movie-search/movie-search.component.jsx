import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import InputSearch from '../input-search/input-search.component';
import SearchDropdown from '../search-dropdown/search-dropdown.component';

const MovieSearch = () => {
	const addSearch = useStoreActions((actions) => actions.addSearch);
	const toggleDropdownOpen = useStoreActions(
		(actions) => actions.toggleDropdownOpen
	);
	const search = useStoreState((state) => state.search);
	const isDropdownOpen = useStoreState((state) => state.isDropdownOpen);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	const handleClickOutside = ({ target }) => {
		if (
			target.name !== 'movieSearch' &&
			!target.className.includes('dropdown') &&
			isDropdownOpen
		) {
			toggleDropdownOpen();
		}
	};

	return (
		<div className='input-search'>
			<InputSearch
				handleChange={({ target }) => addSearch(target.value)}
				placeholder='Search movie'
				inputName='movieSearch'
				value={search}
				handleFocus={() => !isDropdownOpen && toggleDropdownOpen()}
			/>
			<SearchDropdown search={search} />
		</div>
	);
};

export default MovieSearch;
