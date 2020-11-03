import React, { useContext } from 'react';
import { Text } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../UI/CardGrid/CardGrid';
import useTopNews from '../../hooks/useTopNews';
import { AppContext } from '../../context/AppProvider';
import * as S from './styles';

const TopNews = () => {
	const locale = useContext(AppContext);
	const { status, data, error, isFetching } = useTopNews(locale.country);

	return (
		<Wrapper>
			<Header title="News App" />
			<S.Headline size={2}>
				Top news from <S.Span>{locale.country}</S.Span>
			</S.Headline>
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
