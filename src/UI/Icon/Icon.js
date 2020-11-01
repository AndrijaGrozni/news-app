import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Icon = ({ source, size, style, width, height }) => {
	const imageSource = typeof source === 'string' ? { uri: source } : source;

	return (
		<S.Image
			source={imageSource}
			width={size || width}
			height={size || height}
			style={style}
		/>
	);
};

Icon.propTypes = {
	source: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	size: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Icon.defaultProps = {
	size: null,
	width: null,
	height: null,
	style: null
};

export default Icon;
