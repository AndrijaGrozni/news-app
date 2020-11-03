import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../components/CardGrid/CardGrid';
import useCategory from '../../hooks/useCategory';
import { AppContext } from '../../context/AppProvider';
import * as S from './styles';

const Category = ({ route, navigation }) => {
	const { params } = route;
	const { category } = params;
	const state = useContext(AppContext);
	const { country } = state;
	const { status, data, error, isFetching } = useCategory(country, category);

	return (
		<Wrapper>
			<Header
				title={category}
				button
				onPress={() => {
					navigation.goBack();
				}}
			/>
			<S.Headline size={1}>
				Top news from <S.Span>{country}</S.Span>
			</S.Headline>
			{status === 'loading' || isFetching ? (
				<Text>Loading...</Text>
			) : status === 'error' ? (
				<Text>Error</Text>
			) : (
				<CardGrid news={data.articles} />
			)}
		</Wrapper>
	);
};

Category.propTypes = {
	route: PropTypes.any.isRequired
};

export default Category;
