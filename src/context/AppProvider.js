import React, { createContext, useState } from 'react';

const AppContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);

const AppProvider = ({ children }) => {
	const [state, setState] = useState({
		country: 'gb',
		countries: [
			{ label: 'GB', value: 'gb', icon: null },
			{ label: 'US', value: 'us', icon: null }
		],
		categories: [
			{ label: 'General', value: 'general' },
			{ label: 'Entertainment', value: 'entertainment' },
			{ label: 'Health', value: 'health' },
			{ label: 'Science', value: 'science' },
			{ label: 'Sport', value: 'sport' },
			{ label: 'Technology', value: 'technology' }
		]
	});

	const countrySwitch = (value) => {
		setState({ ...state, country: value });
	};

	return (
		<AppContext.Provider value={state}>
			<AppDispatchContext.Provider value={countrySwitch}>
				{children}
			</AppDispatchContext.Provider>
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext, AppDispatchContext };
