import React from 'react';
import { Text } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../UI/CardGrid/CardGrid';
import useTopNews from '../../hooks/useTopNews';
import * as S from './styles';

const TopNews = () => {
	const { status, data, error, isFetching } = useTopNews('us');

	return (
		<Wrapper>
			<Header title="News App" />
			<S.Headline size={2}>Top news from US</S.Headline>
			{status === 'loading' || isFetching ? (
				<Text>Loading...</Text>
			) : status === 'error' ? (
				<Text>Error: {error}</Text>
			) : (
				<CardGrid news={data.articles} />
			)}
		</Wrapper>
	);
};

TopNews.propTypes = {};

TopNews.defaultProps = {};

export default TopNews;
