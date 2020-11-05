import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FlatList } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardSlider from '../../components/CardSlider/CardSlider';
import { AppContext } from '../../context/AppProvider';
import * as S from './styles';

const Categories = () => {
	const state = useContext(AppContext);
	const { country, categories } = state;

	return (
		<Wrapper>
			<Header title="Categories" />
			<S.Headline size={2}>
				<FormattedMessage
					id="app.screens.header.categories"
					values={{ country }}
				/>
			</S.Headline>
			<S.Content>
				<FlatList
					data={categories}
					keyExtractor={(item) => item.value}
					renderItem={({ item }) => (
						<CardSlider country={country} category={item.value} />
					)}
				/>
			</S.Content>
		</Wrapper>
	);
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
