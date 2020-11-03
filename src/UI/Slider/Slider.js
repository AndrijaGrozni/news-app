import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, View } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const Slider = ({ cards, renderCards }) => {
	const carousel = useRef();

	return (
		<View>
			<Carousel
				layout="default"
				ref={carousel}
				data={cards}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				useScrollView={true}
				inactiveSlideShift={0}
				renderItem={renderCards}
			/>
		</View>
	);
};

Slider.propTypes = {
	cards: PropTypes.array,
	renderCards: PropTypes.func.isRequired
};

Slider.defaultProps = {
	cards: []
};

export default Slider;
