import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as navigation from '../../navigation/RootNavigation';
import Slider from '../../UI/Slider/Slider';
import Card from '../../UI/Card/Card';
import Loading from '../../UI/Loading/Loading';
import Error from '../../UI/Error/Error';
import * as S from './styles';
import useCategories from '../../hooks/useCategories';

const CardSlider = ({ country, category }) => {
	const { status, data, isFetching } = useCategories(country, category, 5);

	return (
		<S.SlidderOutter>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('Category', {
						category
					})
				}
			>
				<S.Headline size={1}>{category}</S.Headline>
			</TouchableOpacity>

			{status === 'loading' || isFetching ? (
				<Loading />
			) : status === 'error' ? (
				<Error />
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
	country: PropTypes.string,
	category: PropTypes.string
};

CardSlider.defaultProps = {
	country: 'us',
	category: 'Category name'
};

export default CardSlider;
