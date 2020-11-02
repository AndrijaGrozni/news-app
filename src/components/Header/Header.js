import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Icon from '../../UI/Icon/Icon';
import { backArrow } from '../../settings/images';
import * as S from './styles';

const Header = ({ title, customTitle, onPress }) => {
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
		</S.Header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	customTitle: PropTypes.string
};

Header.defaultProps = {
	title: null,
	customTitle: null
};

export default Header;
