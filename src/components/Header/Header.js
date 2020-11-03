import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Icon from '../../UI/Icon/Icon';
import Dropdown from '../../UI/Dropdown/Dropdown';
import { backArrow } from '../../settings/images';
import { AppContext, AppDispatchContext } from '../../context/AppProvider';
import * as S from './styles';

const Header = ({ title, onPress, dropdownDisabled }) => {
	const state = useContext(AppContext);
	const { country, countries } = state;
	const switchCountry = useContext(AppDispatchContext);

	return (
		<S.Header>
			{onPress && (
				<S.BackButton onPress={onPress}>
					<Icon source={backArrow} size={20} />
				</S.BackButton>
			)}
			<S.SubHeading size={2} textAlign="center" isSubheading>
				{title && <Text>{title}</Text>}
			</S.SubHeading>
			{!dropdownDisabled && (
				<Dropdown
					items={countries}
					defaultValue={country}
					onChangeItem={(item) => switchCountry(item)}
				/>
			)}
		</S.Header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	dropdownDisabled: PropTypes.bool
};

Header.defaultProps = {
	title: null,
	dropdownDisabled: false
};

export default Header;
