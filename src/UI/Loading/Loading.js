import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import * as S from './styles';

const Loading = ({ size }) => (
	<S.Wrapper>
		<ActivityIndicator size={size} />
	</S.Wrapper>
);

Loading.propTypes = {
	size: PropTypes.oneOf(['small', 'large'])
};

Loading.defaultProps = {
	size: 'large'
};
export default Loading;
