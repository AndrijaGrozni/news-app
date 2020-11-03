import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import * as navigation from '../../navigation/RootNavigation';
import Slider from '../../UI/Slider/Slider';
import Card from '../../UI/Card/Card';
import * as S from './styles';
import useCategories from '../../hooks/useCategories';

const CardSlider = ({ country, category }) => {
	const { status, data, error, isFetching } = useCategories(
		country,
		category,
		5
	);

	return (
		<S.SlidderOutter>
			<S.Headline size={1}>{category}</S.Headline>
			{status === 'loading' || isFetching ? (
				<Text>Loading...</Text>
			) : status === 'error' ? (
				<Text>Error</Text>
			) : (
				<Slider
					cards={data}
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
			)}
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
