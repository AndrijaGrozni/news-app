import React, { useContext } from 'react';
import { Text } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../components/CardGrid/CardGrid';
import Loading from '../../UI/Loading/Loading';
import Error from '../../UI/Error/Error';
import useTopNews from '../../hooks/useTopNews';
import { AppContext } from '../../context/AppProvider';
import * as S from './styles';

const TopNews = () => {
	const state = useContext(AppContext);
	const { country } = state;
	const { status, data, isFetching } = useTopNews(country);

	return (
		<Wrapper>
			<Header title="News App" />
			<S.Headline size={1}>
				Top news from <S.Span>{country}</S.Span>
			</S.Headline>
			{status === 'loading' || isFetching ? (
				<Loading />
			) : status === 'error' ? (
				<Error />
			) : (
				<CardGrid news={data.articles} />
			)}
		</Wrapper>
	);
};

TopNews.propTypes = {};

TopNews.defaultProps = {};

export default TopNews;
