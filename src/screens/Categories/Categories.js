import React, { useContext } from 'react';
import { Text } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Container from '../../UI/Container/Container';
import CardSlider from '../../components/CardSlider/CardSlider';
import useCategories from '../../hooks/useCategories';
import { AppContext } from '../../context/AppProvider';
import * as S from './styles';

const Categories = () => {
	const locale = useContext(AppContext);
	const { status, data, error, isFetching } = useCategories(
		locale.country,
		'entertainment',
		5
	);

	return (
		<Wrapper>
			<Header title="Categories" />
			<S.Headline size={2}>
				Top 5 news from <S.Span>{locale.country}</S.Span>
			</S.Headline>
			<Container contentContainerStyle={contentContainerStyleOverride}>
				{status === 'loading' || isFetching ? (
					<Text>Loading...</Text>
				) : status === 'error' ? (
					<Text>Error: {error}</Text>
				) : (
					<CardSlider news={data} />
				)}
			</Container>
		</Wrapper>
	);
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;

const contentContainerStyleOverride = {
	padding: 0,
	backgroundColor: 'white',
	minHeight: '100%'
};
