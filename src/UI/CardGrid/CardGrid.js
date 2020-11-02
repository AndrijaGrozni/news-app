import React from 'react';
import PropTypes from 'prop-types';
import * as navigation from '../../navigation/RootNavigation';
import Card from '../Card/Card';
import Container from '../Container/Container';
import * as S from './styles';

const CardGrid = ({ news }) => {
	return (
		<Container>
			<S.Grid>
				{news.map((article) => (
					<Card
						fullWidth
						key={article.url}
						title={article.title}
						image={article.urlToImage}
						description={article.description}
						onPress={() =>
							navigation.navigate('Single News', {
								...article
							})
						}
					/>
				))}
			</S.Grid>
		</Container>
	);
};

CardGrid.propTypes = {
	news: PropTypes.array
};

CardGrid.defaultProps = {
	news: []
};

export default CardGrid;
