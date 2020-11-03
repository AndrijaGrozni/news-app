import React, { useContext } from 'react';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Container from '../../UI/Container/Container';
import CardSlider from '../../components/CardSlider/CardSlider';
import { AppContext } from '../../context/AppProvider';
import * as S from './styles';

const Categories = () => {
	const state = useContext(AppContext);
	const { country, categories } = state;

	return (
		<Wrapper>
			<Header title="Categories" />
			<S.Headline size={1}>
				Top 5 news from <S.Span>{country}</S.Span>
			</S.Headline>
			<Container contentContainerStyle={contentContainerStyleOverride}>
				{categories.map((category) => (
					<CardSlider
						key={category.value}
						country={country}
						category={category.value}
					/>
				))}
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
