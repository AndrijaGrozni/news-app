import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Icon from '../../UI/Icon/Icon';
import Dropdown from '../../UI/Dropdown/Dropdown';
import { backArrow } from '../../settings/images';
import { AppContext, AppDispatchContext } from '../../context/AppProvider';
import * as S from './styles';

const Header = ({ title, customTitle, onPress, dropdownDisabled }) => {
	const locale = useContext(AppContext);
	const switchCountry = useContext(AppDispatchContext);

	return (
		<S.Header>
			{onPress && (
				<S.BackButton onPress={onPress}>
					<Icon source={backArrow} size={20} />
					<S.BackText>Back</S.BackText>
				</S.BackButton>
			)}
			<S.SubHeading size={2} textAlign="center" isSubheading>
				{title && <Text>{title}</Text>}
				{customTitle}
			</S.SubHeading>
			{!dropdownDisabled && (
				<Dropdown
					items={locale.countries}
					defaultValue={locale.country}
					onChangeItem={(item) => switchCountry(item)}
				/>
			)}
		</S.Header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	customTitle: PropTypes.string,
	dropdownDisabled: PropTypes.bool
};

Header.defaultProps = {
	title: null,
	customTitle: null,
	dropdownDisabled: false
};

export default Header;
