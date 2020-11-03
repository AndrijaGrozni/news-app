import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({ items, defaultValue, onChangeItem }) => {
	return (
		<DropDownPicker
			items={items}
			defaultValue={defaultValue}
			containerStyle={styleOverride.containerStyle}
			style={styleOverride.style}
			itemStyle={styleOverride.itemStyle}
			dropDownStyle={styleOverride.dropDownStyle}
			onChangeItem={(item) => onChangeItem(item.value)}
			showArrow={false}
		/>
	);
};

const styleOverride = {
	containerStyle: {
		width: 50,
		height: 38,
		position: 'absolute',
		top: 0,
		right: 10,
		justifyContent: 'center'
	},
	style: {
		backgroundColor: 'white'
	},
	itemStyle: {
		justifyContent: 'center'
	},
	dropDownStyle: {
		backgroundColor: 'white'
	}
};

export default Dropdown;
