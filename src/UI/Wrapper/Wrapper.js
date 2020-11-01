import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native';
import * as S from './styles';

const Wrapper = ({ width, height, children, fullscreen }) => (
	<S.Wrapper width={width} height={height}>
		{fullscreen ? (
			<View style={{ flex: 1 }}>{children}</View>
		) : (
			<SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
		)}
	</S.Wrapper>
);

Wrapper.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.any,
	fullscreen: PropTypes.bool
};

Wrapper.defaultProps = {
	width: '100%',
	height: '100%',
	children: null,
	fullscreen: false
};

export default Wrapper;
