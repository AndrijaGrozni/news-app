import React from 'react';
import PropTypes from 'prop-types';
import * as navigation from '../../navigation/RootNavigation';
import Slider from '../../UI/Slider/Slider';
import Card from '../../UI/Card/Card';
import * as S from './styles';

const CardSlider = ({ news, category }) => {
	return (
		<S.SlidderOutter>
			<S.Headline size={2}>{category}</S.Headline>
			<Slider
				cards={news}
				renderCards={({ item }) => (
					<Card
						fullWidth
						key={item.url}
						title={item.title}
						image={item.urlToImage}
						description={item.description}
						onPress={() =>
							navigation.navigate('Single News', {
								...item
							})
						}
					/>
				)}
			/>
		</S.SlidderOutter>
	);
};

CardSlider.propTypes = {
	news: PropTypes.array,
	category: PropTypes.string
};

CardSlider.defaultProps = {
	news: [],
	category: 'Category name'
};

export default CardSlider;
