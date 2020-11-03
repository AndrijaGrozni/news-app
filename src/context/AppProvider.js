import React, { createContext, useState } from 'react';

const AppContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);

const AppProvider = ({ children }) => {
	const [locale, setLocale] = useState({
		country: 'us',
		countries: [
			{ label: 'GB', value: 'gb', icon: null },
			{ label: 'US', value: 'us', icon: null }
		]
	});

	const countrySwitch = (value) => {
		setLocale({ ...locale, country: value });
	};

	return (
		<AppContext.Provider value={locale}>
			<AppDispatchContext.Provider value={countrySwitch}>
				{children}
			</AppDispatchContext.Provider>
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext, AppDispatchContext };
