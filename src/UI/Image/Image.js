import React from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

const Image = ({ source, resizeMode, priority, ...props }) => (
	<FastImage
		source={{
			uri: source,
			priority: priority || FastImage.priority.normal
		}}
		resizeMode={resizeMode || FastImage.resizeMode.cover}
		{...props}
	/>
);

Image.propTypes = {
	source: PropTypes.string
};

Image.defaultProps = {
	source: 'https://reactnative.dev/img/tiny_logo.png'
};

export default Image;
