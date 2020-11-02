import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

const Container = ({
	children,
	showsVerticalScrollIndicator,
	contentContainerStyle,
	isScroll
}) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={showsVerticalScrollIndicator}
			contentContainerStyle={contentContainerStyle}
			scrollEnabled={isScroll}
			bounces={false}
		>
			{children}
		</ScrollView>
	);
};

Container.propTypes = {
	children: PropTypes.node.isRequired,
	showsVerticalScrollIndicator: PropTypes.bool,
	contentContainerStyle: PropTypes.object,
	isScroll: PropTypes.bool
};

Container.defaultProps = {
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		padding: '5% 0% 15% 0%',
		backgroundColor: 'white',
		minHeight: '100%'
	},
	isScroll: true
};

export default Container;
