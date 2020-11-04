import React from 'react';
import PropTypes from 'prop-types';
import * as navigation from '../../navigation/RootNavigation';
import Accordion from '../../UI/Accordion/Accordion';
import Slider from '../../UI/Slider/Slider';
import Card from '../../UI/Card/Card';
import Loading from '../../UI/Loading/Loading';
import Error from '../../UI/Error/Error';
import useCategories from '../../hooks/useCategories';

const CardSlider = ({ country, category }) => {
	const { status, data, isFetching } = useCategories(country, category, 5);

	return (
		<Accordion
			headline={category}
			navigate={() =>
				navigation.navigate('Category', {
					category
				})
			}
		>
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
		</Accordion>
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
